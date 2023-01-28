import React from "react"
import "./App.css"
// import './styles/Style.css'
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
      <div className="App container">
        <div className="header">C.V. Maker</div>
        <div className="left_side">
          <div className="info_heading">Personal Information</div>
          <PersonalInfo
          personal_info_obj={this.state.label.personal_info_label}
          clickHandler={this.submitPersonalInfo}
          />
        </div>
        <div className="left_side">
          <div className="info_heading">Education Information</div>
          <EducationInfo
          educationLabel={this.state.label.education_label}
          educationArr={this.state.education[this.education_pos]}
          clickHandler={this.submitEducationInfo}
          />
        </div>
        <div className="left_side">
          <div className="info_heading">Work Information</div>
          <WorkInfo
          workLabel={this.state.label.work_label}
          workArr={this.state.work[this.work_pos]}
          clickHandler={this.submitWorkInfo}
          />
        </div>
        
        
        {Object.keys(this.state.personal_info).map((item) => {
          return (
            <div>
              <label>{this.state.label.personal_info_label[item]}</label>:{" "}
              {this.state.personal_info[item]}
            </div>
          )
        })}
        {this.state.education.map((item, pos) => {
          return (
            <div>
              Education Position {pos + 1}{" "}
              <i onClick={() => this.editEducation(pos)}>
                <img
                  src={EditButton}
                  alt={"Edit education position" + pos + 1}
                ></img>
              </i>{" "}
              <i onClick={() => this.deleteEducation(pos)}>
                <img
                  src={TrashButton}
                  alt={"Delete education position " + pos + 1}
                ></img>
              </i>
              {Object.keys(item).map((obj_key) => {
                return (
                  <div>
                    {this.state.label.education_label[obj_key]}: {item[obj_key]}
                  </div>
                )
              })}
            </div>
          )
        })}
        {this.state.work.map((item, pos) => {
          return (
            <div>
              Work Position {pos + 1}{" "}
              <i onClick={() => this.editWork(pos)}>
                <img
                  src={EditButton}
                  alt={"Edit work position" + pos + 1}
                ></img>
              </i>{" "}
              <i onClick={() => this.deleteWork(pos)}>
                <img
                  src={TrashButton}
                  alt={"Delete work position " + pos + 1}
                ></img>
              </i>
              {Object.keys(item).map((obj_key) => {
                return (
                  <div>
                    {this.state.label.work_label[obj_key]}: {item[obj_key]}
                  </div>
                )
              })}
            </div>
          )
        })}
        
      </div>
    )
  }
}

export default App