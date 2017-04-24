<template>
  <div class="all">
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
<!--    <el-select v-model="value2" placeholder="请选择">
      <el-option
        v-for="item in options2"
        :label="item.label"
        :value2="item.value2">
      </el-option>
    </el-select>
    <el-select v-model="value3" placeholder="请选择">
      <el-option
        v-for="item in options3"
        :label="item.label"
        :value3="item.value3">
      </el-option>
    </el-select>
    <el-select v-model="value4" placeholder="请选择">
      <el-option
        v-for="item in options4"
        :label="item.label"
        :value4="item.value4">
      </el-option>
    </el-select>-->
  </div>
</template>

<script type='text/ecmascript-6'>
  import { Select, Option } from "element-ui";
  export default {
  	name:'all',
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
       /* options2: [{
          value2: '选项1',
          label: '全部计划'
        }, {
          value2: '选项2',
          label: '有效计划'
        }, {
          value2: '选项3',
          label: '正在投放'
        }, {
          value2: '选项4',
          label: '暂停投放'
        }, {
          value2: '选项5',
          label: '等待投放'
        }, {
          value2: '选项6',
          label: '结束投放'
        }, {
          value2: '选项7',
          label: '投放障碍'
        }],
        options3: [{
          value3: '选项1',
          label: '全部计划类型'
        }, {
          value3: '选项2',
          label: '自定义计划'
        }, {
          value3: '选项3',
          label: '日常托管计划'
        },{
          value3: '选项4',
          label: '日常推荐计划'
        }, {
          value3: '选项5',
          label: '服务商计划'
        }],
        options4: [{
          value4: '选项1',
          label: '所有付费方式'
        }, {
          value4: '选项2',
          label: '按点击付费（CPC）'
        }, {
          value4: '选项3',
          label: '按展现付费（CPM）'
        }],*/
        value: '',
        /*value2: '',
        value3: '',
        value4: '',*/
      }
    }
  }
</script>
<style>
  @import url("//unpkg.com/element-ui/lib/theme-default/index.css");
</style>
