import React, { Component } from 'react';
import "./about_us.css";
import "../_css/bootstrap.css";
import "../_js/bootstrap.bundle.js";

class extends Component {
    state = {}
    render() {
        return (
            <body>
                <nav style="text-align: center; height: 10%; width: 100%; background-color: green; font-size: 36px;">nav</nav>
                <header class="header_3">
                    <div class="container">
                        <h4 class="about">ABOUT Ching Shin Fu Chuan</h4>
                        <h5 class="chineseLogo">關於清心福全</h5>
                        <div class="rectangle"></div>
                    </div>
                </header>
                <main>
                    <div class="teaCheckText">
                        茶葉檢驗報告
                    </div>
                    <div style="text-align: center; padding-top: 5%; padding-bottom:5%; color: #005743;">
                        原鄉四季茶葉、特級綠茶茶葉、錫蘭紅茶茶葉、烏龍綠茶茶葉、極品菁茶茶葉、翡翠烏龍茶葉、嚴選高山茶茶葉、特選普洱茶葉等「茶葉」類SGS檢驗報告。
                    </div>
                    <div class="line_check"></div>
                    <div class="row">
                        <div class="col-3 checkText" id="checkText">
                            <a href="/about_us_images/tea_check_images/檢驗報告/原鄉四季.pdf">
                                <img src="/about_us_images/tea_check_images/timthumb.jfif" alt="">
                            </a>
                        </div>
                        <div class="col-3 checkText" id="checkText">
                            <a href="/about_us_images/tea_check_images/檢驗報告/特級綠茶茶葉.pdf">
                                <img src="/about_us_images/tea_check_images/特級綠茶茶葉.jfif" alt="">
                            </a>
                        </div>
                        <div class="col-3 checkText" id="checkText">
                            <a href="/about_us_images/tea_check_images/檢驗報告/錫蘭紅茶茶葉.pdf">
                                <img src="/about_us_images/tea_check_images/錫蘭紅茶.jfif" alt="">
                            </a>
                        </div>
                        <div class="col-3 checkText" id="checkText">
                            <a href="/about_us_images/tea_check_images/檢驗報告/烏龍綠茶茶葉.pdf">
                                <img src="/about_us_images/tea_check_images/烏龍綠茶茶葉.jfif" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3 checkText" id="checkText">
                            <a href="/about_us_images/tea_check_images/檢驗報告/極品菁茶茶葉.pdf">
                                <img src="/about_us_images/tea_check_images/極品菁茶茶葉.jfif" alt="">
                            </a>
                        </div>
                        <div class="col-3 checkText" id="checkText">
                            <a href="/about_us_images/tea_check_images/檢驗報告/翡翠烏龍茶葉.pdf">
                                <img src="/about_us_images/tea_check_images/翡翠烏龍綠茶茶葉.jfif" alt="">
                            </a>
                        </div>
                        <div class="col-3 checkText" id="checkText">
                            <a href="/about_us_images/tea_check_images/檢驗報告/嚴選高山茶茶葉.pdf">
                                <img src="/about_us_images/tea_check_images/嚴選高山茶茶葉.jfif" alt="">
                            </a>
                        </div>
                        <div class="col-3 checkText" id="checkText">
                            <a href="/about_us_images/tea_check_images/特選普洱茶茶葉.jfif">
                                <img src="/about_us_images/tea_check_images/特選普洱茶茶葉.jfif" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="about_us_button">
                        <button class="Button">
                            加入我們
                        </button>
                        <button class="Button">
                            門市據點
                        </button>
                    </div>
                </main>
                <footer style="text-align: center; height: 10%; width: 100%; background-color: green; font-size: 36px;">
                    footer
                </footer>
            </body>
        );
    }
}

export default ;