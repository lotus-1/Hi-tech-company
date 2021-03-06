const Store = require('data-store')
const db = new Store('db', { cwd: './' });
const databaseConnection = require("../db_connection.js");

const getInfoEmployee = cb => {
  databaseConnection.query(`SELECT first_name, last_name, phone_num, job_id FROM employee ;`,
   (err, res) => {
    if (err) cb(err);
      cb(null, res.rows);
      // console.log('res.rows:', res.rows);
    });
};

const getInfoRole = cb => {
  databaseConnection.query(`SELECT job_id, role, selary, mgr_id FROM role;`,
   (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  });
};

const getInfoJob = cb => {
  databaseConnection.query(`SELECT seniority, boss, status FROM job;`,
   (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  });
}

const getUserFromDatabase = (email, cb) => {
  const database = db.get("data")
  const user = database.find(user => user.email === email)
  const password = user ? user.password : undefined
  cb(null, password)
}


module.exports = {
   getInfoJob,
   getInfoRole,
   getInfoEmployee,
   getUserFromDatabase

};
