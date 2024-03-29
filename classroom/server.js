const express = require("express");
const app = express();  
const users= require("./routes/user.js");
const posts= require("./routes/post.js");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash=require("connect-flash");
const path = require("path");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

const sessionOption= {
    secret:"mysupersecretstring",
    resave:false,
    saveUninitialized:true,
};
app.use(session(sessionOption));
app.use(flash());

app.use((req,res,next) =>{
    res.locals.successMsg=req.flash("success");
    res.locals.errorMsg=req.flash("error");
    next();
})

app.get("/register",(req , res) =>{
    let {name="anonyomous"}=req.query;
    // console.log(req.session);
    req.session.name=name;
    // console.log(req.session.name);
    if(name ==="anonyomous"){
        req.flash("error","user not registed occured");
    }
    else{
        req.flash("success","user registerd successfully");
    }
    res.redirect("/hello");
    // res.send(name);
});

app.get("/hello",(req,res) =>{
    // res.send(`hello,${req.session.name}`);
    // console.log(req.flash("sucess"));
    res.render("page.ejs",{name:req.session.name});
})

// app.use(session({secret:"mysupersecretstring",resave:false,saveUninitialized:true}));


// app.get("/reqcount",(req,res)=>{
//     if(req.session.count){
//         req.session.count++;
//     }
//     else{
//         req.session.count=1;
//     }
//     res.send(`you sent a req ${req.session.count} times`);
// })
// app.get("/test",(req,res) =>{
//     res.send("test successfull");
// });









// app.use(cookieParser("secretcode"));
// app.get("/getsignedcookie",(req,res) =>{
//     res.cookie("made-in","us",{signed:true});
//     res.send("signed cookies send");
// })
// app.get("/verify",(req,res) =>{
//     console.log(req.signedCookies);
//     res.send("verified");
// })
// app.get("/getcookies",(req,res)=>{
//     res.cookie("greet","hello");
//     res.cookie("bye","thankyou");
//     res.send("sent some cookies");
// });
// app.get("/greet",(req,res) =>{
//     let { name = "anonyomous"}=req.cookies;
//     res.send(`hi, ${name}`);
// });
// app.get("/",(req,res) =>{
//     console.dir(req.cookies);
//     res.send("hi i m root");
// });
// app.use("/users",users);
// app.use("/posts",posts);



app.listen(3000 ,()=>{
    console.log("server is listening to port 3000");
})