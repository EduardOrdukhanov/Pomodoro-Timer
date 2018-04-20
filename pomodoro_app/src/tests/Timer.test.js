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

    it('checks state after "setBusy()"', ()=>{
        expect(wrapper.instance().setBusy()).toBeInstanceOf(moment);
        expect(wrapper.state('state')).toBe('Busy');
    });

    it('checks state after "setShortBreak()"', ()=>{
        expect(wrapper.instance().setShortBreak()).toBeInstanceOf(moment);
        expect(wrapper.state('state')).toBe('Short break');
    });
    
    it('checks state after "setLongBreak()"', ()=>{
        expect(wrapper.instance().setLongBreak()).toBeInstanceOf(moment);
        expect(wrapper.state('state')).toBe('Long break');
    });
    

    it('checks state transition after Busy where (count < 4)', ()=>{
        wrapper.setState({state: "Busy", count: 1});
        expect(wrapper.instance().nextState()).toBeInstanceOf(moment);
        expect(wrapper.state('state')).toBe('Short break');
        expect(wrapper.state('count')).toBe(1);
    });

    it('checks state transition after Short break where (count < 4)', ()=>{
        wrapper.setState({state: "Short break", count: 1});
        expect(wrapper.instance().nextState()).toBeInstanceOf(moment);
        expect(wrapper.state('state')).toBe('Busy');
        expect(wrapper.state('count')).toBe(2);
    });

    it('checks state transition after Busy where (count == 4)', ()=>{
        wrapper.setState({state: "Busy", count: 4});
        expect(wrapper.instance().nextState()).toBeInstanceOf(moment);
        expect(wrapper.state('state')).toBe('Long break');
        expect(wrapper.state('count')).toBe(4);
    });

    it('checks state transition after Long break', ()=>{
        wrapper.setState({state: "Long break", count: 4});
        expect(wrapper.instance().nextState()).toBe(null);
        expect(wrapper.state('moment_time')).toBe(null);
        expect(wrapper.state('count')).toBe(0);
        expect(wrapper.state('display')).toBe("Start the timer...");
        expect(wrapper.state('state')).toBe("Idle");
        expect(wrapper.state('button')).toBe(false);
    });
});