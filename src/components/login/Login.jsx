/*
 * @Descripttion: 登录组件
 * @version: v0.1.1
 * @Author: Appleyk
 * @Blob: https://blog.csdn.net/Appleyk
 * @GitHub: https://github.com/kobeyk
 * @Date: 2020-08-15 11:13:08
 * @LastEditors: Appleyk
 * @LastEditTime: 2020-08-16 11:58:19
 */
import React, { Component } from 'react';
import styles from './index.scss'
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Link } from 'react-router-dom';
import withRouter from 'umi/withRouter';

class Login extends Component {

    render() {
        const onFinish = values => {
            console.log(this.props);
            console.log('Received values of form: ', values);
            // // 假模拟登录
            // if (values.username === 'admin' && values.password === '123456a') {
            //     message.success('登录成功！')
            //     // 登录成功后，跳转到用户列表
            //     this.props.history.push('/users')
            // } else {
            //     message.error("登录失败！")
            // }

            // 模拟真登录
            let fd = new FormData();
            fd.append("userName", values.username);
            fd.append("password", values.password);
            axios.post("http://58.18.165.148:8088/whdm-server/auth/login", fd).then(req => {
                console.log(req);
                let status = req.data.status
                console.log('status', status);
                if (200 === status) {
                    message.success('登录成功！')
                    // 登录成功后，跳转到用户列表
                    this.props.history.push('/users')
                } else {
                    console.log('error', req.data.message);
                    message.error(req.data.message)
                }
            }).catch(error => {
                console.log('error', error);
            })

        };

        return (

            <div className={styles.form_wrap}>
                <Form
                    name="normal_login"
                    className={styles.login_form}
                    initialValues={{
                        remember: true,
                        username: 'admin',
                        password: '123456a'
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '请输入您的用户名!' }]}
                    >
                        <Input
                            className={styles.input}
                            prefix={<UserOutlined className={styles.icon} />}
                            placeholder="用户名" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入您的密码!' }]}
                    >
                        {/* 带小眼睛的密码框 */}
                        <Input.Password
                            className={styles.input}
                            prefix={<LockOutlined className={styles.icon} />}
                            placeholder="密码"
                        />
                    </Form.Item>
                    <Form.Item className={styles.login_form_tags}>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox className={styles.rem} >记住密码</Checkbox>
                        </Form.Item>
                        <Link className={styles.a} to="/register">立即注册!</Link>
                        <a className={styles.a} href="/#">忘记密码？</a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className={styles.login_form_btn}>
                            登录
        </Button>

                    </Form.Item>
                </Form>
            </div>
        );
    }
}

// 包装成路由组件
export default withRouter(Login)