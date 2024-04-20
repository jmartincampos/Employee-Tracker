-- seed.sql

-- Insert departments
INSERT INTO department (id, name) VALUES
    (01, 'Engineering'),
    (02, 'Sales'),
    (03, 'Finance');

-- Insert roles
INSERT INTO role (id, title, salary) VALUES
    (123, 'Software Engineer', 80000),
    (124, 'Sales Manager', 100000),
    (125, 'Accountant', 60000);

-- Insert employees
INSERT INTO employee (id, first_name, last_name, manager_id) VALUES
     (1, 'John', 'Doe', 3),
     (2, 'Jane', 'Smith', 13),
     (3, 'Michael', 'Johnson', 92);
