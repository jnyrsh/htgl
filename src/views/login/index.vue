<template>
  <div class="login_wrap">
    <div class="login_deng">
      <el-form :model="form" :rules="rules" ref="form" label-width="100px">
        <h2>积云后台管理系统</h2>
        <el-form-item label="账号" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="form.pass"></el-input>
        </el-form-item>

        <el-form-item style="margin-left:0px;">
          <el-button type="primary" @click="submitForm('form')">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import loging from "@/api/test";
export default {
  data() {
    return {
      form: {
        name: "",
        pass: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 5, max: 10, message: "长度在 5 到 10 个字符", trigger: "blur" }
        ]
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //1调用登录接口
          loging.login(this.form.name, this.form.pass).then(res => {
            console.log(res);
            let code = res.data.code;
            console.log(code);
            if (code == 200) {
              //获取token
              let token = res.data.data.token;
              console.log(token);
              //吧token存储到本地
              localStorage.setItem("hyn_token", token);
              //2获取用户信息
              loging.getUser().then(res => {
                let resp = res.data;
                // console.log(resp)
                if (resp.data.code == 200) {
                  //将获取到的用户信息保存到本地
                  localStorage.setItem(
                    "hyn_info",
                    JSON.stringify(resp.data.data)
                  );
                  //跳转到首页
                  this.$router.push("/");
                } else {
                  // 获取信息失败, 弹出警告
                  this.$message({
                    message: resp.message,
                    type: "warning"
                  });
                }
              });
            } else {
              this.$message({
                message: res.message,
                type: "warning"
              });
            }
          });
        } else {
          //   console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.login_wrap {
  width: 100%;
  height: 100%;
  background: url("http://mengxuegu.com:9999/img/login.b665435f.jpg");
  background-size: 100% 100%;
  position: absolute;
}
.login_deng {
  width: 520px;
  height: 420px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.8);
  margin: 150px auto;
  padding: 30px 50px 30px 30px;
}
.el-form-item {
  margin-bottom: 50px;
  .el-form-item__content {
    margin-left: 0px;
  }
}
h1 {
  text-align: center;
}
.el-form {
  text-align: center;
}
</style>
