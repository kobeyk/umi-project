/*
 * @Descripttion: 底部组件
 * @version: v0.1.1
 * @Author: Appleyk
 * @Blob: https://blog.csdn.net/Appleyk
 * @GitHub: https://github.com/kobeyk
 * @Date: 2020-08-15 11:15:43
 * @LastEditors: Appleyk
 * @LastEditTime: 2020-08-16 00:29:50
 */
import React, { Component } from 'react';
import styles from './index.scss';
class Footer extends Component {
    render() {
        return (
            <div className={styles.copyright}>
                <span >
                    版权所有：会做饭会打球会疼老婆写的了一手好代码的余先生
                </span>
                <div style={{padding:10}}>
                    <a className={styles.a} href="https://blog.csdn.net/Appleyk" target="_blank" rel="noopener noreferrer">我的CSDN博客</a>
                    <a className={styles.a} href="https://github.com/kobeyk" target="_blank" rel="noopener noreferrer">我的GitHub地址</a>
                </div>
            </div>
        );
    }
}

export default Footer;