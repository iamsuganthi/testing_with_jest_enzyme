import React from 'react';
import App from './App';
import {shallow} from "enzyme";

describe('antipattern - click event to update count', function () {
    it('updates vote count in state', function () {
        const wrapper = shallow(<App/>);

        wrapper.find('button').simulate('click');

        expect(wrapper.state().vote).toEqual(2);
    });
});