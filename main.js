
/** main.js不是react的文件，React.createElement才是react自带的 */

import {ToyReact, Component} from "./ToyReact.js";
// import { ToyReact, Component } from './ToyReact'


// class MyComponent extends Component{
//     render(){
//         return <div>
//             <span>a</span>
//             <span>a</span>
//             <div>
//                 {true}
//                 {this.children}
//             </div>
//         </div>
//     }
    
// }

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
    }

    render() {
        return (
            <button className="square" onClick={() => this.setState({value: 'X'})}>
            {this.state.value ? this.state.value : ""}
            </button>
        );
    }
}

class Board extends Component {
    renderSquare(i) {
        return <Square value={i} />;
    }
    render() {
        return (
          <div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
          </div>
        );
    }
}

let a = <Board />
    

// document.body.appendChild(a)

ToyReact.render(
    a,
    document.body
)

