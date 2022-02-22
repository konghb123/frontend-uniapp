const BASE_URL = 'http://192.168.10.189:31855'


interface Options {
    url: string, method?: string | null, data?: object | null, header?: string
}


export const http = (options: Options) => {
    return new Promise((resolve, reject) => {
        uni.request({
            url: BASE_URL + '/api' + options.url,
            method: options.method || 'GET',
            data: options.data || {},
            header: { Authorization: uni.getStorageSync('token') },
            success: (res: any) => {
                // if (res == '') {
                //     return uni.showToast({
                //         icon: 'loading',
                //         title: '获取数据失败'
                //     })
                // }
                resolve(res.data)
            },
            fail: (err: any) => {
                // return uni.showToast({
                //     icon: 'loading',
                //     title: '请求失败'
                // })
                console.log('err', err)
                if (err.statusCode == 404) {
                    return uni.showToast({
                        icon: '',
                        title: '接口不存在!'
                    })
                }
                reject(err)
            }
        })
    })
}

const get = (options: Options) => {
    options.method = 'GET'
    return http(options)
}
const post = (options: Options) => {
    options.method = 'POST'
    return http(options)
}

export default {
    get,
    post,
    http
}