import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Accounts } from 'meteor/accounts-base';

import '../../ui/layouts/MainLayout.js';
import '../../ui/layouts/HomeLayout.js';

import '../../ui/pages/';

if(Meteor.isClient){
	Accounts.onLogin(function(){
		FlowRouter.go('recipe-book');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}

FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()){
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name: 'home',
	action(){
		if(Meteor.userId()){
			FlowRouter.go('recipe-book');
		}
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action(){
		BlazeLayout.render('MainLayout', {main: 'RecipesList'});
	}
});

FlowRouter.route('/recipe/:id', {
	name: 'recipe',
	action(){
		BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
	}
});


FlowRouter.route('/menu',{
	name: 'menu',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Menu'});
	}
});

FlowRouter.route('/shopping-list',{
	name: 'shopping-list',
	action(){
		BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
	}
});