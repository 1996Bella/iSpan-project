import React, { Component } from 'react';
import "./about_us.css";
import "../_css/bootstrap.css";
import "../_js/bootstrap.bundle.js";
import img_tea from 'about_us_images/food_images/堅持-茶葉.jpg';
import img_person from 'about_us_images/food_images/堅持-店員.jpg';
import img_drink from 'about_us_images/food_images/堅持-飲料.jpg';


class about_us_2 extends Component {
    state = {}
    render() {
        return (
            <body>
                <Index />
                <header className="header_2">
                    <div className="container">
                        <h4 className="about">ABOUT Ching Shin Fu Chuan</h4>
                        <h5 className="chineseLogo">關於清心福全</h5>
                        <div className="rectangle"></div>
                    </div>
                </header>
                <main>
                    <div className="row brandStrictContent">
                        <div className="col-2">
                            <div className="left_title_word" style="left: 13%;">
                                品牌嚴選
                            </div>
                            <div className="line_brandStrict"></div>
                        </div>
                        <div className="col-10" style="text-align: center;">
                            <div className="row">
                                <div className="col-4 teaPicture">
                                    <div className="foodText">
                                        茶葉<br />
                                        檢驗報告
                                    </div>
                                    <a href="/about_us_3.html"><button class="smallButton">查看更多</button></a>
                                </div>
                                <div className="col-4 solidPicture">
                                    <div className="foodText">
                                        固態食材<br />
                                        檢驗報告
                                    </div>
                                    <button className="smallButton">查看更多</button>
                                </div>
                                <div className="col-4 liquidPicture">
                                    <div className="foodText">
                                        液態食材<br />
                                        檢驗報告
                                    </div>
                                    <button className="smallButton">查看更多</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4 milkPicture">
                                    <div className="foodText">
                                        乳品及鮮果<br />
                                        檢驗報告
                                    </div>
                                    <button className="smallButton">查看更多</button>
                                </div>
                                <div className="col-4 pickPicture">
                                    <div className="foodText">
                                        包材<br />
                                        檢驗報告
                                    </div>
                                    <button className="smallButton">查看更多</button>
                                </div>
                                <div className="col-4 elsePicture">
                                    <div className="foodText">
                                        其他<br />
                                        檢驗報告
                                    </div>
                                    <button className="smallButton">查看更多</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row PersistenceContent">
                        <div className="col-10">
                            <div className="row">
                                <div className="col-4 persistence">
                                    <img src={img_tea} />
                                        <div className="persistenceTeaText">「清心福全」落實食品安全衛生管理，不僅嚴選優質原物料，更實施自主檢驗。</div>
                                </div>
                                <div className="col-4 persistence">
                                    <img src={img_person} />
                                        <div className="persistencePersonText">「清心福全」強調顧客至上、品管優先、服務第一，「用心」專注於每一環節。</div>
                                </div>
                                <div className="col-4 persistence">
                                    <img src= {img_drink} />
                                        <div className="persistenceDrinkText">10種系列飲品，各有獨到的風味與口感，以提供消費者全方位、多樣化的手搖飲料推薦選擇。</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="line_brandPersistence"></div>
                            <div className="left_title_word" style="left: 12%;">
                                品牌堅持
                            </div>
                        </div>
                    </div>
                    <button />
                </main>
                <Footer />
            </body>
        );
    }
}
export default about_us_2;