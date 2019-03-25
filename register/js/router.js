const pool=require("./pool.js");
const express=require("express");
var router=express.Router();
router.get("/zhuce",(req,res)=>{
    var b1=req.query.phone;
    console.log(req.query);
    pool.query("SELECT * FROM zhuce WHERE phone=?",[b1],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
        res.send("用户已注册");
        }else{
        pool.query("INSERT INTO zhuce SET ?",[req.query],(err,result)=>{
            if(err) throw err;
            if(result.affectedRows>0){
            res.send("注册成功");
            }else{res.send("注册失败");}
        });
        }
        //res.send("接收成功");
        });
})
module.exports=router;