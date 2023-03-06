const users = require("./users/users.service.js");
const userinfo = require("./userinfo/userinfo.service.js");
const schedule = require("./schedule/schedule.service.js");
const homework = require("./homework/homework.service.js");
const reward = require("./reward/reward.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(userinfo);
  app.configure(schedule);
  app.configure(homework);
  app.configure(reward);
  // ~cb-add-configure-service-name~
};
