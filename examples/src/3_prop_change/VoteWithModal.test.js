import React from 'react';
import {shallow} from "enzyme";
import VoteWithModal from "./VoteWithModal";

describe('VoteWithModal', function () {
    describe('when user clicks to vote', function () {
        it('displays a fullscreen modal', function () {
            // ....
        });

        it('displays voting buttons', function () {
            // ....
        });

        describe('when user votes', function () {
            it('displays submitting vote spinner', function () {
                // ....
            });

            describe('when submitting vote finished', function () {
                it('closes the modal', function () {
                    const wrapper = shallow(<VoteWithModal submittingVote={false} submitVote={() => {}}/>);

                    const startVoteButton = wrapper.findWhere((c) => c.props().testID === 'showVoteModal');
                    startVoteButton.simulate('click');

                    let modal = wrapper.find('div').findWhere((c) => c.props().className === 'fullscreen-modal');
                    expect(modal.exists()).toBe(true);

                    const voteOneButton = modal.find('button').findWhere((c) => c.text() === 'Vote One');
                    voteOneButton.simulate('click'); //not really necessary for this... just showing flow
                    wrapper.setProps({submittingVote: true}); //Simulate situation outside of this class

                    const spinner = modal.find('div').findWhere((c) => c.props().className === 'spinner');
                    expect(spinner.exists()).toBe(true);

                    // some asynchronous time later
                    wrapper.setProps({submittingVote: false});
                    modal = wrapper.find('div').findWhere((c) => c.props().className === 'fullscreen-modal');
                    expect(modal.exists()).toBe(false);
                });
            });
        })
    });
});