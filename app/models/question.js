import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  notes: DS.attr(),
  author: DS.attr()
});
