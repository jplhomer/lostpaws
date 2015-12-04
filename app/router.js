import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('pet', {
    path: 'pet/:id'
  });
});

export default Router;
