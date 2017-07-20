import { Meteor } from 'meteor/meteor';
import { Recipes } from '/imports/api/recipes/recipes.js';

import './RecipeSingle.html';

Template.RecipeSingle.onCreated(function () {

	var id = FlowRouter.getParam('id');

	Meteor.subscribe('recipe.single', id, function(){
		console.log(Recipes);
	});

});

Template.RecipeSingle.helpers({
	
	recipe: ()=> {

		var id = FlowRouter.getParam('id');

		return Recipes.findOne({_id:id});
	}
	
});