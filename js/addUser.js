$(function(){
	'use strict'
	var userRef = new Firebase('https://crackling-inferno-4598.firebaseio.com/user');

	$('#btnAddUser').click(function(){
		var user = {};
		user.name = $('#nameOfUser').val();
		user.country = $('#country').val();
		user.city = $('#city').val();
		user.state = $('#state').val();
		user.gender = 'M';
		
		var newPostRef = userRef.push(user, function(){
			console.log('push successful... key=' + newPostRef.key());
		})

	});
})