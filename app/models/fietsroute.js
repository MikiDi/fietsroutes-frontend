import DS from 'ember-data';

export default DS.Model.extend({
  name:  DS.attr('string'),
  length: DS.attr('number'),
  description: DS.attr('string'),
  segments: DS.hasMany('segment')
});
