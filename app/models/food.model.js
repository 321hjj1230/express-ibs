module.exports=(sequelize,Sequelize)=>{


    const Food = sequelize.define("food",{
        name:{
            type:Sequelize.STRING
        },
        number:{
            type:Sequelize.INTEGER   
        },
        index:{
            type:Sequelize.STRING
        },
        date:{
            type:Sequelize.DATE
        }

    })
    return Food
}
