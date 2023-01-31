import React from "react"
import "./App.css"
import Footer from './components/Footer'
import EducationInfo from "./components/EducationInfo"
import PersonalInfo from "./components/PersonalInfo"
import WorkInfo from "./components/WorkInfo"
import EditButton from "./edit.png"
import TrashButton from "./trash.png"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.submitPersonalInfo = this.submitPersonalInfo.bind(this)
    this.submitWorkInfo = this.submitWorkInfo.bind(this)
    this.submitEducationInfo = this.submitEducationInfo.bind(this)

    this.state = {
      personal_info: {},
      education: [],
      work: [],
      work_temp: {},
      education_temp: {},
      label: {
        /* By adding a key and value pair to any of the labels the code will immediately adapt the newly added value(will create
          an input and label automatically) */

        personal_info_label: {
          first_name: "First Name",
          last_name: "Last Name",
          email: "Email",
          phone: "Phone Number",
          address: "Address",
          linkedin_profile: "LinkedIn Profile",
        },
        education_label: {
          school_name: "School Name",
          study_title: "Title of Study",
          beginning_study_date: "Beginning of Education",
          end_study_date: "End of Education",
        },
        work_label: {
          comp_name: "Company Name",
          work_pos: "Position Title",
          work_description: "Work Description",
          beginning_work_date: "Beginning of Work",
          end_work_date: "End of Work",
        },
      },
    }
    this.work_pos = 0
  }

  submitPersonalInfo = (obj) => {
    this.setState({
      personal_info: obj,
    })
  }

  submitWorkInfo = (obj) => {
    if (document.getElementById("add_work_button").innerText === "Done") {
      let temp_arr = Object.assign(this.state.work)
      let final_arr = []
      temp_arr.forEach((item, index) => {
        if (index === this.work_pos) { // sus??
          if (Object.entries(obj).length === 0) { // checks if the object is empty or not
            final_arr.push(item)
          } else {
            console.log(obj)
            final_arr.push(obj)
          }
        } else {
          console.log(item)
          final_arr.push(item)
        }
      })

      console.log(final_arr)

      this.setState({
        work: final_arr,
      })
      document.getElementById("add_work_button").innerText = "Add"
    } else {
      this.setState({
        work: this.state.work.concat(obj),
      })
    }
  }

  submitEducationInfo = (obj) => {
    if (document.getElementById("add_education_button").innerText === "Done") {
      let temp_arr = Object.assign(this.state.education)
      let final_arr = []
      temp_arr.forEach((item, index) => {
        if (index === this.education_pos) { // sus??
          if (Object.entries(obj).length === 0) { // checks if the object is empty or not
            final_arr.push(item)
          } else {
            final_arr.push(obj)
          }
        } else {
          console.log(item)
          final_arr.push(item)
        }
      })

      this.setState({
        education: final_arr,
      })
      document.getElementById("add_education_button").innerText = "Add"
    } else {
      this.setState({
        education: this.state.education.concat(obj),
      })
    }
  }

  deleteEducation = (iden) => {
    let temp_obj = this.state.education
    temp_obj.forEach((objs, index) => {
      if (iden === index) {
        temp_obj.splice(iden, 1)
      }
    })
    this.setState({
      work: temp_obj,
    })
  }

  deleteWork = (iden) => {
    let temp_obj = this.state.work
    temp_obj.forEach((objs, index) => {
      if (iden === index) {
        temp_obj.splice(iden, 1)
      }
    })
    this.setState({
      work: temp_obj,
    })
  }

  editWork = (pos) => {
    this.work_pos = pos
    console.log(this.work_pos)
    document.getElementById("add_work_button").innerText = "Done"
    Object.keys(this.state.work[pos]).map((key) => {
      return (document.getElementById(key).value = this.state.work[pos][key])
    })
    if (this.state.work[pos].end_work_date === "Present") {
      document.getElementById("still_enrolled_work").checked = true
      document.getElementById("end_work_date").disabled = true
    } else {
      document.getElementById("still_enrolled_work").checked = false
    }
  }

  editEducation = (pos) => {
    this.education_pos = pos
    document.getElementById("add_education_button").innerText = "Done"
    Object.keys(this.state.education[pos]).map((key) => {
      return (document.getElementById(key).value =
        this.state.education[pos][key])
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        <h1 className="header">C.V. Maker</h1>
        <div className="content">
          <div className="left_side">
            <div className="pesronal_info">
              <PersonalInfo
              personal_info_obj={this.state.label.personal_info_label}
              clickHandler={this.submitPersonalInfo}
              />
            </div>
            <div className="education_info">
              <EducationInfo
              educationLabel={this.state.label.education_label}
              educationArr={this.state.education[this.education_pos]}
              clickHandler={this.submitEducationInfo}
              />
            </div>
            <div className="work_education">
              <WorkInfo
              workLabel={this.state.label.work_label}
              workArr={this.state.work[this.work_pos]}
              clickHandler={this.submitWorkInfo}
              />
            </div>
          </div>

          <div className="right_side">
            <h1 className="instruction">Instructions</h1>
            <div className="instruction_detail">
            Pretty simple. Fill out this simple form and when you’re done, just click on 
            'button' to generate your own CV.
            <br></br><br></br>If you want to edit or remove any of your entry you can do so in the Entry section.
            </div>
            <h1 className="instruction info_heading">Entry</h1>
            <div className="personal_entry">
              <h1 className="entry_heading">Personal Information</h1>
              {Object.keys(this.state.label.personal_info_label).map((item) => {
                return (
                  <div className="entries">
                    <span className="entry_label">{this.state.label.personal_info_label[item]}:</span>
                    <span className="entry_output">{this.state.personal_info[item]}</span>
                  </div>
                )
              })}
            </div>
            <div className="education_entry">
              {this.state.education.map((item, pos) => {
                return (
                  <div className="education_output">
                    <div className="output-title">
                      <h1 className="entry_heading">Education Position {pos + 1}
                      <img onClick={() => this.editEducation(pos)}
                            className="icon edit"
                            src={EditButton}
                            alt={"Edit education position" + pos + 1}
                          ></img>
                          <img onClick={() => this.deleteEducation(pos)}
                            className="icon trash"
                            src={TrashButton}
                            alt={"Delete education position " + pos + 1}
                          ></img>
                      </h1>
                          
                    </div>
                    
                    {Object.keys(item).map((obj_key) => {
                      return (
                        <div className="entries">
                          <label className="entry_label">{this.state.label.education_label[obj_key]}:</label> 
                          <span className="entry_output">{item[obj_key]}</span>
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
            <div className="work_entry">
              {this.state.work.map((item, pos) => {
                return (
                  <div className={"work_output"}>
                    <h1 className="entry_heading">Work Position {pos + 1}
                      <img onClick={() => this.editWork(pos)}
                        className="icon edit"
                        src={EditButton}
                        alt={"Edit work position" + pos + 1}
                      ></img>
                      <img onClick={() => this.deleteWork(pos)}
                        className="icon trash"
                        src={TrashButton}
                        alt={"Delete work position " + pos + 1}
                      ></img>
                    </h1>
                      
                    {Object.keys(item).map((obj_key) => {
                      return (
                        <div className="entries">
                          <label className="entry_label">{this.state.label.work_label[obj_key]}:</label>
                          <span className="entry_output">{item[obj_key]}</span>
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        </div>
        
        <Footer/>
      </div>
    )
  }
}

export default App