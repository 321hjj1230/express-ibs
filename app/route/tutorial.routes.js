module.exports = app => {

    
    const turtorial= require("../controllers/tutorial.controller.js");
    var router = require("express").Router();
    router.post("/",turtorial.create);
    router.get("/",turtorial.findAll);
    router.get("/get-tutorial",turtorial.findOne);
    router.post("/update",turtorial.update);
    router.post("/destroy",turtorial.destroy);
    // router.post("/getimg",turtorial.editUserImg);
    
    app.use('/api/tutorials',router);

}