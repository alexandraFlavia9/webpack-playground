// import nav from "./nav";
// import {top, bottom} from "./footer";
import {createButton} from "./button";
import {makeColorStyle} from "./button-styles";

// import {getDemo} from './commonjs-named-exports'
import {makeImage} from './image';
import css from './style.css';
import imgUrl from './example.jpg';

const button = createButton('Start');
button.style = makeColorStyle('#F3D7CA')

const image = makeImage(imgUrl);

document.body.appendChild(button);
document.body.appendChild(image);