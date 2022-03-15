// Created by Jeny Biju.

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "database-1.cq6avrntdh5x.ap-south-1.rds.amazonaws.com",
    user: "admin",
    password: "jenysdatabase",
    database: "matrimony"
}); 

// to edit profile.
exports.handler = (event, context, callback) =>{
    var data = JSON.parse(event.body);
    var id = data.id;
    var email = data.txtEmailid;
    var phoneno = data.txtPhoneno;
    
    connection.query("update Users set txtEmailid=?, txtPhoneno=? where id=?;",[email,phoneno,id], function (error, result, fields){
        if (error){
            connection.destroy();
            throw error;
        }
        else {
            callback(error, result);
            connection.end(function (error) { callback(error, result);});
              
        }});
    
 };
 