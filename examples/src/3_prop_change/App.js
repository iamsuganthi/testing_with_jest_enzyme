import React, {Component} from 'react';
import Factoid from "./Factoid";
import VoteWithModal from "./VoteWithModal";

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

    submitVote = (vote) => {
        this.setState({submittingVote: true})
        // perform some API call here...
        setTimeout(() => {
            this.setState({submittingVote: false})
        }, 2000)
    };

    render() {
        return (
            <div>
                <h1 className="App-title">Testing with Jest & Enzyme</h1>
                <div className="number-of-votes">{this.state.vote}</div>
                <Factoid rating={this.state.vote}/>
                <VoteWithModal submittingVote={this.state.submittingVote} submitVote={this.submitVote}/>
                <button onClick={this.incrementVote}>Vote!</button>
            </div>
        );
    }
}

export default App;
