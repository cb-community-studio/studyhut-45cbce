const { Homework } = require('./homework.class');
const createModel = require('../../models/homework.model');
const hooks = require('./homework.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/homework', new Homework(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('homework');

  service.hooks(hooks);
};