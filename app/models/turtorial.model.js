module.exports=(sequelize,Sequelize)=>{
    const Tutorial = sequelize.define("tutorial",{
        title:{
            type: Sequelize.STRING
        },
        description:{
            type:Sequelize.STRING
        },
        published:{
            type: Sequelize.STRING
        }
    })
    return Tutorial

    // const User = sequelize.define("user",{
    //     name:{
    //         type: Sequelize.STRING
    //     },
    //     pic:{
    //         type:Sequelize.STRING
    //     },
    //     password:{
    //         type: Sequelize.STRING
    //     }
    // })
    // return User
}
