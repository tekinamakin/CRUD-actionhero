module.exports=function(sequelize,DataTypes){
    const model=sequelize.define(
        'users',
        { 
            id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
            firstName: {
                type: DataTypes.STRING,
                allowNull: false
              },
              lastName: {
                type: DataTypes.STRING,
                allowNull: false
              },
              email:{
                  type:DataTypes.STRING,
                  allowNull:false
              },
              address:{
                  type:DataTypes.STRING,
                  allowNull:true
              }
            },
              {
                  timestamps:true
              }
    );

    return model;
}

 

