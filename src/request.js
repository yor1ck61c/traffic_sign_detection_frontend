import axios from 'axios'
// import { ElMessage } from 'element-plus'

const axiosInstance = axios.create({
    baseURL: '/api',
    timeout: 5000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

// axiosInstance.interceptors.response.use(
//     response => {
//         const res = response.data
//         if(res.code !== 200){
//             ElMessage({
//                 message: res.msg ,
//                 type: 'error',
//                 duration: 5 * 1000
//             })
//         }
//     }
// )



export default axiosInstance