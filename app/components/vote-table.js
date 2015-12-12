import Ember from 'ember';

export default Ember.Component.extend({
	list: [{
		restaurant: 'Kostal',
		votes: 1.2
	},
	{
		restaurant: 'Goom Bento',
		votes: 3.1
	},
	{
		restaurant: 'Super Plate',
		votes: 2
	}]
});
