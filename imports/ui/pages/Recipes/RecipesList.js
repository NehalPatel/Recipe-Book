import { Meteor } from 'meteor/meteor';
import { Recipes } from '/imports/api/recipes/recipes.js';

import '../../components/Recipes/NewRecipe.js';
import '../../components/Recipes/Recipe.js';

import './RecipesList.html';

const Collections = {
 	Recipes
};

Template.registerHelper('Collections', Collections);

Template.RecipesList.onCreated(function () {	
  Meteor.subscribe('recipes.all', function(){
	console.log(Recipes);
  });

});

Template.RecipesList.helpers({
	
	recipes: ()=> {
		return Recipes.find({});
	}
	
});
