import React from 'react';
import './App.css';
import Input from './components/Input';

class App extends React.Component {
  constructor(){
    super();
    this.labels = {
      first_name: 'First Name',
      last_name: 'Last Name',
      email: 'Email',
      phone: 'Phone Number',
      school_name: 'School Name',
      study_title: 'Title of Study',
      beginning_study_month: 'Beginning of Education (Month)',
      beginning_study_year: 'Beginning of Education (Year)',
      end_study_month: 'End of Education (Month)',
      end_study_year: 'End of Education (Year)',
      comp_name: 'Company Name',
      work_pos: 'Position Title',
      work_description: 'Work Description',
      beginning_work_month: 'Beginning of Work (Month)',
      beginning_work_year: 'Beginning of Work (Year)',
      end_work_month: 'End of Work (Month)',
      end_work_year: 'End of Work (Year)',
    }

    this.sate = [{
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          school_name: '',
          study_title: '',
          beginning_study_month: '',
          beginning_study_year: '',
          end_study_month: '',
          end_study_year: '',
          comp_name: '',
          work_pos: '',
          work_description: '',
          beginning_work_month: '',
          beginning_work_year: '',
          end_work_month: '',
          end_work_year: '',
      },
    ]
  }

  changeField = (e) => {
    const temp_id = e.id
    const temp_value = e.value;
    
    this.setState([{
      [temp_id]: temp_value,
    }])
  }

  render(){
    return(
      <div className='App'>
        {Object.keys(this.labels).map(key => {
          return <Input labelName={this.labels[key]} identifier={key} changeHandler={this.changeField}/>
        })}
      </div>
    )
  }
}

export default App;
