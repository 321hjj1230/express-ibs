const db = require("../models");
const Tutorial = db.tutorials;
let fs = require('fs');
var dbConfig = require('../config/db.config');

exports.create=(req,res)=>{
    if(!req.body.title){
        res.status(400).send({
            message: "姓名不能为空"
        });
        return;
    }
    const turtorial ={
        title:req.body.title,
        description: req.body.description,
        published: req.body.published,
    };
    Tutorial.create(turtorial).then(data=>{
        res.send(data);
    }).catch((err)=>{
        res.status(500).send({
            message:
                err.message || "创建出错"
        });
        
    });
};


 exports.findAll=(req,res)=>{
    Tutorial.findAll().then((data)=>{
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
    Tutorial.findByPk(id).then((data)=>{
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
    Tutorial.update(req.body,{
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

exports.destroy=(req,res)=>{
    let id=req.body.id
    console.log(id)
    Tutorial.destroy({
        where:{
            id: id
        }
    })
    // .then((data)=>{
    //     if(data){
    //         res.send(data);
    //     }else{
    //         res.status(404).send({
    //             message:"ID不存在",
    //         });
    //     }
    // }).catch((err)=>{
    //     res.status(500).send({
    //         message:
    //           err.message || "更新失败"
    //     });
    
    // })
}

// exports.editUserImg = (req,res)=>{
//     if(req.file.length === 0){
//         res.render('error',{message:'上传文件不能为空！'});
//     }else{
//         let file = req.file;
//         console.log(file);
//         fs.renameSync('./public/uploads/'+file.filename,'./public/uploads/'+file.originalname);
//         res.set({
//             'content-type':'application/JSON; charset=utf-8'
//         })
//         let id=req.query.id
//         let imgUrl = 'http://localhost:3000/public/uploads/'+file.originalname;
//         let sql =`update tutorials set published=? where id=?`;
//         let sqlArr = [imgUrl,id];
//         dbConfig.sqlConnect(sql,sqlArr,(err,data)=>{
//             if(err){
//                 console.log(err);
//                 throw '出错了';
//             }else{
//                 if(data.affectedRows == 1){
//                     res.send({
//                         code:200,
//                         msg:'修改成功',
//                         url:imgUrl
//                     })
//                 }else{
//                     res.send({
//                         code:400,
//                         msg:'修改失败'
//                     })
//                 }
//             }
//         })
//     }
    
// }

