const { Action, api } = require('actionhero');
const Joi = require('@hapi/joi');
const sequelize = require('sequelize');

module.exports = class UpdateUser extends Action {
    constructor() {
        super();
        this.name = "UpdateUser";
        this.description = "updating the user";
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
        const params = data.connection.params
        console.log("checking params in updateUser", params);
        //get user data 
        try {
            const getUserData = await api.models.users.findOne({
                where: {
                    email: params.email
                }
            })
        }
        catch (error) {
            console.log("Error while getting the userData from email");
         }

        const updateData = {
            firstName: params.firstName ? params.firstName : getUserData.firstName,
            lastName: params.lastName ? params.lastName : getUserData.lastName,
            email: params.email ? params.email : getUserData.email,
            address: params.address ? params.address : getUserData.address
        }
        //updateUserdata
        try {
            const updateUserInfo = await api.models.users.update(
                updateData
                ,
                {
                    where: { email: params.email }
                })
            console.log("printing updated userinfo", updateUserInfo);

            api.success(data, { userUpdated: updateUserInfo })

        }
        catch (error) {
            console.log("error while updating user", error);
            api.fail(data, { error: error })
        }
    }

}