import React from 'react';

const BorrowingResult= (props) => {
    if (props.borrowingLimit === null) {
        return(
            <></>
        )
    }
    return (
        <div>
            <h4>You're estimated borrowing limit is:</h4>
            <p>£{props.borrowingLimit}</p>
            <h4>The maximum property value you can afford:</h4>
            <p>£{props.propertyValue}</p>
            <h4>Your approximate monthly repayments would be:</h4>
            <p>£{props.monthlyPayment}</p>
            <h4>Calculation based on :</h4>
            <ul>
                <li>Your Salary : £{props.personSalary}</li> 
                <li>Partner Salary : £{props.partnerSalary}</li> 
                <li>Deposit : £{props.deposit}</li>
                <li>Term : {props.term} years</li>
                <li>Interest Rate : {props.interest}%</li>
            </ul>
        </div>
    )
}


export default BorrowingResult;