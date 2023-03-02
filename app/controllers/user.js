const db = require("../models");
const User = db.user;
let fs = require ('fs')
let path = require('path')

exports.create=(req,res)=>{
    if(!req.body.name){
        res.status(400).send({
            message: "性名不能为空"
        });
        return;
    }
    const user ={
        name:req.body.name,
        pic: req.body.pic,
        password: req.body.password,
    };
    User.create(user).then(data=>{
        res.send(data);
    }).catch((err)=>{
        res.status(500).send({
            message:
                err.message || "创建出错"
        });
        
    });
};


 exports.findAll=(req,res)=>{
    User.findAll().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.status(500).send({
            message:
              err.message || "查询列表出错"
        });
    })
}

//修改头像
exports.editUserImg = (req, res) => {

    // console.log(1)
    const file = req.file

    console.log(path.parse(req.file.originalname).ext);
    let oldname = req.file.path //获取path
    let newname = req.file.path + path.parse(req.file.originalname).ext  
    fs.renameSync(oldname, newname) //重命名
    console.log('文件类型：%s', file.mimetype)
    console.log('原始文件名：%s', file.originalname)
    console.log('文件大小：%s', file.size)
    console.log('文件保存路径：%s', file.path)
    
    
    User.update(
    {
            pic:'http://localhost:3000/'+file.filename+path.parse(req.file.originalname).ext  //修改数据库
        },
        {
            where:{
            name:req.body.username
        }
    }).then((data)=>{
        res.send(data);

    })
    
    
}


exports.findOne=(req,res)=>{
    let id=req.query.id
    User.findByPk(id).then((data)=>{
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
    User.update(req.body,{
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


