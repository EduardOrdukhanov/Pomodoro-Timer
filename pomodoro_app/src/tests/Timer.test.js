import React from 'react';
import {mount} from 'enzyme';
import Timer from '../components/Timer';
import moment from "moment";

describe(`</Timer />`, ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = mount(<Timer/>);
    });

    it('checks default state', ()=>{
        expect(wrapper.state('moment_time')).toBe(null);
        expect(wrapper.state('count')).toBe(0);
        expect(wrapper.state('display')).toBe("Start the timer...");
        expect(wrapper.state('state')).toBe("Idle");
        expect(wrapper.state('button')).toBe(false);
    });

    it('checks state after start', ()=>{
        wrapper.find('button').at(0).simulate('click');
        expect(wrapper.state('moment_time')).toBeInstanceOf(moment);
        expect(wrapper.state('count')).toBe(1);
        //expect(wrapper.state('display')).toBeInstanceOf(String);
        expect(wrapper.state('state')).toBe("Busy");
        expect(wrapper.state('button')).toBe(true);
    });

    it('checks state after reset', ()=>{
        wrapper.setState({moment_time: moment(), count: 1, display: "00:00", state: "Busy", button: true});
        wrapper.find('button').at(0).simulate('click');
        expect(wrapper.state('moment_time')).toBe(null);
        expect(wrapper.state('count')).toBe(0);
        expect(wrapper.state('display')).toBe("Start the timer...");
        expect(wrapper.state('state')).toBe("Idle");
        expect(wrapper.state('button')).toBe(false);
    });

    //it('checks state after busy where ((count < 4() == true)')
});