import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts', function() {
    this.route('post', { path: ':id' }, function() {});
    this.route('create');
    this.route('edit', { path: ':id/edit' });
  });
});

export default Router;
