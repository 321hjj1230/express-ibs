const db = require("../models");
const Food = db.food;
let fs = require ('fs')
let path = require('path')

exports.create=(req,res)=>{
    if(!req.body.name){
        res.status(400).send({
            message: "性名不能为空"
        });
        return;
    }
    const food ={
        name:req.body.name,
        number: req.body.number,
        date: req.body.date,
    };
    Food.create(food).then(data=>{
        res.send(data);
    }).catch((err)=>{
        res.status(500).send({
            message:
                err.message || "创建出错"
        });
        
    });
};


 exports.findAll=(req,res)=>{
    Food.findAll().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.status(500).send({
            message:
              err.message || "查询列表出错"
        });
    })
}



exports.findOne=(req,res)=>{
    let id=req.query.id
    Food.findByPk(id).then((data)=>{
    if(data){
        res.send(data);
    }else{
        res.status(404).send({
            message:"ID不存在",
        });
    }
    }).catch((err)=>{
        res.status(500).send({
            message:
              err.message || "查询列表出错"
        });
    
    })
}


exports.update=(req,res)=>{
    let id=req.body.id
    console.log(id)
    Food.update(req.body,{
        where:{
            id: id
        }
    }).then((data)=>{
        console.log(data[0])
    if(data[0]!=0){
        res.send({
            message:"更新成功",

        });
    }else{
        res.status(404).send({
            message:"更新失败",
        });
    }
    }).catch((err)=>{
        res.status(500).send({
            message:
              err.message || "更新失败"
        });
    
    })
}


