function calcBorrowing (personSalary, partnerSalary){
  console.log(personSalary + " hello i am in the calculator");
  const perSal = parseInt(personSalary);

  const parSal = parseInt(partnerSalary);
  return ((perSal + parSal ) * 3);
}

export default calcBorrowing;
