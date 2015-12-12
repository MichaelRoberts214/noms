import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string', {async: false}),
  votes: DS.attr('number', {async: false}),
});
