const { Reward } = require('./reward.class');
const createModel = require('../../models/reward.model');
const hooks = require('./reward.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/reward', new Reward(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('reward');

  service.hooks(hooks);
};