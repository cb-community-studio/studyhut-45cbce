const assert = require('assert');
const app = require('../../src/app');

describe('\'reward\' service', () => {
  it('registered the service', () => {
    const service = app.service('reward');

    assert.ok(service, 'Registered the service (reward)');
  });
});
