/*
 * @Descripttion: 路由配置
 * @version: v0.1.1
 * @Author: Appleyk
 * @Blob: https://blog.csdn.net/Appleyk
 * @GitHub: https://github.com/kobeyk
 * @Date: 2020-08-16 00:09:38
 * @LastEditors: Appleyk
 * @LastEditTime: 2020-08-16 01:15:26
 */
exports.router = [
    {
        path: '/',
        component: '../layouts/index',
        routes: [
            { path: '/', component: '../components/login' },
            { path: '/login', component: '../components/login' },
            { path: '/register', component: '../components/login/Register' },
            { path: '/users', component: '../components/user/UserInfo' },
        ]
    }
];

