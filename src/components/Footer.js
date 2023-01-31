import React from "react";
import Github from "../github.png"
import LinkedIn from "../linkedin.png"

class Footer extends React.Component{
  date = new Date(Date.now())
  render() {
    return(
      <div className="footer">
        <div className="footer-items">
          <div className="footer-icons">
            <div>
              <a href="https://github.com/betsha1830/"><img className="footer-icon" src={Github} alt="github"></img></a>
              <a href="https://www.linkedin.com/in/betsue-weldemariam-b05989151/"><img className="footer-icon" src={LinkedIn} alt="Linkedin"></img></a></div>
            </div>
          <div className="copyright">C.V. Maker © {this.date.getFullYear()}</div>
        </div> 
      </div>
    )
  }
    
}

export default Footer