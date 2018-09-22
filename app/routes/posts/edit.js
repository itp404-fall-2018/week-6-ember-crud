import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('post', params.id);
  },
  setupController(controller, model) {
    this._super(...arguments);
    controller.setProperties({
      title: model.title,
      body: model.body
    });
  }
});
