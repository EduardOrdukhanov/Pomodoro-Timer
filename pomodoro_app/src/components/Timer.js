import React, {Component} from "react";
import moment from "moment";
import timer from "moment-timer";
import alarm from "../assets/telephone-ring-01a.mp3";

class Timer extends Component {
  constructor(props){
    super(props);
    this.doSomething = this.doSomething.bind(this);
    this.state = {
      moment_time: null,
      count: 0,
      display: "Start the timer...",
      state: "Idle",
      button: false
    }
  }

  resetPomodoro(){
    this.setState({
      moment_time: null,
      count: 0,
      display: "Start the timer...",
      state: "Idle",
      button: false
    });
  }



  componentDidMount(){
    this.timer = setInterval(this.doSomething, 100);
    this.sound = new Audio(alarm);
  }

  handleStart(e){
    if(this.state.button === true){
      this.setState({
        button: !this.state.button
      });
      this.resetPomodoro();
    }else{
      let newMoment = this.setBusy();
      this.setState({moment_time: newMoment, button: !this.state.button});
    }
  }

  doSomething(){
    if(this.state !== undefined && this.state.moment_time !== null){
      let current = moment();
      let difference = this.state.moment_time.diff(moment(), "seconds");
      let minutes = Math.floor(difference / 60) + "";
      let seconds = difference % 60 + "";
      if(minutes.length < 2){
        minutes = "0" + minutes;
      }
      if(seconds.length < 2){
        seconds = "0" + seconds;
      }
      this.setState({display: `${minutes}:${seconds}`});
      
      if(minutes === "00" && seconds === "00"){
        this.sound.play();
        var newMoment = this.nextState();
        if(newMoment !== null){
          this.setState({
            moment_time: newMoment
          });
        }
      }
    }
  }

  setBusy(){
    let newMoment = moment();
    newMoment.add(25, "minutes");
    this.setState({state: "Busy", count: this.state.count + 1});
    return newMoment;
  }
  setShortBreak(){
    let newMoment = moment();
    newMoment.add(5, "minutes");
    this.setState({state: "Short break"});
    return newMoment;
  }
  setLongBreak(){
    let newMoment = moment();
    newMoment.add(15, "minutes");
    this.setState({state: "Long break"});
    return newMoment;
  }

  getTextColor(){
    switch(this.state.state){
      case "Idle":
        return "has-text-warning";
        break;
      case "Busy":
        return "has-text-danger";
        break;
      default:
        return "has-text-success";
        break;
    }
  }

  nextState(){
    var newMoment = null;
    if(this.state.state === "Idle"){
      console.log(`Idle -> Busy`);
      newMoment = this.setBusy();
    }else if(this.state.state === "Busy" && this.state.count < 4){
      console.log(`Busy -> Short break`);
      newMoment = this.setShortBreak();
    }else if(this.state.state === "Busy" && this.state.count === 4){
      console.log(`Busy -> Long break`);
      newMoment = this.setLongBreak();
    }else if(this.state.state === "Short break"){
      console.log(`Short Break -> Busy`);
      newMoment = this.setBusy();
    }else{
      console.log(`${this.state.state} -> unkown, ${this.state.count}`);
      this.resetPomodoro();
    }
    return newMoment;
  }

  render(){
    return (
      <div className="box">
        <div className="card">
          <div className="card">
            <div className="card-content">
              <p className="title has-text-centered is-size-1">
                {this.state.display}
              </p>
              <p className="subtitle has-text-centered is-size-3">
                State: 
                <span className={`subtitle has-text-centered ${this.getTextColor()} is-size-3`}>
                  {" "}{this.state.state}
                </span>
                <br/>Pomodoro #{this.state.count}
              </p>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                <button className={this.state.button === false ? "button is-primary is-large" : "button is-danger is-large"} onClick={this.handleStart.bind(this)}>
                  {this.state.button === false ? "Start" : "Reset"}
                </button>
              </p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
