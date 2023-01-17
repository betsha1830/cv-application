import React from 'react';
import './App.css';
import EducationInfo from './components/EducationInfo';
import PersonalInfo from './components/PersonalInfo';
import WorkInfo from './components/WorkInfo';
import AddButton from './add-new.png'
import TrashButton from './trash.png'

class App extends React.Component {
  constructor(props){
    super(props)
    
    this.submitPersonalInfo = this.submitPersonalInfo.bind(this)
    this.submitWorkInfo = this.submitWorkInfo.bind(this)

    this.state = {
      personal_info: {},
      education: [],
      work: [],
      work_temp: {},
      education_temp: {},
      label: {
        // personal_info_label: ['First Name', 'Last Name', 'Email', 'Phone Number', 'Address',],
        // education_label: ['School Name', 'Title of Study', 'Beginning of Education (Month)', 'Beginning of Education (Year)', 'End of Education (Month)', 'End of Education (Year)'],
        // work_label: ['Company Name', 'Position Title', 'Work Description', 'Beginning of Work (Month)', 'Beginning of Work (Year)', 'End of Work (Month)', 'End of Work (Year)'],
        
        /* By adding a key and value pair to any of the labels the code will immediately adapt the newly added value(will create
          an input and label automatically) */

        personal_info_label: {
          first_name: 'First Name',
          last_name: 'Last Name',
          email: 'Email',
          phone: 'Phone Number',
          address: 'Address',
          linkedin_profile: 'LinkedIn Profile'
        },
        education_label: {
          school_name: 'School Name',
          study_title: 'Title of Study',
          beginning_study_date: 'Beginning of Education',
          end_study_date: 'End of Education',
        },
        work_label: {
          comp_name: 'Company Name',
          work_pos: 'Position Title',
          work_description: 'Work Description',
          beginning_work_date: 'Beginning of Work',
          end_work_date: 'End of Work',
        }
      }
    }
    
  }

  submitPersonalInfo = (obj) => {
    this.setState({
      personal_info: obj
    })
  }

  submitWorkInfo = (obj) => {
    console.log(obj)
    this.setState({
      work: this.state.work.concat(obj),
    })
    // console.log(this.state.work)
  }

  deleteWork = (iden) => {
    
  }

  render(){
    return(
      <div className='App container'>
        {/* <PersonalInfo personal_info_obj={this.state.label.personal_info_label} clickHandler={this.submitPersonalInfo} /> */}
        <WorkInfo workLabel={this.state.label.work_label} clickHandler={this.submitWorkInfo}/>
        {
          this.state.work.map((item, pos) => {
            return (
              <div> 
                Work Position {pos+1} <i onClick={() => this.deleteWork(pos)}><img src={TrashButton} alt={'Delete work position ' + pos+1}></img></i>
                {
                  Object.keys(item).map((obj_key) => {
                  return (
                  <div>
                    {this.state.label.work_label[obj_key]}: {item[obj_key]}
                  </div>
            )
                })}
            </div>
          )})
        }
        {/* {Object.keys(this.state.personal_info).map((item) => {
          return (
            <div> 
              <label>{this.state.label.personal_info_label[item]}</label>: {this.state.personal_info[item]}
            </div>
          )
        })} */}
      </div>
    )
  }
}

export default App;
