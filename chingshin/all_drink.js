import React, { Component } from 'react';

class all_drink extends Component {
    state = {}
    render() {
        return (
            <body>
                <nav style="text-align: center; height: 10%; width: 100%; background-color: green; font-size: 36px;">nav</nav>
                <main>
                    <div class="row">
                        <div class="col-3 drinksPicture">
                            <div>
                                <img src="all_drink_images/MT01/仙草凍奶茶.png" alt="">
                            </div>
                            <div class="topping_content">
                                <div class="topping_title">
                                    加料
                                </div>
                                <div>
                                    <p>珍珠</p>
                                    <div>粉圓</div>
                                    <div>QQ</div>
                                    <div>布丁</div>
                                    <div>仙草凍</div>
                                    <div>暗黑水晶</div>
                                    <div>蘆薈</div>
                                    <div>冰淇淋</div>
                                    <div>茉莉茶凍</div>
                                    <div>粉條</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 menu_area">
                            <div class="milkTea_title_area">
                                <div class="milkTea_title">奶茶系列/奶茶推薦</div>
                            </div>
                            <div class="drinks_menu">
                                <ul class="cell_drinkList">
                                    <li class="cell">
                                        <div class="cell_drink_title">
                                            粉條奶茶
                                        </div>
                                        <div class="cell_line"></div>
                                        <div class="cell_drink_note">
                                            醲醇芳香的「錫蘭奶紅」，加入爽口滑順的粉條，爽口對味。
                                        </div>
                                    </li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-3">
                            <div>
                                123
                            </div>
                        </div>
                    </div>
                </main>
            </body>
        );
    }
}

export default all_drink;