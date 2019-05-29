import React from 'react';
import Form from '../components/Form';
import calcBorrowing from '../models/Calculator';

class MortgageContainer extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        personSalary: null,
        partnerSalary: null,
        borrowingLimit: null
      };
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
    };

    handleFormSubmit(submittedDetails){
      submittedDetails.id = Date.now();
      this.setState(submittedDetails);
      // console.log(submittedDetails);
      // console.log(`${typeof this.state.personSalary}` + this.state.personSalary);
      console.log(this.state.personSalary);
      const perSal = parseInt(this.state.personSalary);
      console.log(perSal);
      const parSal = parseInt(this.state.partnerSalary);
      console.log(parSal);
      const borrowingLimit = calcBorrowing(perSal, parSal);
      this.setState({borrowingLimit: borrowingLimit});
    }

    render(){
      return(
        <>
          <h1>Calculate your mortgage borrowing limits...</h1>
          <Form onFormSubmit={this.handleFormSubmit}/>
        </>
      )
    }


}
export default MortgageContainer;
