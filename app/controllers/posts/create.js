import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createPost(event) {
      event.preventDefault();

      let post = this.store.createRecord('post', {
        title: this.title,
        body: this.body
      });

      post.save().then(() => {
        this.setProperties({
          title: '',
          body: ''
        });
  
        this.transitionToRoute('posts');
      });
    }
  }
});
