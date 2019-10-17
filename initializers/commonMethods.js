const ActionHero = require('actionhero');
const api = ActionHero.api;

module.exports = class CommonMethods extends ActionHero.Initializer {
    constructor() {
        super();
    this.name="CommonMethods";

    }
    async initialize() {
        api.success = (data, resData = null) => {
            console.log("Printing resData",resData);
            data.response.success = true;
            data.response.data = resData;
            data.response.code = 200;
            data.response.message = "user created successfully"
        };
        api.fail=(data,errors)=>{
            data.response.success=false;
            data.response.message="Error while creating the user";
            data.response.code=400;
            data.response.errors=errors

        };       
    }
}