import React from 'react';
import {shallow} from "enzyme";
import ReviewBar from "./ReviewBar";
import GoogleAnalyticsWrapper from './GoogleAnalyticsWrapper';

describe('clicking on review star', function () {
    it('records the vote event in google analytics', function () {
        jest.spyOn(GoogleAnalyticsWrapper, 'sendEvent');
        const wrapper = shallow(<ReviewBar/>);

        wrapper.find('button').simulate('click');

        expect(GoogleAnalyticsWrapper.sendEvent).toHaveBeenCalledWith('User review recorded');
    });
});