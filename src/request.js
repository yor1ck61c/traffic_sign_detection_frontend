import axios from 'axios'
// import { ElMessage } from 'element-plus'

const axiosInstance = axios.create({
    baseURL: '/api',
    timeout: 50000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosInstance