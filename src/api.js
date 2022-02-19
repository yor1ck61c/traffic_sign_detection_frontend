import axiosInstance from "@/request";

export  function handle_traffic_sign() {
    return axiosInstance.request({
        url: '/hello',
        method: 'GET'
    })
}