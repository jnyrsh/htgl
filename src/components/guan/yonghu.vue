<template>
  <div>
    <el-table :data="getlist" border style="width: 100%; margin-top:20px;">
      <el-table-column type="index" label="#" width="100"></el-table-column>
      <el-table-column prop="registe_time" label="注册日期" width="180"></el-table-column>
      <el-table-column prop="username" label="用户姓名" width="180"></el-table-column>
      <el-table-column prop="city" label="注册地址"></el-table-column>
    </el-table>
    <el-pagination
      @current-change="handleCurrentPage"
      :page-size="pageSize"
      :current-page="currentPage"
      background
      layout="total, prev, pager, next"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import hu from "@/api/shu";
export default {
  data() {
    return {
      getlist: [],
      pageSize: 10,
      currentPage: 1,
      offset: 0,
      total: 0
    };
  },
  created() {
    this.user();
  },
  mounted() {},
  methods: {
    handleCurrentPage(data) {
      console.log(data);
      this.offset = (data - 1) * this.pageSize;
      console.log(this.offset);
      this.user();
    },
    user() {
      hu.getUserList(this.offset, this.pageSize).then(res => {
        console.log(res);
        this.getlist = res;
      });
      hu.getCount().then(res => {
        console.log(res);
        this.total = res.count;
      });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
