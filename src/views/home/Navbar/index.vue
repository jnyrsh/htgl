<template>
  <div>
    <el-aside width="230px">
      <el-menu
        :default-active="$route.path"
        :router="true"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="/home">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/solid">
          <i class="el-icon-user-solid"></i>
          <span slot="title">会员管理</span>
        </el-menu-item>
        <el-menu-item index="/cooperation">
          <i class="el-icon-s-cooperation"></i>
          <span slot="title">供应商管理</span>
        </el-menu-item>
        <el-menu-item index="/goods">
          <i class="el-icon-s-goods"></i>
          <span slot="title">商品管理</span>
        </el-menu-item>
        <el-menu-item index="/user">
          <i class="el-icon-user"></i>
          <span slot="title">员工管理</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-folder"></i>
            <span>数据管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/yonghu">用户列表</el-menu-item>
            <el-menu-item index="/shanjia">商家列表</el-menu-item>
            <el-menu-item index="/shipin">食品列表</el-menu-item>
            <el-menu-item index="/dingdan">订单列表</el-menu-item>
            <el-menu-item index="guanli">管理员列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.el-aside {
  background-color: #545c64;
  color: #fff;
  position: absolute;
  top: 60px;
  left: 0;
  bottom: 0;
  overflow-y: auto;
}
.el-submenu{
  overflow: hidden;
}
</style>
