/**
 * Created by HelenYin on 2016/8/2.
 */
//js的入口文件
//
import React from 'react';
import ReactDOM from 'react-dom';
//import Container from './components/component.js'
//import Container from './react-dnd-simple/Container.js';
import Container from './react-dnd-Cancel-on-dropoutside/Container.js'

main();

function main() {
    ReactDOM.render(<div><Container /></div>, document.body);
}

