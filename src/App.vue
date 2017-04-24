<template>
  <div id="app">
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" router="true" @select="handleSelect">
      <el-menu-item index="all">全店推广</el-menu-item>
      <el-menu-item index="single">单品推广</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import { MenuItem } from 'element-ui'
export default {
  name: 'app'
}
</script>

<style>
  @import url("//unpkg.com/element-ui/lib/theme-default/index.css");
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
