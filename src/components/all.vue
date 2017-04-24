<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script type='text/ecmascript-6'>
  import { Select, Option } from "element-ui";
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '全部管理状态'
        }, {
          value: '选项2',
          label: '智能托管'
        }, {
          value: '选项3',
          label: '店主管理'
        }],
        value: '',
      }
    }
  }
</script>
<style>
  @import url("//unpkg.com/element-ui/lib/theme-default/index.css");
</style>
