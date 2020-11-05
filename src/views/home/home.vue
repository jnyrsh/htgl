<template>
  <div class="home_wrap">
    <el-container height="100%">
      <Header></Header>
      <el-container>
        <Navbar></Navbar>
        <Main>
          
        </Main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "../home/Header/index"
import Navbar from "../home/Navbar/index"
import Main from "../home/Main/index"
export default {
  data() {
    return {
      tabPosition: "left"
    };
  },
  components:{
    Header,
    Navbar,
    Main
  },
  created() {},
  mounted() {},
  methods: {}
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

.el-aside {
  background-color: #545c64;
  color: #fff;
  position: absolute;
  top: 60px;
  left: 0;
  bottom: 0;
  overflow-y: auto;
}

.el-main {
  //   background-color: #e9eef3;
  color: #fff;
  position: absolute;
  top: 50px;
  left: 230px;
  right: 0px;
  bottom: 0px;
  padding: 10px;
  overflow-y: auto;
  //   text-align: center;
}

.el-col {
  width: 100%;
  height: 100%;
}
.home_wrap {
  position: absolute;
  width: 100%;
  height: 100%;
  .el-container {
    height: 100%;
  }
  .tac {
    height: 100%;
  }

}
</style>
