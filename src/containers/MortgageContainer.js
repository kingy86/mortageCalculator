import React from 'react';
import Form from '../components/Form';
import { calcPropertyValue, calcBorrowing, calcMonthlyPayment } from '../models/Calculator';
import BorrowingResult from '../components/BorrowingResult';

class MortgageContainer extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        personSalary: null,
        partnerSalary: null,
        borrowingLimit: null,
        deposit: null,
        propertyValue: null,
        monthlyPayment: null,
        term: null,
        interestRate: null
      };
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
    };

    handleFormSubmit(submittedDetails){
      submittedDetails.id = Date.now();
      const borrowingLimit = calcBorrowing(submittedDetails);
      const personSalary = submittedDetails.personSalary;
      const partnerSalary = submittedDetails.partnerSalary;
      const deposit = submittedDetails.deposit;
      const propertyValue = calcPropertyValue(borrowingLimit, deposit);
      const term = submittedDetails.term;
      const interestRate = submittedDetails.interestRate;
      const monthlyPayment = calcMonthlyPayment(term, interestRate, borrowingLimit)
      this.setState({
        borrowingLimit: borrowingLimit, 
        personSalary: personSalary, 
        partnerSalary: partnerSalary,
        propertyValue: propertyValue,
        deposit: deposit,
        monthlyPayment: monthlyPayment,
        term: term,
        interestRate: interestRate
      });
    }

    render(){
      return(
        <>
          <h1>Calculate your mortgage borrowing limits...</h1>
          <Form onFormSubmit={this.handleFormSubmit}/>
          <BorrowingResult 
          borrowingLimit={this.state.borrowingLimit}
          personSalary={this.state.personSalary}
          partnerSalary={this.state.partnerSalary}
          deposit={this.state.deposit}
          propertyValue={this.state.propertyValue}
          monthlyPayment={this.state.monthlyPayment}
          term={this.state.term}
          interest={this.state.interestRate}
          ></BorrowingResult>
        </>
      )
    }


}
export default MortgageContainer;
