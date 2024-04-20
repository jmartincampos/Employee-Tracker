-- schema.sql
DROP DATABASE IF EXISTS department;

-- Create department table
CREATE TABLE department (
    id INT NOT NULL,
    name VARCHAR (30) NOT NULL
);

-- Create role table
CREATE TABLE role (
    id INT NOT NULL,
    title VARCHAR (30) NOT NULL,
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (id) 
);

-- Create employee table
CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (id)
);
