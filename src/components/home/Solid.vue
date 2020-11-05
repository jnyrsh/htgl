<template>
  <div>
    <el-form :inline="true" :model="searchMap" ref="ruleForm" class="demo-form-inline">
      <!-- <div class="wrap"> -->
      <el-form-item prop="cardNum">
        <el-input v-model="searchMap.cardNum" placeholder="会员卡号"></el-input>
      </el-form-item>
      <el-form-item prop="name">
        <el-input v-model="searchMap.name" placeholder="会员名字"></el-input>
      </el-form-item>
      <el-form-item prop="payType">
        <el-select v-model="searchMap.payType" placeholder="支付类型">
          <el-option
            v-for="(item,index) in payTypeValue"
            :key="index"
            :label="item.name"
            :value="item.type"
          ></el-option>
        </el-select>
      </el-form-item>
      <!-- </div> -->
      <!-- <div class="block"> -->
      <el-form-item prop="birthday">
        <el-date-picker
          value-format="yyyy-MM-dd"
          v-model="searchMap.birthday"
          type="date"
          placeholder="出生日期"
        ></el-date-picker>
      </el-form-item>
      <el-form-item style="margin-left:10px;">
        <el-button type="primary" @click="onmit">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="toogle">新增</el-button>
      </el-form-item>
      <el-form-item>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
      <!-- </div> -->
    </el-form>
    <el-table :data="list" style="width: 100%" height="250">
      <el-table-column type="index" label="序号" width="60"></el-table-column>
      <el-table-column prop="cardNum" label="会员卡号"></el-table-column>
      <el-table-column prop="name" label="会员姓名"></el-table-column>
      <el-table-column prop="birthday" label="会员生日"></el-table-column>
      <el-table-column prop="phone" label="手机号码" width="110"></el-table-column>
      <el-table-column prop="integral" label="可用积分"></el-table-column>
      <el-table-column prop="money" label="开卡金额"></el-table-column>
      <el-table-column prop="payType" label="支付类型">
        <template slot-scope="scope">
          <span>{{scope.row.payType | pay}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="会员地址" width="180"></el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>

    <el-dialog :title="title" :visible.sync="dialogVisible" width="36%">
      <el-form ref="memberEdit" :model="form" :rules="rules" style="width:400px">
        <el-form-item label="会员卡号" prop="cardNum" :label-width="formLabelWidth">
          <el-input v-model="form.cardNum"></el-input>
        </el-form-item>
        <el-form-item label="会员姓名" prop="name" :label-width="formLabelWidth">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="会员生日" prop="birthday" :label-width="formLabelWidth">
          <el-date-picker v-model="form.birthday" type="date" placeholder="会员生日"></el-date-picker>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone" :label-width="formLabelWidth">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="开卡金额" prop="money" :label-width="formLabelWidth">
          <el-input v-model="form.money"></el-input>
        </el-form-item>
        <el-form-item label="可用积分" prop="intergal" :label-width="formLabelWidth">
          <el-input v-model="form.intergal"></el-input>
        </el-form-item>
        <el-form-item label="支付类型" prop="payType" :label-width="formLabelWidth">
          <el-select v-model="form.payType" placeholder="支付类型">
            <el-option
              v-for="(item,index) in payTypeValue"
              :label="item.name"
              :value="item.type"
              :key="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="会员地址" prop="address" :label-width="formLabelWidth">
          <el-input v-model="form.address" type="textarea"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click=" form.id == null ? submitData('memberEdit') : updatedData('memberEdit')"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import baer from "@/api/shu";
const payType = [
  {
    type: 1,
    name: "现金"
  },
  {
    type: 2,
    name: "微信"
  },
  {
    type: 3,
    name: "支付宝"
  },
  {
    type: 4,
    name: "银行卡"
  }
];
export default {
  data() {
    return {
      title: "",
      rules: {
        cardNum: [
          { required: true, message: "请输入会员卡号", trigger: "blur" },
          { min: 3, max: 30, message: "长度在 3 到 20 个字符", trigger: "blur" }
        ],
        name: [{ required: true, message: "请输入会员姓名", trigger: "blur" }],
        payType: [
          { required: true, message: "请选择支付方式", trigger: "change" }
        ]
      },
      searchMap: {
        cardNum: "",
        name: "",
        payType: "",
        birthday: ""
      },
      list: [],
      currentPage: 1,
      pageSize: 20,
      total: 0,
      payTypeValue: payType,
      dialogVisible: false,
      formLabelWidth: "100px",
      form: {
        id: null,
        cardNum: "",
        name: "",
        birthday: "",
        phone: "",
        money: 0,
        intergal: 0,
        payType: "",
        address: ""
      }
    };
  },
  created() {
    this.fetchData();
  },
  // 遍历付款方式
  filters: {
    pay(data) {
      let payValue = payType.find((item, index) => {
        return item.type == data;
      });
      return payValue.name;
    }
  },
  mounted() {},
  methods: {
    //条数改变时触发
    handleSizeChange(cSize) {
      // console.log("条数");
      this.pageSize = cSize;
      this.fetchData();
      console.log(this.pageSize);
    },
    //页码改变时触发
    handleCurrentChange(cPage) {
      // console.log(cPage);
      this.currentPage = cPage;
      this.fetchData();
      console.log(this.currentPage);
    },
    // 获取数据
    fetchData() {
      // baer.solid(this.currentPage, this.pageSize, this.searchMap).then(res => {
      //   // console.log(res);
      //   this.list = res.data.data.rows;
      //   this.total = res.data.data.total;
      //   // console.log(this.list);
      // });
      // 另一种方式
      baer.solid(this.currentPage, this.pageSize, this.searchMap).then(res => {
        console.log(res);
        this.list = res.data;
        this.total = res.total;
        // console.log(this.list);
      });
    },
    // 重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //查询
    onmit(e) {
      this.fetchData();
      // console.log(e);
    },
    // 新增
    toogle() {
      this.title = "添加会员";
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.$refs["memberEdit"].resetFields();
      });
    },
    //提交表单
    submitData(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          baer.add(this.form).then(res => {
            // console.log(res);
            if (res.data.code == "200") {
              this.fetchData();
            } else {
              this.$message({
                text: res.data.message
              });
            }
          });
        }
        return false;
      });
      this.dialogVisible = false;
    },
    // 删除
    handleDelete(index) {
      this.$confirm("确认删除这条记录吗？?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(res => {
          baer
            .remove(index)
            .then(res => {
              // console.log(res);
              if (res.data.code == 200) {
                this.fetchData();
                this.$message({
                  type: "success",
                  message: res.data.message
                });
              } else {
                this.$message({
                  type: "warning",
                  message: res.data.data.message
                });
              }
            })
            .catch(error => {
              this.$message({
                type: "warning",
                message: "请求失败"
              });
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 编辑
    handleEdit() {
      this.title = "编辑会员";
      baer.find().then(res => {
        // console.log(res);
        if (res.data.code == 200) {
          this.form = res.data.data;
        }
      });
      this.dialogVisible = true;
    },
    // 更新数据的方法
    updatedData(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          baer.updata(this.form.id, this.form).then(res => {
            // console.log(res)
            if (res.data.code == 200) {
              this.fetchData();
              this.$message({
                  type: "success",
                  message: res.data.message
              });
            } else {
              this.$message({
                  type: "success",
                  message: res.data.message
              });
            }
          });
        } else {
          return false;
        }
      });
      this.dialogVisible = false;
    }
  }
};
</script>

<style scoped lang="scss">
.wrap {
  float: left;
}
.block {
  float: left;
}
.demo-form-inline {
  margin-top: 20px;
}
/deep/.el-select {
  width: 110px;
}
.member {
  margin-top: 20px;
}
.el-pagination {
  margin-top: 20px;
}
/deep/ .el-dialog {
  width: 36%;
}
</style>
