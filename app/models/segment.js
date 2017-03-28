import DS from 'ember-data';

export default DS.Model.extend({
  n: DS.attr('number'),
  osm_id: DS.attr('string'),
  geojson: DS.attr()
});
