import React, { Component } from 'react';
import loginImg from '../images/home/loginImg.jpg';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';

class Login extends Component {
    state = {}
    render() {
        return (
            <div>
            <Index/> 
            <section id="login">
                <div className="loginMain">
                    <div className="loginContent"><img src={loginImg} alt="" /></div>
                    <div className="loginForm">
                        <p className="loginForm-P">會員登入</p>
                        <form className="loginForm-T" action="">
                            <label for="">電話號碼:
                                <input type="tel" /></label><br />
                            <label for="">密碼:<br />
                                <input type="text" /></label><br />
                            <div className="loginForm-D">
                                <button className="button" type="submit">
                                    登入
                                </button>
                                <button className="button" type="submit">
                                    註冊
                                </button>
                            </div>

                        </form>
                    </div>

                </div>

            </section>
            <Footer/>
            </div>
        );
    }
}

export default Login;