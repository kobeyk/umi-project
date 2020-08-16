import React, { Component } from 'react';
import styles from './index.scss'
import Login from './Login'
import Footer from '../../layouts/Footer'
class Index extends Component {
    render() {
        return (
            <div className={styles.login_index}>
                <div className={styles.login}>
                    <p className={styles.p}>登录界面</p>
                    <div />
                    <Login />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Index;