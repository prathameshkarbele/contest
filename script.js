/** @format */


function addData() {
  //Write your code here
  let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);

  console.log(employees);
}

function removeAdmin() {
  //Write your code here
  let updatedEmployees = arr.filter(
    (employee) => employee.profession !== "admin"
  );

  console.log(updatedEmployees);
}

function concatenateArray() {
  //Write your code here
  let newEmployees = [
    { name: "vijay", profession: "developer", id: 1 },
    { name: "anuska", profession: "designer", id: 2 },
    { name: "rahul", profession: "manager", id: 3 },
  ];

  let allEmployees = arr.concat(newEmployees);

  console.log(allEmployees);
}
