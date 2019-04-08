import req from './req' //req.req

/**
 * 请求接口统一管理
 */ 
class Api {
    constructor(){}
    //测试
    static ceshiaxios(params,data){
        return new Promise(async(resolve,reject)=>{
            try {
                let res = await req.req('post',"/api/user/get_user_info")
                return resolve(res)
            } catch (error) {
                return reject(error)
            }
        })
    }
    //获取验证码
    static getCode(params,data){
        return new Promise(async(resolve,reject)=>{
            try {
                let res = await req.POST("/user/sendRegistCode", data)
                return resolve(res)
            } catch (error) {
                return reject(error)
            }
        })
    }
    //手机号注册 
    static register(data){
        return new Promise(async(resolve,reject)=>{
            try {
                let res = await req.POST("/user/registerPhone", data)
                return resolve(res)
            } catch (error) {
                return reject(error)
            }
        })
    }
    //登陆
    static loginHb(params,data){
        return new Promise(async(resolve,reject)=>{
            try {
                let res = await req.req('POST',"/v2/user/loginByPhone", params, data)
                return resolve(res)
            } catch (error) {
                return reject(error)
            }
        })
    }
    /***
     * 接口请求统一处理
     * 
    */
    static APIPOSTMAN(type,url,params,data){
        return new Promise(async(resolve,reject)=>{
            try {
                let res = await req.req('POST',url, params, data)
                return resolve(res)
            } catch (error) {
                return reject(error)
            }
        })
    }
    
}
export default Api;