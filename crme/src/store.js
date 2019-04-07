import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
axios.defaults.baseURL='http://localhost:9090'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  mutations: {
    changelist(state,option){
      state.list = option
    },
    deletelist(state,option){
      state.list = state.list.filter((item)=>{
        return item.id !== option
      })
    }
  },
  actions: {
    addFn(data,option){
      return axios.post('/add',option)
      //给后端传递个对象用post
    },
    getlist(obj,option){
      console.log(obj)
      return axios.get('/list').then((item)=>{
        obj.commit('changelist',item.data)
      })
    },
    deletefn({commit},option){//删除哪项option是id
      axios.get('/delete',{params:{id:option}}).then((res)=>{
        if(res.data==='success'){
          commit('deletelist',option)
        }
      })
    }
  },
  getters:{
    
  }
})
