import React, { Component } from 'react'

class EducationInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      temp: {},
      education: []
    }
  }

  inputChange = (e) => {
    if(document.getElementById('add_education_button').innerText === 'Done'){
      let new_obj = {}
      Object.keys(this.props.educationLabel).forEach((label) => {
        new_obj = Object.assign(new_obj, {[label]: document.getElementById(label).value})
      })
      const user_input = {
        [e.target.id]: e.target.value
      }
      new_obj = Object.assign(new_obj, user_input)
      this.setState({
        temp: new_obj
      })
    }
    else{
      const user_input = {
        [e.target.id]: e.target.value
      }
      const new_obj = Object.assign(this.state.temp, user_input)
      this.setState({
        temp: new_obj,
      })
    }
  }

  clearFields = () => {
    Object.keys(this.props.educationLabel).forEach((item) => {
      document.getElementById(item).value = ''
    })
  }

  addEducation = () => {
    if(document.getElementById('add_education_button').innerText === 'Done'){
      if(Object.entries(this.state.temp).length === 0){
        let obj = {}
        Object.keys(this.props.educationLabel).forEach((label) => {
          obj = Object.assign(obj, {[label]: document.getElementById(label).value})
        })
        this.props.clickHandler(obj)
        this.clearFields()
      }
      else{
        this.props.clickHandler(this.state.temp)
        this.clearFields()
        this.setState({
        temp: {}
      })
      }
    }
    else{
      this.props.clickHandler(this.state.temp)
      this.setState({
        temp: {}
      })
      this.clearFields()
    }
  }

  render() {
    const {educationLabel} = this.props
    return (
      <div className='eduction_info'>
        {Object.keys(educationLabel).map((item) => {
          return (
          <div>
            <div className='label'><label>{educationLabel[item]}: </label> </div>
            <input id={item} onChange={this.inputChange} type={((educationLabel[item].includes('Beginning')) || (educationLabel[item].includes('End')) ? 'date' : 'text')}></input>
          </div>
          )})}
          <div><button id={'add_education_button'} onClick={this.addEducation}>Add</button></div>
      </div>
    )
  }
}

export default EducationInfo;