import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  /* Method & code as described at https://emberigniter.com/custom-relationship-links-json-api/
  */
  normalizeFindAllResponse(store, type, payload) {
    payload.data = payload.data.map(this.addLinks);
    return payload;
  },

  normalizeFindRecordResponse(store, type, payload) {
    payload.data = this.addLinks(payload.data);
    return payload;
  },

  addLinks(fietsroute) {
    // fietsroute.type = 'fietsroute'; //already there, no?
    // delete fietsroute.relationships.segments.data;
    fietsroute.relationships.segments = {};
    fietsroute.relationships.segments.links = {
      related: `/map2osm/fietsroutes/${fietsroute.id}/segments`
    };
    return fietsroute;
  }

});
