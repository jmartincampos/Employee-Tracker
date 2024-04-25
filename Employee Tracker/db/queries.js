// queries.js
const mysql = require('mysql2');
const pool = require('./db');

// View all departments
function viewAllDepartments() {
    pool.query('SELECT * FROM department', (err, results) => {
        if (err) throw err;
        console.table(results);
    });
}

// View all roles
function viewAllRoles() {
    pool.query('SELECT * FROM role', (err, results) => {
        if (err) throw err;
        console.table(results);
    });
}

// View all employees
function viewAllEmployees() {
    pool.query('SELECT * FROM employee', (err, results) => {
        if (err) throw err;
        console.table(results);
    });
}

// Add department
function addDepartment(departmentName) {
    pool.query('INSERT INTO department (name) VALUES (?)', [departmentName], (err, results) => {
        if (err) throw err;
        console.log('Department added successfully');
    });
}

// Update employee manager
function updateEmployeeManager(employeeId, newManagerId) {
    // Implement the query to update the employee's manager
}

// View employees by manager
function viewEmployeesByManager(managerId) {
    // Implement the query to view employees by manager
}

// View employees by department
function viewEmployeesByDepartment(departmentId) {
    // Implement the query to view employees by department
}

// Delete department
function deleteDepartment(departmentId) {
    // Implement the query to delete a department
}

// Delete role
function deleteRole(roleId) {
    // Implement the query to delete a role
}

// Delete employee
function deleteEmployee(employeeId) {
    // Implement the query to delete an employee
}

// View total utilized budget of a department
function viewDepartmentBudget(departmentId) {
    // Implement the query to calculate the total utilized budget of a department
}

// Export all functions
module.exports = {
    viewAllDepartments,
    viewAllRoles,
    viewAllEmployees,
    addDepartment,
    updateEmployeeManager,
    viewEmployeesByManager,
    viewEmployeesByDepartment,
    deleteDepartment,
    deleteRole,
    deleteEmployee,
    viewDepartmentBudget
};
