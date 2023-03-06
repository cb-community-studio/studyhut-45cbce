const assert = require('assert');
const app = require('../../src/app');

describe('\'homework\' service', () => {
  it('registered the service', () => {
    const service = app.service('homework');

    assert.ok(service, 'Registered the service (homework)');
  });
});
