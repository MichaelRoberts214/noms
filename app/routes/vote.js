import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
		return this.findAll('restaurant');
	}
});
