import React, {Component} from "react";
import logo from "../assets/pomodoro_new.png";

class Header extends Component{
  render(){
    return (
      <nav className='navbar is-primary'>
        <div className="navbar-brand">
          <div className="navbar-item is-size-3">
            <img src={logo} alt="Pomodoro timer"/>
            Pomodoro timer
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;