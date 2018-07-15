import React from 'react';
import App from './App';
import {shallow} from "enzyme";
import Factoid from "./Factoid";

it('displays the button to vote', function () {
    const wrapper = shallow(<App/>);

    expect(wrapper.find({content: 'Vote!'}).exists()).toBeTruthy();
});

it('displays a fun fact', function () {
    const wrapper = shallow(<App/>);

    expect(wrapper.find(Factoid).exists()).toBeTruthy();
});