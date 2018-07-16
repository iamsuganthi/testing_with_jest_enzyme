import React from 'react';

// import PropTypes from 'prop-types'

class VoteWithModal extends React.Component {
    state = {
        showModal: false
    };

    showModal() {
        this.setState({showModal: true})
    }

    closeModal() {
        this.setState({showModal: false})
    }

    voteOne() {
        this.props.submitVote(1)
    }

    voteTwo() {
        this.props.submitVote(2)
    }

    voteThree() {
        this.props.submitVote(3)
    }

    voteFour() {
        this.props.submitVote(4)
    }

    voteFive() {
        this.props.submitVote(5)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.submittingVote && !this.props.submittingVote) {
            this.setState({showModal: false})
        }
    }

    render() {
        return (
            <div>
                <button testID="showVoteModal" onclick={this.showModal}>Click here to vote!</button>

                {this.state.showModal && (
                    <div className='fullscreen-modal'>
                        {!this.props.submittingVote && (
                            <div>
                                <button onclick={this.voteOne}>Vote One</button>
                                <button onclick={this.voteTwo}>Vote Two</button>
                                <button onclick={this.voteThree}>Vote Three</button>
                                <button onclick={this.voteFour}>Vote Four</button>
                                <button onclick={this.voteFive}>Vote Five</button>
                                <button onclick={this.closeModal}>Nevermind, I'll vote later</button>
                            </div>
                        )}
                        {this.props.submittingVote && (
                            <div>
                                Submitting vote...
                                <div className='spinner'/>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

// VoteWithModal.propTypes = {
//   submitVote: PropTypes.func.required,
//   submittingVote: PropTypes.bool.required
// };

export default VoteWithModal;