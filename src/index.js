// import nav from "./nav";
// import {top, bottom} from "./footer";
import {createButton} from "./button";
import {makeColorStyle} from "./button-styles";

// import {getDemo} from './commonjs-named-exports'
import './style.css';

const button = createButton('Start');
button.style = makeColorStyle('#F3D7CA')
document.body.appendChild(button);