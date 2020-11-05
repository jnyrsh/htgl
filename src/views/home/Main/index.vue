<template>
  <div>
    <el-main>
      <el-breadcrumb v-show="$route.path !== '/home'" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item class="line">{{$route.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
      <router-view />
    </el-main>
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
.el-main {
  //   background-color: #e9eef3;
  position: absolute;
  top: 70px;
  left: 230px;
  right: 0px;
  bottom: 0px;
  padding: 10px;
  // overflow-y: auto;
  //   text-align: center;
}
.el-breadcrumb {
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.line {
  border-left: 3px solid red;
  padding-left: 10px;
}
</style>
