/** main.js不是react的文件，React.createElement才是react自带的 */

import {ToyReact, Component} from "./ToyReact.js";
// import { ToyReact, Component } from './ToyReact'


class MyComponent extends Component{
    render(){
        return <div>
            <span>a</span>
            <span>a</span>
            <div>
                {true}
                {this.children}
            </div>
        </div>
    }
    
}

let a = <MyComponent name="a" id="ida">
    <div>1</div>
</MyComponent>


// document.body.appendChild(a)

ToyReact.render(
    a,
    document.body
)

