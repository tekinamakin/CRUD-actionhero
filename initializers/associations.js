const { Initializer, api } = require('actionhero');
const Sequelize = require('sequelize')

module.exports = class AssociationsInitializer extends Initializer {
  constructor() {
    super()
    this.name = 'AssociationsInitializer'
  }

  initialize() {
    Sequelize.Promise.config({ longStackTraces: true });

  }


  start() {
    Object.entries(api.models).filter(([k, m]) => typeof m.associate === 'function')
      .forEach(([k, m]) => m.associate(api.models))
  }
}
