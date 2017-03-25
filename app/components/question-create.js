import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createNewQuestion() {
      this.set('createNewQuestion', true);
    },

    saveQuestion() {
      var params = {
        title: this.get('title'),
        notes: this.get('notes'),
        author: this.get('author'),
      };
      this.set('createNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
