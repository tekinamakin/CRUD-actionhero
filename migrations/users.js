module.exports={
up(migration,DataTypes){
return migration.createTable('users',{
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
      },
      createdAt:{
        type:DataTypes.DATE,
        allowNull:false
      },
      updatedAt:{
        type:DataTypes.DATE,
        allowNull:false
      },
      deletedAt:{
        type:DataTypes.DATE,
        defaultvalue:null
      }
});

},
down(migration,DataTypes){
    return migration.dropTable('users');
}

};