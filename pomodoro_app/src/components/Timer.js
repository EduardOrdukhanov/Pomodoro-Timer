import React, {Component} from "react";
import moment from "moment";
import timer from "moment-timer";

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
    this.timer = setInterval(this.doSomething, 500);
  }

  handleStart(e){
    let newMoment = this.setBusy();
    this.setState({moment_time: newMoment});
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
    }
  }

  setBusy(){
    let newMoment = moment();
    newMoment.add(25, "minutes");
    this.setState({state: "Busy", count: this.state.count + 1});
    return newMoment;
  }
  setShortBreak(){
    this.setState({state: "Short break"});
  }
  setLongBreak(){
    this.setState({state: "Long break"});
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

  render(){
    return (
      <div className="box">
        <div className="card">
          <div className="card">
            <div className="card-content">
              <p className="title has-text-centered">
                {this.state.display}
              </p>
              <p className="subtitle has-text-centered">
                State: 
                <span className={`subtitle has-text-centered ${this.getTextColor()}`}>
                  {" "}{this.state.state}
                </span>
                <br/>Pomodoro #{this.state.count}
              </p>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                <button className="button is-primary" onClick={this.handleStart.bind(this)}>
                  Start
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
