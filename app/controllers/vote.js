import Ember from 'ember';

export default Ember.Controller.extend({
	showModal: false,

	testData: [{
		restaurant: 'Costal',
		votes: 1.2
	},
	{
		restaurant: 'Goomba Bento',
		votes: 3.1
	},
	{
		restaurant: 'Sriracha Plate',
		votes: 2
	}],

	actions: {
		toggleModal: function () {
			this.toggleProperty('showModal');
		}
	}
});
