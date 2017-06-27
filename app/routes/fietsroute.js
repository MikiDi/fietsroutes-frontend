import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('fietsroute', params.fietsroute_id);
  },

  onEachFeature(feature, layer) {
    feature.bindTooltip("my tooltip");
    console.log("bound tooltip");
    // layer.bindPopup(popupContent);
}

});
