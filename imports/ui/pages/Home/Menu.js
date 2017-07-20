import { Meteor } from 'meteor/meteor';
import { Recipes } from '/imports/api/recipes/recipes.js';

import './Menu.html';

Template.Menu.onCreated(function () {

	Meteor.subscribe('recipes.all', function(){
		//console.log(Recipes);
	});

});

Template.Menu.helpers({
	
	recipes: ()=> {
		return Recipes.find({inMenu:true });
	}
	
});