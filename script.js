/** @format */
let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map(employee => {
    if (employee.profession === "developer") {
      console.log(employee.name);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(employee => {
    if (employee.profession === "developer") {
      console.log(employee.name);
    }
  });
}

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
