'use strict';

var mysql = require('mysql');
var fs = require('fs');
var wstream = fs.createWriteStream('C:/myOutput.txt'); 

var userexists = true;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  ReadVerifyAndDeleteDatabase();
  
});

var ReadVerifyAndDeleteDatabase = function () {
    /*Reading from the database and write to the file*/
    con.query("SELECT * FROM demo.users", function (err, rows, fields) {
        if (err) {
            console.log(err);
        } else {
            for (var i = 0; i < rows.length; i++) {
                wstream.write(rows[i].id + "   " + rows[i].firstName + " " + rows[i].lastName + "   " + rows[i].email + "\n" + "\n");
            }
        }

        var userfound = true;

        /*Verification that data has been written to the file*/

        fs.readFile('C:/myOutput.txt', function (err, fs) {
            if (err) {
                userexists = false;
            } else if (userexists) {
                userfound = (fs.indexOf('dui@aliquetsem.org') >= 0)
                userexists = userfound;
                console.log(userfound);

            }

        });
    });

    /*This is the code snippet that will delete the database.
      it should first be used after the first run of the program.*/

    /*con.query("DROP TABLE demo.users", function (err) {
        if (err) throw err
    });*/
}