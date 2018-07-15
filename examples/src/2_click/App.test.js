import React from 'react';
import App from './App';
import {shallow} from "enzyme";

describe('click event to update count', function () {
    it('updates vote count on screen', function () {
        const wrapper = shallow(<App/>);

        wrapper.find('button').simulate('click');

        expect(wrapper.find('.number-of-votes').text()).toEqual('2');
    });
});
