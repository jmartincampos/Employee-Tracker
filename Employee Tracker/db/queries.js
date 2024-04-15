// queries.js
const mysql = require('mysql2');

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

// Other query functions (viewAllRoles, viewAllEmployees, addDepartment, etc.)
