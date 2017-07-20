import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Recipes } from './recipes.js';

Meteor.methods({

	'toggleMenuItem'(id, currentState){
		Recipes.update(id, {
			$set: {
				inMenu : !currentState
			}
		});
	},

	'deleteRecipe'(id){
		Recipes.remove(id);
	}
	
});