/*
 * @Descripttion: 
 * @version: v0.1.1
 * @Author: Appleyk
 * @Blob: https://blog.csdn.net/Appleyk
 * @GitHub: https://github.com/kobeyk
 * @Date: 2020-08-14 23:23:40
 * @LastEditors: Appleyk
 * @LastEditTime: 2020-08-16 01:15:55
 */

// ref: https://umijs.org/config/

const {router} = require('./src/pages/router');

export default {
  treeShaking: true,
  history: 'hash',
  hash:true,    //配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存(每次发布后 无需给浏览器清缓存即可访问)
  publicPath:'./',
  routes:router,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      // true，会按需加载
      antd: true,
      dva: false,
      dynamicImport: false,
      title: 'umi-project',
      dll: false,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}
