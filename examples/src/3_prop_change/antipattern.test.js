import React from 'react';
import App from './App';
import {shallow} from "enzyme";
import Factoid from "./Factoid";

describe('antipattern - check if compoenent has been updated when prop changes', function () {
    it('displays the rating based on change in props', function () {
        const wrapper = shallow(<Factoid rating={1}/>);

        expect(wrapper.text()).toContain('This fact is rated at 1 out of 5');
        expect(wrapper.find('.golden-star').length).toEqual(1);

        wrapper.setProps({rating: 3});

        expect(wrapper.text()).toContain('This fact is rated at 3 out of 5');
        expect(wrapper.find('.golden-star').length).toEqual(3);
    });
});