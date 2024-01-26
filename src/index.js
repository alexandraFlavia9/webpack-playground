import nav from "./nav";
import {top, bottom} from "./footer";
import buildButton from "./button";
import {getDemo} from './commonjs-named-exports'
import * as style from './style.css';

console.log(nav(), top, bottom, buildButton('Create'), getDemo());