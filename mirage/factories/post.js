import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) {
    return `Post ${i}`;
  },
  body() {
    return faker.lorem.sentences();
  }
});
