const { Action, api } = require('actionhero');
const sequelize = require('sequelize');


module.exports = class CreateUser extends Action {
    constructor() {
        super();
        this.name = "FindUser";
        this.description = "Finding a new user using this api";
        }
    
    

    async run(data) {
       
try{
        const params = data.connection.params;
    
        const findUser = await api.models.users.findOne({
            where: {
                [sequelize.Op.or]: {
                    firstName: params.firstName,
                    lastName: params.lastName,
                    email: params.email
                }
            },
            logging: console.log
        })

        if (findUser !== null)
            api.success(data, { userDetails: findUser })

        else

            api.fail(data, { errors:'Error while fetching the user' })
    }
    catch(error){
        console.log("error whie fetching the user",error);
        
    }

}
}
