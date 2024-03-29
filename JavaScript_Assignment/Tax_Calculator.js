// Tax calculator
// easy
// Time Limit: 2 sec
// Memory Limit: 128000 kB
// Problem Statement
// You need to complete the function findTax() that takes a number type variable as an argument which is the salary of a person.
// You need to calculate the tax amount on his salary by using Js switch control flow.
// The tax rates are given below.

// if 500000<= salary >0 then 0% tax on the entire salary
// If 1000000 >= salary > 500000 then 10% tax on the entire salary
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary
// If salary >1500000 then 30% tax on the entire salary

// If someone by mistake enters a salary that is less than 0 then you need to throw the ValidationError() error whose argument will be "Salary not valid". Put this code inside a try-and-catch block, so that the error is caught in the catch block, and then "Salary not valid" should be returned.
// Input
// The findTax function would take salary as the only argument whose data type will be number
// Output
// The findTax function should return the tax amount calculated, provided the salary is above 0. If the salary is below zero, then "Salary not Valid" must be returned from the catch block which would catch the error.





// your code is here

function findTax(salary) {
    let tax = 0;
    try {
    if (salary < 0) {
      throw new ValidationError("Salary not valid");
    } else if (salary <= 500000) {
      tax = 0;
    } else if (salary <= 1000000) {
      tax = salary * 0.10;
    } else if (salary <= 1500000) {
      tax = salary * 0.20;
    } else {
      tax = salary * 0.30;
    }
  } catch (error) {
    return error.message;
  }
  return tax;
}