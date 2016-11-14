/**
 * Created by HelenYin on 2016/8/2.
 */
//js的入口文件
//
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/component.js'
//import Container from './react-dnd-simple/Container.js';   //切换不同的react-dnd模式
//import Container from './react-dnd-Cancel-on-dropoutside/Container.js'

main();

function main() {
    ReactDOM.render(<Hello />, document.body);
}

