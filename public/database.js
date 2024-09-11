const path = require('path');
const sqlite3 = require('sqlite3').verbose();

// const dbPath = path.join(__dirname, 'Ciane13-database.sqlite');
const dbPath = path.join(process.cwd(), 'Engineering-db.sqlite');

const db = new sqlite3.Database(dbPath);

db.serialize(() => {

  db.run('PRAGMA foreign_keys = ON;');

  db.run(`CREATE TABLE IF NOT EXISTS Users (
    id_user INTEGER PRIMARY KEY AUTOINCREMENT, 
    usertype TEXT,
    username TEXT,
    password TEXT,
    creation_date TEXT,
    last_modification_date TEXT
  )`);


});

module.exports = db;
