import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  comment: DS.hasMany('comment', {async: true})
});
