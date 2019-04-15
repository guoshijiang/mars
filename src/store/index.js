import Vue from 'vue'
import Vuex from 'vuex' 
// import modules from './modules'
import factory from '../until/factory' 
import api from '../until/help/api'
// import ZLib from '../utils/tool/zlib';
// import localStorage from '../utils/localstorage' 


Vue.use(Vuex)

let state = {
    //用户信息
    userInfo:{
        assetPwd: "",
        createTime: "",
        email: '',
        id: '',
        loginPwd: "",
        modifyTime: "",
        name: "",
        phone: "",
        status: 1,
        token: "",
        userUuid: "",
    },
    //火币的价格
    totalPrice:{
        BTC:'*',
        price:'*',
        btc_price:'*'
    }
   
}

let getters = {}

let mutations = {
    
    // 设置用户信息的数据
    setUser(state,payload){
        if(payload){
            for (const key in payload) {
                if (payload.hasOwnProperty(key)) {
                    state.userInfo[key] = payload[key];
                }
            }
        }else{
            for (const key in state.userInfo) {
                state.userInfo[key] = '';
            }
        }
        
    },

    // 设置用户信息的数据
    setTotalPrice(state,payload){
        if(payload){
            for (const key in payload) {
                if (payload.hasOwnProperty(key)) {
                    state.totalPrice[key] = payload[key];
                }
            }
        }
        
    }

    
}
let actions = {
    //初始化本地数据到vuex上
    initSettings({commit,state},payload){
        let user = factory.Storage.get('userInfo')
        if(Object.keys(user).length>0){
            commit('setUser',user)
        }
    },
    //初始化实时交易
    async initHb({commit,state},payload){
        let user = factory.Storage.get('userInfo'),appSetInterval=null;
        try {
            appSetInterval = setInterval(async() => {
                let res = await api.APIPOSTMAN('POST','/coincoin/handleTransCoin',{userId:user.id,status:1})
                // clearInterval(appSetInterval);
                // appSetInterval = null;
                console.log('22222111')
            },1000 * 60 * 2);
        } catch (error) {
            console.log(error)
        }
    }
     
}


let store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,

})
export default store