import React from 'react';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      personSalary: null,
      partnerSalary: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePersonSalaryChange = this.handlePersonSalaryChange.bind(this);
    this.handlePartnerSalaryChange = this.handlePartnerSalaryChange.bind(this);
  };

  handleSubmit(evt){
    evt.preventDefault();
    const personSalary = this.state.personSalary;
    const partnerSalary = this.state.partnerSalary;
    this.props.onFormSubmit({personSalary: personSalary, partnerSalary: partnerSalary});
    this.setState({personSalary: '', partnerSalary: ''});
  }

  handlePersonSalaryChange(evt){
    this.setState({personSalary: evt.target.value});
  }

  handlePartnerSalaryChange(evt){
    this.setState({partnerSalary: evt.target.value});
  }

  render(){
    return(
      <form className="mortgage-form" onSubmit={this.handleSubmit}>
        <input
          type="number"
          step="any"
          min="0"
          placeholder="Your Salary"

          required
          onChange={this.handlePersonSalaryChange}
        />
        <input
          type="number"
          step="any"
          min="0"
          placeholder="Partner Salary"
          onChange={this.handlePartnerSalaryChange}
        />
        <input type="submit" value="Calculate"/>
      </form>
    )
  }
}

export default Form;
