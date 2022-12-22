const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "userdb",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/userinsert", (req, res) => {
  const Username = req.body.Username;
  const Usermail = req.body.Usermail;
  const Useraddress = req.body.Useraddress;
  const Usercontact = req.body.Usercontact;
  const Userdob = req.body.Userdob;

  const sqlinsert =
    "INSERT INTO user (Username,Usermail,Useraddress,Usercontact,Userdob) VALUES (?,?,?,?,?)";
  db.query(
    sqlinsert,
    [Username, Usermail, Useraddress, Usercontact, Userdob],
    (err, result) => {
      res.status(200).json("success");
    }
  );
});

app.listen(3001, () => {
  console.log("running");
});
