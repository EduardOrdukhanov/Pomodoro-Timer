import React, {Component} from "react";
import logo from "../assets/pomodoro_new.png";

class Header extends Component{
  render(){
    return (
      <nav className='navbar is-primary'>
        <div className="navbar-brand">
          <div className="navbar-item">
            <img src={logo}/>
            Pomodoro timer
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;