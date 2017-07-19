import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './recipes.js';

Meteor.methods({

	'toggleMenuItem' : function(id, currentState){
		Recipes.update(id, {
			$set: {
				inMenu : !currentState
			}
		});
	},

	'deleteRecipe' : function(id){
		Recipes.remove(id);
	}
	
});