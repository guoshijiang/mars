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
    //获取我的编辑
    static getEditListOld(params,data){
        return new Promise(async(resolve,reject)=>{
            try {
                let res = await req.req('get',"/v2/editors", params, data,'qingoo')
                return resolve(res)
            } catch (error) {
                return reject(error)
            }
        })
    }
    
}
export default Api;