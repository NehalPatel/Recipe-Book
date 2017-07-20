// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Recipes } from '../recipes.js';

Meteor.publish('recipes.all', function () {
  	return Recipes.find();
});

Meteor.publish('recipe.single', function (id) {
	//check(id, String);
	return Recipes.find({_id: id});
});