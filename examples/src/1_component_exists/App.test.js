import React from 'react';
import App from './App';
import {shallow} from "enzyme";
import Factoid from "./Factoid";

it('displays a fun fact', function () {
    const wrapper = shallow(<App/>);

    expect(wrapper.find(Factoid).exists()).toBeTruthy();
});

it('displays the button to vote', function () {
    const wrapper = shallow(<App/>);

    expect(wrapper.find('button').text()).toEqual('Vote!');
});
