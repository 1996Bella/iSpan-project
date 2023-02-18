import React, { Component } from 'react';
import '../css/index.css';


class Member extends Component {
    state = {}
    render() {
        return (
            <div className="dataImg">
                <div className="dataImg-d">
                    <div className="data-M-img"><img src="" alt="" />
                        <div>上傳</div>
                    </div>
                    <button className="button">
                        上傳
                    </button>
                </div>
                <form className="memberForm-T" action="">
                    <div className="memberForm-d">
                        <div className="memberForm-dd">
                            <label for="">姓名:<br />
                                <input type="text" /></label><br />
                            <label for="">暱稱:<br />
                                <input type="text" /></label><br />
                            <label for="">手機號碼:<br />
                                <input type="tel" /></label>
                        </div>
                        <div className="memberForm-dd">
                            <div className="gender"> 性別: <br />
                                <input type="radio" />女<input type="radio" />男</div>
                            <label for="">生日:<br />
                                <input type="text" /></label><br />
                            <label for="">地址:<br />
                                <input type="text" /></label>
                        </div>

                    </div>
                    <div className="memberForm-D">
                        <button className="button ">
                            確認
                        </button>
                    </div>
                </form>

            </div>

        );
    }
}

export default Member;