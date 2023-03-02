module.exports = app => {

    const multer=require('multer');
    const upload = multer({ dest: "img/" })

    const user= require("../controllers/user.js");
    var router = require("express").Router();
    router.post("/",user.create);
    router.get("/",user.findAll);
    router.get("/getuser",user.findOne);
    router.post("/update",user.update);

    router.post("/upload", upload.single('avatar'),user.editUserImg)
    // router.post("/getimg",turtorial.editUserImg);
    
    app.use('/api/user',router);

    


}