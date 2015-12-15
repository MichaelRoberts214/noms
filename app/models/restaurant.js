import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string', {async: false}),
  votes: DS.attr('number', {async: false}),

  Autosave: Ember.observer('votes', function () {
  	this.save();
  })
});
