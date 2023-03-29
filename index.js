// Import mysql2
const mysql = require('mysql2');
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
// Use Express Middleware

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost3001',
        user: 'root',
        password: 'password'
    },
    console.log('Connection established to database.')
);

// Create employee
const menu = () => {
  inquirer.prompt ([
    {
      type: 'list',
      message: 'Which option do you want to select?',
      name: 'choices',
      choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a department', 'Add a role', 'Add an Employee', 'Update an Employee Role', 'Exit']
    }
  ])
  .then(answers => {
    console.log(answers)
  })
};
menu();


// app.post('/api/new-employee', ({ body }, res) => {
//     const sql = 'INSERT INTO employees (employee_name) VALUES (?)';
//     const params = [body.employee_name];

//     db.query(sql, params, (err, result) => {
//         if (err) {
//             res.status(400).json({ error: err.message});
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: body
//         });
//     });
// });

// // Read all Employees
// app.get('/api/employees', (req, res) => {
//     const sql = `SELECT id, employee_name AS title FROM employees`;

//     db.query(sql, (err, rows) => {
//         if (err) {
//             res.status(500).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: rows
//         });
//     });
// });

// // Remove an employee
// app.delete('/api/employee/:id', (req, res) => {
//     const sql = `DELETE FROM employee WHERE id = ?`;
//     const params = [req.params.id];
    
//     db.query(sql, params, (err, result) => {
//       if (err) {
//         res.statusMessage(400).json({ error: res.message });
//       } else if (!result.affectedRows) {
//         res.json({
//         message: 'Employee not found'
//         });
//       } else {
//         res.json({
//           message: 'deleted',
//           changes: result.affectedRows,
//           id: req.params.id
//         });
//       }
//     });
//   })

