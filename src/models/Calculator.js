export function calcBorrowing(submittedDetails){
  const perSal = parseInt(submittedDetails.personSalary);  
  const parSal = parseInt(submittedDetails.partnerSalary);
  return ((perSal + parSal ) * 3);
}

export function calcPropertyValue(borrowingLimit, deposit){
  return (borrowingLimit + parseInt(deposit));
}

export function calcMonthlyPayment(years, interestRate, borrowingLimit) {
  const term = parseInt(years)*12;
  console.log(term);
  
  const interest = parseInt(interestRate)/12/100;
  console.log(interest);
  
  const borrowing = parseInt(borrowingLimit);
  const monthlyTotalPayment =borrowing * ( (interest*Math.pow((1+interest), term) )/( Math.pow((1+interest), term)-1 ));
  const monthlyTotalPaymentRounded = Math.round(monthlyTotalPayment*100)/100;
  return monthlyTotalPaymentRounded;
}

