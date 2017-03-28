import DS from 'ember-data';

export default DS.Model.extend({
  n: DS.attr('number'),
  osmid: DS.attr('string'),
  geojson: DS.attr()
});
