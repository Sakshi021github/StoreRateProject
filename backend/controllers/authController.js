const db = require('../config/db');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');



exports.register = async (req, res) => {
  try {
    const {
      name,
      email,
      address,
      password
    } = req.body;

    
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = `
      INSERT INTO users(name,email,address,password)
      VALUES(?,?,?,?)
    `;

    db.query(
      sql,
      [name, email, address, hashedPassword],
      (err, result) => {

        if (err) {
          return res.status(500).json(err);
        }

        res.status(201).json({
          message: 'User Registered Successfully'
        });
      }
    );

  } catch (error) {
    res.status(500).json(error);
  }
};



exports.login = (req, res) => {

  const { email, password } = req.body;

  const sql = `
    SELECT * FROM users
    WHERE email = ?
  `;

  db.query(sql, [email], async (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    if (result.length === 0) {
      return res.status(400).json({
        message: 'Invalid Email or Password'
      });
    }

    const user = result[0];

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: 'Invalid Email or Password'
      });
    }

    res.json({
      token: generateToken(user.id, user.role),

      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  });

};