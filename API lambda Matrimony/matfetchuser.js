var mysql = require('mysql');


var connection = mysql.createConnection({
    host: "database-1.cq6avrntdh5x.ap-south-1.rds.amazonaws.com",
    user: "admin",
    password: "jenysdatabase",
    database: "matrimony"
}); 

// to view details of a selected profile.
exports.handler = (event, context, callback) =>{
    var data = JSON.parse(event.body);
    var username = data.txtUsername;
    var phoneno = data.txtPhoneno;
    
    connection.query("select u.txtUsername, g.Gender, m.Mothertongue, u.dtDOB, r.Religion, u.txtPhoneno from Users u join Gender g on u.refGender=g.id join Mothertongue m on u.refMothertongue=m.id join Religion r on u.refReligion=r.id where u.txtUsername=? and u.txtPhoneno=?;",[username,phoneno], function (error, result, fields){
        if (error){
            connection.destroy();
            throw error;
        }
        else {
            // // connected!
            // console.log(result);
            callback(error, result);
            connection.end(function (error) { callback(error, result);});
              
        }});
    
 };
 