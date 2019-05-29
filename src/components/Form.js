import React from 'react';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      personSalary: 0,
      partnerSalary: 0,
      deposit: 0,
      term: 25,
      interestRate: 3.5
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePersonSalaryChange = this.handlePersonSalaryChange.bind(this);
    this.handlePartnerSalaryChange = this.handlePartnerSalaryChange.bind(this);
    this.handleDepositChange = this.handleDepositChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleInterestRateChange = this.handleInterestRateChange.bind(this);
  };

  handleSubmit(evt){
    evt.preventDefault();
    const personSalary = this.state.personSalary;
    const partnerSalary = this.state.partnerSalary;
    const deposit = this.state.deposit;
    const term = this.state.term;
    const interestRate = this.state.interestRate;
    const submission = {
      personSalary, 
      partnerSalary, 
      deposit,
      term,
      interestRate
    }
    this.props.onFormSubmit(submission);
    this.setState({personSalary: 0, partnerSalary: 0});
  }

  handlePersonSalaryChange(evt){
    this.setState({personSalary: evt.target.value});
  }

  handlePartnerSalaryChange(evt){
    this.setState({partnerSalary: evt.target.value});
  }

  handleDepositChange(evt){
    this.setState({deposit: evt.target.value});
  }
  handleTermChange(evt){
    this.setState({term: evt.target.value});
  }
  handleInterestRateChange(evt){
    this.setState({interestRate: evt.target.value});
  }

  render(){
    return(
      <form className="mortgage-form" onSubmit={this.handleSubmit}>
        <label>Your Salary</label>
        <input
          id="your-salary"
          name="your-salary"
          type="number"
          step="any"
          min="0"
          value={this.state.personSalary}

          required
          onChange={this.handlePersonSalaryChange}
        /><br></br>
        <label>Partner Salary</label>
        <input
          id="partner-salary"
          name="partner-salary"
          type="number"
          step="any"
          min="0"
          onChange={this.handlePartnerSalaryChange}
          value={this.state.partnerSalary}
        /><br></br>
        <label>Deposit</label>
        <input
          id="deposit"
          name="deposit"
          type="number"
          step="any"
          min="0"
          onChange={this.handleDepositChange}
          value={this.state.deposit}
        /><br></br>
        <label>Term ({this.state.term} years)</label>
        <input type="range" 
         min="0" 
         max="40" 
         value={this.state.term} 
         className="slider" 
         id="term-slider"
         step="5"
         onChange={this.handleTermChange}
         /><br></br>
        <label>Interest Rate ({this.state.interestRate}%)</label>
        <input type="range" 
         min="0" 
         max="15" 
         value={this.state.interestRate} 
         className="slider" 
         id="interest-rate-slider"
         step="0.25"
         onChange={this.handleInterestRateChange}
         /><br></br>
        <input type="submit" value="Calculate"/>
      </form>
    )
  }
}

export default Form;
