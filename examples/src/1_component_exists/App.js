import React, {Component} from 'react';
import Factoid from "./Factoid";

class App extends Component {
    render() {
        return (
            <div>
                <h1 className="App-title">Testing with Jest & Enzyme</h1>
                <Factoid/>
                <button>Vote!</button>
            </div>
        );
    }
}

export default App;
