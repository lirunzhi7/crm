<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="primary" size="small">编辑</el-button>
        <el-button type="danger" size="small" @click="fn(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
 

<script>
  export default {
    created(){
      this.$store.dispatch('getlist')
    },
    methods: {
      handleClick(row) {
        console.log(row);
        this.$router.push({path:'/home/info',query:row})
      },
      fn(row){
        this.$store.dispatch('deletefn',row.id)
      }
    },
    computed: {
      tableData(){
        return this.$store.state.list
      }
    },
  }
</script>

<style scoped lang='less'>
    .el-table__header-wrapper{
        line-height: 20px;
    }
</style>