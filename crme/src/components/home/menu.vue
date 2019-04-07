<template>
    <div>
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="2">
                <router-link to='/home/table' class='inner' active-class='current'>
                    <i class="el-icon-menu"></i>
                    <span class="font">人物列表</span>
                </router-link>
            </el-menu-item>
            <el-menu-item index="3">
                <router-link to='/home/info' active-class='current'>
                    <i class="el-icon-document"></i>
                    <span class="font">人物管理</span>
                </router-link>
            </el-menu-item>
         </el-menu>
    </div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>


<style scoped lang='less'>
    div{
        height: 100%;
        .el-menu-vertical-demo{
            width: 230px;
            height: 100%;
        }
    }
    .font{
        font-size: 23px;
        color: yellow;
        
    }
     
         
</style>