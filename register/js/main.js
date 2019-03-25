const express=require("express");
const router=require("./router.js")
const bodyparser=require("body-parser");
var server=express();
server.listen(300);
server.use(express.static("../public"));
server.use(bodyparser.urlencoded({
    extended:false
}));
server.use("/yonghu",router);