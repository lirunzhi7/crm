<template>
    <div class="box">
        <el-date-picker
            v-model="date"
            align="right"
            type="date"
            placeholder="选择日期"
            value-format='yyyy-MM-dd'
            class='inp'>
        </el-date-picker>
        <el-input class='inp' v-model="name" placeholder="请输入姓名"></el-input>
        <el-input  class='inp' v-model="province" placeholder="请输入省份"></el-input>
        <el-input  class='inp' v-model="city" placeholder="请输入市区"></el-input>
        <el-input  class='inp' v-model="address" placeholder="请输入地址"></el-input>
        <el-input  class='inp' v-model="num" placeholder="请输入邮编"></el-input>
        <el-button  class='inp' type="info" round @click='fn'>信息按钮</el-button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name:'',
                province:'',
                city:'',
                address:'',
                num:'',
                date:''
            }
        },
        methods:{
            fn(){
                let obj = {
                    date:this.date,
                    province:this.province,
                    name:this.name,
                    city:this.city,
                    address:this.address,
                    zip:this.num
                }
                if(this.$route.query.id !== undefined){
                    obj.id = this.$route.query.id
                }
                console.log(this.$store)
                this.$store.dispatch('addFn',obj)
            }
        },
        created(){
            let obj = this.$route.query
            this.date = obj.date
            this.province = obj.province
            this.name = obj.name
            this.city = obj.city
            this.address = obj.address
            this.num = obj.zip
        }
    }
</script>

<style scoped lang='less'>
    .inp{
        width: 230px;
        display: block;
        margin:  10px auto;
    }
     
</style>