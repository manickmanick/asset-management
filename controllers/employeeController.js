const express = require('express');
const Employee = require('../models/employee');

const router = express.Router();

// Display all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.render('employees', { employees });
  } catch (err) {
    res.status(500).send('Error fetching employees.');
  }
});

router.post('/add', async (req, res) => {
    const {name, isActive } = req.body;
    try {
      const newEmployee = await Employee.create({
        name,
        isActive,
      });
  
      res.redirect('/'); // Redirect to the employee list page after successful insertion
    } catch (err) {
        console.log(err);
      res.status(500).send('Error adding employee.');
    }
  });

module.exports = router;
