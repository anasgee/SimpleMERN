require("./db/connection")
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const RegisterMessage = require("./models/message")










const port= process.env.PORT || 3000;
const app = express();


// ----------------------PATHS-----------------------------
const staticPath = path.join(__dirname,"../public");
const viewsPath =  path.join(__dirname,"../src/templates/views");
const partialsPath =  path.join(__dirname,"../src/templates/partials");
const css =path.join(__dirname, "../node_modules/bootstrap/dist/css")
const javascript= path.join(__dirname, "../node_modules/bootstrap/dist/js")
const jQuery= path.join(__dirname, "../node_modules/jquery/dist")

// console.log(path.join(__dirname,"../src/templates/views"))

// MiddleWares
app.use(express.urlencoded({extended:false}))
app.use("/css", express.static(css));
app.use("/js", express.static(javascript));
app.use("/jq", express.static(jQuery));
app.use(express.static(staticPath));


app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Routes/.......-----------------------------

app.get("/", (req,res)=>{
    res.render("index")
    // res.send("Hello from Server");
})
app.post("/contact", async(req,res)=>{
    // console.log(req.body.fname)

try{
    const getMessage = new RegisterMessage(req.body);
    await getMessage.save();
    console.log(getMessage)

    res.status(201).render("index");
}catch(error){
    res.status(400).send(error)
}

})


app.listen(port,()=>{
    console.log("Server is listening to port 3000")
})