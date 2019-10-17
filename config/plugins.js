exports['default'] = {
    plugins: (api) => {
      return {
        'ah-sequelize-plugin': { path: __dirname + '/../node_modules/ah-sequelize-plugin' }
      }
    }
  }