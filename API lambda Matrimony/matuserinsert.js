// Created by Jeny Biju.

var mysql = require('mysql');


var connection = mysql.createConnection({
    host: "database-1.cq6avrntdh5x.ap-south-1.rds.amazonaws.com",
    user: "admin",
    password: "jenysdatabase",
    database: "matrimony"
});

// to register a profile (insert user).
exports.handler = (event, context, callback) => {
    var data = JSON.parse(event.body);
    var username = data.txtUsername;
    var password = data.txtPassword;
    var gender = data.refGender;
    var DOB = data.dtDOB;
    var religion = data.refReligion;
    var mothertongue = data.refMothertongue;
    var email = data.txtEmailid;
    var phone = data.txtPhoneno;

    connection.query("insert into Users (txtUsername, txtPassword, refGender, dtDOB, refReligion, refMothertongue, txtEmailid, txtPhoneno) values (?,?,?,?,?,?,?,?);", [username, password, gender, DOB, religion, mothertongue, email, phone], function (error, result, fields) {
        if (error) {
            res.send(error);
            connection.destroy();
            throw error;
        }
        else {
            callback(error, result);
            connection.end(function (error) { callback(error, result); });

        }
    });

}
