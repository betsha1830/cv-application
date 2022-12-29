import React from 'react';
import './App.css';
import EducationInfo from './components/EducationInfo';
import PersonalInfo from './components/PersonalInfo';
import WorkInfo from './components/WorkInfo';

class App extends React.Component {
  constructor(){
    super();

    this.personal_info_label = {
      first_name: 'First Name',
      last_name: 'Last Name',
      email: 'Email',
      phone: 'Phone Number',
      address: 'Address',
    }

    this.education_label = {
      school_name: 'School Name',
      study_title: 'Title of Study',
      beginning_study_month: 'Beginning of Education (Month)',
      beginning_study_year: 'Beginning of Education (Year)',
      end_study_month: 'End of Education (Month)',
      end_study_year: 'End of Education (Year)',
    }

    this.work_label = {
      comp_name: 'Company Name',
      work_pos: 'Position Title',
      work_description: 'Work Description',
      beginning_work_month: 'Beginning of Work (Month)',
      beginning_work_year: 'Beginning of Work (Year)',
      end_work_month: 'End of Work (Month)',
      end_work_year: 'End of Work (Year)',
    }
    
    this.personal_info = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      address: '',
    }
    
    this.education = {
      0: { 
        school_name: '',
        study_title: '',
        beginning_study_month: '',
        beginning_study_year: '',
        end_study_month: '',
        end_study_year: '',},
      
    }

    this.work = {
      0: {
        comp_name: '',
        work_pos: '',
        work_description: '',
        beginning_work_month: '',
        beginning_work_year: '',
        end_work_month: '',
        end_work_year: '',},
      
    }

    // this.sate = [
    //   {
    //     first_name: '',
    //     last_name: '',
    //     email: '',
    //     phone: '',
    //   },
    //     { school_name: '',
    //       study_title: '',
    //       beginning_study_month: '',
    //       beginning_study_year: '',
    //       end_study_month: '',
    //       end_study_year: '',
    //     },
    //       { comp_name: '',
    //         work_pos: '',
    //         work_description: '',
    //         beginning_work_month: '',
    //         beginning_work_year: '',
    //         end_work_month: '',
    //         end_work_year: '',
    //       }
    // ]
  }

  changeField = (e) => {
    const temp_id = e.id
    const temp_value = e.value;
    
    console.log()
  }

  render(){
    return(
      <div className='App'>
        <div className='input'>
          {Object.keys(this.personal_info_label).map(key => {
            return <PersonalInfo labelName={this.personal_info_label[key]} identifier={key} changeHandler={this.changeField}/>
          })}
        </div>
        {/* <div className='education-output'>
        {Object.keys(this.education_label).map(key => {
            return <EducationInfo labelName={this.education_label[key]} identifier={key} changeHandler={this.changeField}/>
          })}
        </div> */}
        <div className='work-output'>
        {Object.keys(this.work_label).map(key => {
            return <WorkInfo labelName={this.work_label[key]} identifier={key} changeHandler={this.changeField}/>
          })}
        </div>
        
      </div>
    )
  }
}

export default App;
