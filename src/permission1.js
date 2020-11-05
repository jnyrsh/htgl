/*
权限验证
    1. 页面跳转的时候,判断本地有没有token
        1.1 没有
                --- 跳转到登录页
        1.2 有
                --- 判断是否成功获取用户信息

                    1.2.1 成功获取
                                    --- 跳转到首页
                    1.2.2 获取失败
                                    --- 重新登录
*/
// 引入路由对象
import router from "./router"

// 引入登录模块
import loaginApi from "./api/test"

//创建路由守卫 --- 只要路由跳转的时候,就会触发
// to 即将要进入的目标路由对象
// from 当前导航正要离开的路由对象
// next 调用该方法，进入目标路由

router.beforeEach((to, from, next) => {
    if (to.meta.oAuth) {
        let token = localStorage.getItem("hyn_token")
        if (token) {
            next("/login/index")
        }
    } else {
        //有token的情况下判断他是否进入到登录页
        //获取本地存储的用户信息
        let info = localStorage.getItem("hyn_info");

        //判断是否有用户信息
        if (info) {
            next()
        } else {
            loaginApi.login().then(res => {
                if (res.code == 200) {
                    localStorage.setItem("hyn_info", JSON.stringify(res.data.data))
                    next()
                } else {
                    next("/login/index")
                }
            })
        }
    }
})