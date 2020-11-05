<template>
  <div>
    <el-header>
      <p class="home_p">
        <img src="http://mengxuegu.com:9999/img/logo.7156be27.png" width="30px" alt />
        <span>积云后台管理系统</span>
      </p>
      <p class="home_pp">
        <el-dropdown @command="handle">
          <span class="el-dropdown-link">
            {{ name }}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item class="el-icon-edit" command="changePass">修改密码</el-dropdown-item>
            <br />
            <el-dropdown-item class="el-icon-s-fold" command="checkout">退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </p>
    </el-header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  created() {
    let info = JSON.parse(localStorage.getItem("jy_info"));
    this.name = info.name !== "undefined" ? info.name : "";
  },
  mounted() {},
  methods: {
    handle(command) {
      switch (command) {
        case "changePass":
          this.changePass();
          break;
        case "checkout":
          this.checkout();
          break;
      }
    },
    changePass() {
      alert(111);
    },
    checkout() {
      //清除本地储存的token
      localStorage.removeItem("jy_token");
      //清除本地储存的信息
      localStorage.removeItem("jy_info");

      //跳转登录页面
      this.$router.push("/login/index");
    }
  }
};
</script>

<style scoped lang="scss">
.el-header {
  background-color: #2d3a4b;
  color: #fff;
  //   text-align: center;
  //   line-height: 50px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  //   font-size: 20px;
  .home_p {
    float: left;
    line-height: 30px;
    span {
      margin-left: 10px;
      font-size: 20px;
    }
    img {
      vertical-align: middle;
      margin-left: 20px;
    }
  }
  .home_pp {
    float: right;
    color: #fff;
    .el-dropdown {
      color: #fff;
    }
  }
}
</style>
