const { Action, api } = require('actionhero');
const Joi = require('@hapi/joi');
const sequelize = require('sequelize');

module.exports = class DeleteUser extends Action {
    constructor() {
        super();
        this.name = "deleteUser";
        this.description = "Delete the existing user by using email";
        this.joiSchema = Joi.object()
            .keys({
                email: Joi.string()
                    .required()
                    .email()
            })
    }

    async run(data) {
        const params = data.connection.params
        try {
            const deleteUser = await api.models.users.destroy({
                where: {
                    email: params.email
                }
            })
            api.success(data, { deletedUserInfo: deleteUser })
        }
        catch (error) {
            api.fail(data, { error: error })
            console.log();

        }
    }
}