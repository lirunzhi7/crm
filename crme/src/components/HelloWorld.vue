<template>
    <div>
      <el-container>
        <el-header><i class="el-icon-edit"></i>Header</el-header>
        <el-container>
          <el-aside width="200px"> <i class="el-icon-share"></i>Aside</el-aside>
          <el-main><i class="el-icon-delete"></i>footer</el-main>
        </el-container>
      </el-container>
          <el-button>默认按钮</el-button>
           <el-button type="primary" disabled>主要按钮</el-button>
            <el-button type="info">信息按钮</el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
           <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="success" icon="el-icon-check" circle></el-button>
          <div class="block">
            <span class="demonstration">距离毕业</span>
            <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
          </div>
          <div class="block">
          <span class="demonstration">带快捷选项</span>
          <el-date-picker
            v-model="value2"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions1">
          </el-date-picker>
        </div>
            <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="sex"
            label="性别"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
    </el-table>
    <el-button type="text" @click="open2">不喜欢就删除咯</el-button>
    </div>
</template>

<script>
export default {
   data() {
      return {
         
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            sex:'男',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
               sex:'男',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
               sex:'男',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
               sex:'男',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
       
        value1: '',
        value2: '',
       
          };
        },
         methods: {
                    open2() {
                    this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                      confirmButtonText: '确定',
                      cancelButtonText: '取消',
                      type: 'warning'
                    }).then(() => {
                      this.$message({
                        type: 'success',
                        message: '删除成功!'
                      });
                    }).catch(() => {
                      this.$message({
                        type: 'info',
                        message: '已取消删除'
                   });          
                });
              }
            }
      };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;}
</style>
