import axios from "axios";
import ENV from '../ENV'
// const ENV = {
// 	qingoo:'http://192.168.1.5:5000',
// 	// mzm:'https://socketapi.writingai.cn'
// 	storage:'localStorage', //sessionStorage
// }
const axiosInstance = axios.create({
	headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Postman-Token': 'cc14a5c6-b67d-4c08-b46e-91ddc6c6bc65'
	},
	// baseURL:  '', // 设置 baseURL
	// timeout: 5000 // 请求超时时间
});

// 添加请求拦截器
axiosInstance.interceptors.request.use(function (config) {
		// 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axiosInstance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  
class Req{
	constructor(){}
	/**
	 * 
	 * @param {*} method 请求方式
	 * @param {*} url 请求url
	 * @param {*} params get请求的参数
	 * @param {*} data post的请求参数
	 */
	static req(method,url, params, data){
		return axiosInstance({
			method: method || "post",
			// url: url, //HOST.qingoo + url,
			url:ENV.hb_host+url,
			params: params,
			data: data
		});
	}

	//axios的get请求
	static aGET(url, params){
		return axios.get(HOST[host]+url,{params:params})
	}
	//axios的post请求
	static POST(url, data){
		// let param = data ? JSON.stringify(data):'';
		// console.log('请求',data)
		// if()
		return axios.post(ENV.hb_host+url,data)
	}
}

export default Req;