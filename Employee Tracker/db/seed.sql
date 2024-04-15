-- seed.sql

-- Insert departments
INSERT INTO department (name) VALUES
    ('Engineering'),
    ('Sales'),
    ('Finance');

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES
    ('Software Engineer', 80000, 1),
    ('Sales Manager', 100000, 2),
    ('Accountant', 60000, 3);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('John', 'Doe', 1, NULL),
    ('Jane', 'Smith', 2, 1),
    ('Michael', 'Johnson', 3, 2);
