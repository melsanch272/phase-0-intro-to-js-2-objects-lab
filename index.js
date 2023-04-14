// Write your solution in this file!

const employee = {
    name: "Code",
    streetAddress: "123 Broadway",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee, "name": "Sam", "streetAddress": "11 Broadway"}
    return newEmployee
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
};

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee1 = {...employee[key]};
    delete newEmployee1[key]
    return newEmployee1
};

function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee[key];
    return employee;
}