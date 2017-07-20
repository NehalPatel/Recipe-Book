import { Meteor } from 'meteor/meteor';
import { Recipes } from '/imports/api/recipes/recipes.js';

import './ShoppingList.html';

Template.ShoppingList.onCreated(function () {

	Meteor.subscribe('recipes.all', function(){
		//console.log(Recipes);
	});

});

Template.ShoppingList.helpers({
	
	shoppingList: ()=> {
		return Recipes.find({inMenu:true });
	}
	
});