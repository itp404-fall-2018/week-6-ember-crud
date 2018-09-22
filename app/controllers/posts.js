import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deletePost(post) {
      post.destroyRecord();
    }
  }
});
