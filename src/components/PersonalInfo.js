import React, { Component } from 'react'

class PersonalInfo extends Component {
  constructor(props){
    super(props);
    this.clicked = this.clicked.bind(this)

    this.state = {
      personal_info: {}
    }
  }

  inputChange = (e) => {
    const user_input = {
      [e.target.id]: e.target.value
    }
    const new_obj = Object.assign(this.state.personal_info, user_input)
    this.setState({
      personal_info: new_obj
    })
  }

  clicked = () => {
    if(document.getElementById('personal_info_button').innerText === 'Edit'){
      document.getElementById('personal_info_button').innerText = 'Done'
      Object.keys(this.props.personal_info_obj).forEach((item) => {
        document.getElementById(item).disabled = false
      })
    }
    else{
      document.getElementById('personal_info_button').innerText = 'Edit'
      Object.keys(this.props.personal_info_obj).forEach((item) => {
        document.getElementById(item).disabled = true
      })
      this.props.clickHandler(this.state.personal_info)
    }
  }

  render() {
    const {personal_info_obj} = this.props
    return (
      <div className='input'>
        {Object.keys(personal_info_obj).map((item) => {
          return (
            <div> 
              <label>{personal_info_obj[item]}</label>: <input type='text' id={item} onChange={(e) => this.inputChange(e)}/>
            </div>
          )
        })}
        <button onClick={this.clicked} id='personal_info_button'>Submit</button>
        {/* {Object.keys(personal_info_obj).map((item) => {
          return (
            <div> 
              <label>{personal_info_obj[item]}</label>: {this.state.personal_info[item]}
            </div>
          )
        })} */}
      </div>
    )
  }
}

export default PersonalInfo