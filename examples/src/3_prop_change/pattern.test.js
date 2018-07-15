import React from 'react';
import {shallow} from "enzyme";
import Factoid from "./Factoid";

describe('Factoid', function () {
    it('displays the rating passed in props', function () {
        const wrapper = shallow(<Factoid rating={1}/>);

        expect(wrapper.text()).toContain('This fact is rated at 1 out of 5');
    });
});