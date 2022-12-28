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
      comp_name: 'Compnay Name',
      work_pos: 'Position Title',
      work_description: 'Work Description',
      beginning_work_month: 'Beginning of Work (Month)',
      beginning_work_year: 'Beginning of Work (Year)',
      end_work_month: 'Beginning of Work (Month)',
      end_work_year: 'Beginning of Work (Year)',
    }

    this.sate = {
      
    }
  }

  render(){
    return(
      <div className='App'>
        {Object.keys(this.labels).map(key => {
          return <Input labelName={this.labels[key]} />
        })}
      </div>
    )
  }
}

export default App;
