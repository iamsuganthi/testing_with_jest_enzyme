import React from 'react';
import App from './App';
import {shallow} from "enzyme";

it('displays the button to vote', function () {
    const wrapper = shallow(<App/>);

    expect(wrapper.find({content: 'Vote!'}).exists()).toBeTruthy();
});