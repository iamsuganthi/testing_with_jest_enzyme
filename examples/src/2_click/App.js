import React, {Component} from 'react';
import Factoid from "./Factoid";

class App extends Component {
    constructor() {
        super();
        this.state = {
            vote: 1
        }
    }

    incrementVote = () => {
        this.setState((prevState) => ({vote: prevState.vote + 1}))
    };

    render() {
        return (
            <div>
                <h1 className="App-title">Testing with Jest & Enzyme</h1>
                <div className="number-of-votes">{this.state.vote}</div>
                <Factoid/>
                <button onClick={this.incrementVote}>Vote!</button>
            </div>
        );
    }
}

export default App;
