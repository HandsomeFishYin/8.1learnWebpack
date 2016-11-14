/**
 * Created by han on 2016/11/14.
 */
import React from 'react';

export default class Hello extends React.Component {

    render() {
        return (
            <div>
                <p style={{color:'#fff'}}>注意 ，圆圈的背景是透明，并且 圆圈直径变大，横线会动态计算适应的宽度</p>
                <ul className="privilege-list">
                    <li className="" >
                        <div className="circle">V0</div>
                        <p className="privilege-name">吃货</p>
                    </li>
                    <li className="">
                        <div className="circle">V1</div>
                        <p className="privilege-name">吃货</p>
                    </li>
                    <li className="red big white">
                        <div className="circle">V2</div>
                        <p className="privilege-name">吃货</p>
                    </li>
                    <li className=" white">
                        <div className="circle">V3</div>
                        <p className="privilege-name">吃货</p>
                    </li>
                    <li className="white" >
                        <div className="circle">V4</div>
                        <p className="privilege-name">吃货</p>
                    </li>
                    <li className="white" >
                        <div className="circle">V5</div>
                        <p className="privilege-name">吃货</p>
                    </li>
                    <li className="white" >
                        <div className="circle">V6</div>
                        <p className="privilege-name">吃货</p>
                    </li>
                    <li className="white">
                        <div className="circle">V7</div>
                        <p className="privilege-name">吃货</p>
                    </li>
                </ul>
            </div>

        );
    }
}