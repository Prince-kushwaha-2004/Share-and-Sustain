const express = require("express");
const app = express();
const mysql = require("mysql2")

const path = require("path");
const methodOverride = require("method-override");
app.use(methodOverride("_method"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname,"public")));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'share_and_sustain',
    password: 'Prince@102004@'
});

app.listen(8080, () => {
    console.log("listning at port 8080");
})

app.get("/", (req, res) => {
    res.render("index.ejs")
});
app.post("/newuser", (req, res) => {

    let { username, email, address, pass1, pass2 } = req.body;
    if (pass1 != pass2) {
        res.send("password doesnot match");
    } else {


        q = `INSERT INTO users (username,email,address,password) VALUES ('${username}','${email}','${address}','${pass1}')`
        try {
            connection.query(q, (error, result) => {
                if (error) res.send("some error in database" + error.stack);
                data={username,email,address,pass1};
                res.render("user.ejs",{data})
            })
        } catch (error) {
            console.error('error in data base');
        }
    }
});
app.post("/user",(req,res)=>{
    let{email,password}=req.body;
    q=`select * from users where email='${email}'`;
    try{
        connection.query(q,(error,result)=>{
            if (error) res.send("user not found");
            let data=result[0];
            if(password==data.password){
                console.log(data)
                res.render("user.ejs",{data})
            }else{
                res.send("Wrong password")
            }

        })
    }catch(error){
        console.log("error found")
    }
    

    
})