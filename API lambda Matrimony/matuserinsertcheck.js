// Created by Jeny Biju.


var mysql = require('mysql');


var connection = mysql.createConnection({
    host: "database-1.cq6avrntdh5x.ap-south-1.rds.amazonaws.com",
    user: "admin",
    password: "jenysdatabase",
    database: "matrimony"
});

// to check if a user already exists (user validation)
exports.handler = (event, context, callback) =>{
    var data = JSON.parse(event.body);
    var username = data.txtUsername;
    var phone = data.txtPhoneno;

    connection.query("select txtUsername, txtPhoneno from Users where txtUsername=? and txtPhoneno=?;",[username,phone], function (error, result, fields){
        if (error){
            if (err.errno == 1062)
                    res.send((view =
                    {
                        "status": "error",
                        "values": "User already exists"
                    }));
            else res.send(error);        
            connection.destroy();
            throw error;
        }
        else {
            
            
            callback(error, result);
            connection.end(function (error) { callback(error, result);});
              
        }});
    
 }
 