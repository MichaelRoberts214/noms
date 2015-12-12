import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'https://polar-headland-1413.herokuapp.com',
	namespace: 'api',
	coalesceFindRequests: true
});
