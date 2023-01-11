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
    
    this.state = {
      personal_info: {},
      education: [],
      work: [],
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
          beginning_study_month: 'Beginning of Education (Month)',
          beginning_study_year: 'Beginning of Education (Year)',
          end_study_month: 'End of Education (Month)',
          end_study_year: 'End of Education (Year)',
        },
        work_label: {
          comp_name: 'Company Name',
          work_pos: 'Position Title',
          work_description: 'Work Description',
          beginning_work_month: 'Beginning of Work (Month)',
          beginning_work_year: 'Beginning of Work (Year)',
          end_work_month: 'End of Work (Month)',
          end_work_year: 'End of Work (Year)',
        }
      }
    }
    
  }

  submitPersonalInfo = (obj) => {
    this.setState({
      personal_info: obj
    })
    console.log(this.state.personal_info)
  }

  render(){
    return(
      <div className='App container'>
        <PersonalInfo personal_info_obj={this.state.label.personal_info_label} clickHandler={this.submitPersonalInfo} />
      </div>
    )
  }
}

export default App;
