import React from 'react';
import {shallow} from "enzyme";
import ReviewBar from "./ReviewBar";

describe('clicking on review star', function () {
    it('updates the vote based on the index of star', function () {
        const updateVoteMock = jest.fn();
        const wrapper = shallow(<ReviewBar updateVote={updateVoteMock}/>);

        wrapper.find('.star').at(3).simulate('click');

        expect(updateVoteMock).toHaveBeenCalledWith(4);
    });
});