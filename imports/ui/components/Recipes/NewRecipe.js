import { Meteor } from 'meteor/meteor';

import './NewRecipe.html';

Template.NewRecipe.events({

	'click .fa-close'(){
		Session.set('newRecipe', false);
	},

	'click .new-recipe'(){
		Session.set('newRecipe', true);		
	}

});