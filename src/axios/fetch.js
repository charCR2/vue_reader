import axios from 'axios'
import router from '../router'                       // 路由配置文件

const ENV = process.env.NODE_ENV

// 创建axios实例
const service = axios.create({
  // baseURL:"http://novel.juhe.im/",代理服务器请求接口地址
  timeout: 10000,
  method: 'get'
})

// request 请求发送之前 拦截器
service.interceptors.request.use(config => {
  const Authorization = sessionStorage.getItem('Authorization')
  if (Authorization) {
    config.headers['Authorization'] = Authorization // 让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// request 请求收到后 拦截器设置
service.interceptors.response.use(
  response => {
    if (response) {
      switch (response.status) {
        case 200: break;
        // case 'B1000':                                 //  清除token信息并跳转到登录页面
        //   sessionStorage.removeItem('Authorization')  // 将token清空
        //   Message.error(response.data.data.msg)       // 提示错误信息
        //   router.replace({ path: '/login' })
        //   break;
        default:
          Message.error(response.data.data.msg ? response.data.data.msg : '返回状态非200')
      }
      return response
    } else {
      Message.error('响应成功，但是响应信息不存在！')
    }
  },
  error => {
    Message.error(ENV === 'development' ? error.message : '请求错误！')
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  })

export default service
