import axios from "axios";
const HOST = {
	qingoo:'http://192.168.1.5:5000',
	// mzm:'https://socketapi.writingai.cn'
}
const axiosInstance = axios.create({
	headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cache-Control': 'no-cache',
        'Postman-Token': '3d453e52-72ac-4662-96fd-1b71e6c1d44c'
	},
	baseURL:  '', // 设置 baseURL
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

	static req(method,url, params, data){
		return axiosInstance({
			method: method || "post",
			url: url, //HOST.qingoo + url,
			params: params,
			data: data
		});
	}
	//axios的get请求
	static aGET(url, params,host){
		// return axios.get(HOST[host]+url,{params:params})
	}
	//axios的post请求
	static aPOST(url, data,host){
		// return axios.post(HOST[host]+url,data)
	}
}

export default Req;