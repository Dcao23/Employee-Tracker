INSERT INTO department (department_name)
VALUES  ('HR'),
        ('IT'),
        ('Director'),
        ('Management'),
        ('Engineer');


INSERT INTO role (title, salary, department_id)
VALUES  ('employee', '1', 1),
        ('employee', '2', 2),
        ('employee', '3', 3),
        ('employee', '4', 4),
        ('employee', '5', 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('a', 'b',1,1),
        ('b', 'c',2,2),
        ('c', 'd',3,3),
        ('d', 'e',4,4),
        ('e', 'f',5,5);