<template>
    <div class="box">
        <el-container class="innder">
            <el-header>Header</el-header>
            <el-container class="innder_box">
                <el-aside width="200px" class="menu_box">
                    <div class="inner_box"> 
                        <mymenu></mymenu>
                    </div> 
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
            <el-footer>footer</el-footer>
        </el-container>
    </div>
</template>

<script>
    import mymenu from './menu.vue'
    export default {
        components:{
            mymenu
        }
    }
</script>

<style scoped lang='less'>
    .el-header,
    .el-footer {
        background-color: #b3c0d1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #d3dce6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: lightseagreen;
        color: #333;
        text-align: center;
        line-height: 30px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
    .box{
        width: 100%;
        height: 100%;
        .innder{
            width: 100%;
            height: 100%;
            text-align: center;
            .innder_box{
                height: 100%;
                .menu_box{//把滚动条隐藏展示滚动效果
                    height: 100%;
                    overflow-x: hidden;
                    color: yellow;
                    .inner_box{
                        width: 230px;
                        height: 100%;
                        overflow-x: hidden;
                    }
                }
            }
             
        }
    }
   
</style>