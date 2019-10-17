const { Action, api} = require('actionhero');
const Joi = require('@hapi/joi');
const _ = require('lodash');

module.exports = class CreateUser extends Action {
    constructor() {
        super();
        this.name = "CreateUser";
        this.description = "creating a new user using this api";
        this.joiSchema = Joi.object()
            .keys({
                firstName: Joi.string()
                    .required()
                    .min(3)
                    .max(30),
                lastName: Joi.string()
                    .required()
                    .min(3)
                    .max(30),
                email: Joi.string()
                    .required()
                    .email(),
                address: Joi.string()
                    .min(6)
                    .max(40)
            })
    }


    async run(data) {
        const params = data.connection.params;
        console.log('-----=--->',api.models);
        
        console.log("printing params", params);

        const userData = {
            firstName: params.firstName,
            lastName:params.lastName,
            email:params.email,
            address:params.address
        }
        
        
//url: http://localhost:3000/api/v1/service/createUser

        try {
           
            const userCreated = await api.models.users.create(userData)
            console.log("Information of newly created user=======>",userCreated);
            if(userCreated != null){
            api.success(data, { userCreated: userData });
            }
            else{
                console.log("---------------------->",errors.ValidationErrorItem.message);
            }
            }
        catch(error){
            console.log('Error while creating a new user', error.message);
            
        }
}

}