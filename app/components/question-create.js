import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createNewQuestion() {
      this.set('createNewQuestion', true);
    }
  }
});
