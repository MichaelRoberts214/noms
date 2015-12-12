import Ember from 'ember';

export default Ember.Component.extend({
	list: null,

	restaurantName: null,

	actions: {
		hideModal: function () {
			this.toggleProperty('showModal');
		},

		submit: function () {
			var list = this.get('list');
			var suggestion = this.get('restaurantName');
			// add suggestion to the list (model)
			// save the model
			list.push({
				restaurant: suggestion,
				votes: 0
			});
			this.send('hideModal');
		}
	}
});
