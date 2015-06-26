import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'acceptancebug/tests/helpers/start-app';

var application;

module('Acceptance | user', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /user', function(assert) {
  visit('/user');

  andThen(function() {
    assert.equal(currentURL(), '/user');
  });
});
