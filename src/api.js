import axiosInstance from "@/request";

export function handle_traffic_sign() {
    return axiosInstance.request({
        url: '/hello',
        method: 'GET'
    })
}

export function upload_img(data) {
    return axiosInstance.request({
        url:'/upload',
        method: 'POST',
        data
    })
}