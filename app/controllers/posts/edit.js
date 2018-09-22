import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    editPost(post, event) {
      event.preventDefault();

      post.setProperties({
        title: this.title,
        body: this.body
      });

      post.save().then(() => {
        this.transitionToRoute('posts.post', post.id);
      });
    }
  }
});
