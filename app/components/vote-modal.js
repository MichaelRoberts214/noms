import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		hideModal: function () {
			this.toggleProperty('showModal');
		}
	}
});
