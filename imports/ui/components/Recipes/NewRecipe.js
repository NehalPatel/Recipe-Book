import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { Recipes } from '/imports/api/recipes/recipes.js';

import './NewRecipe.html';

Template.NewRecipe.helpers({
	newRecipe: function(){
		return Session.get('newRecipe');
	}
});

Template.NewRecipe.events({

	'click .fa-close'(){
		Session.set('newRecipe', false);
	},

	'click .new-recipe'(){
		Session.set('newRecipe', true);		
	}

});



