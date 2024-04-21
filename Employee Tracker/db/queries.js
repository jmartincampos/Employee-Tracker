// queries.js
const mysql = require('mysql2');
const connect = require('./db');

// Create connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'employee_tracker',
    password: 'password' // Replace with your MySQL password
});

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

// Other query functions (addRole, addEmployee, updateEmployeeRole, etc.)

module.exports = {
    viewAllDepartments,
    viewAllRoles,
    viewAllEmployees,
    addDepartment
    // Add other functions as needed
};
