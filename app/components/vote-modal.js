import Ember from 'ember';

export default Ember.Component.extend({
	list: null,

	actions: {
		hideModal: function () {
			this.toggleProperty('showModal');
		},

		submit: function () {
			var list = this.get('list');
			this.send('hideModal');
		}
	}
});
