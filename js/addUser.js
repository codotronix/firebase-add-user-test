$(function(){
	'use strict'
	var userRef = new Firebase('https://crackling-inferno-4598.firebaseio.com/user');

	$('#btnAddUser').click(function () {
		if (allReqFilled()) {
			console.log('all fields filled up ...');
			//addUserToDb();			
			$('#msg').text('Success...').removeClass('error').addClass('success');
		}
		else {
			$('#msg').text('All fields are mandatory...').removeClass('success').addClass('error');
		}	
	});

	function allReqFilled () {
		var r = true;
		$('.required').each(function () {
			if ($(this).val().length == 0) {
				$(this).addClass('error');
				r = false;
			}
		})
		return r;
	}

	function addUserToDb () {
		var user = {};
		user.name = $('#nameOfUser').val();
		user.country = $('#country').val();
		user.city = $('#city').val();
		user.state = $('#state').val();
		user.gender = 'M';
		
		var newPostRef = userRef.push(user, function(){
			console.log('push successful... key=' + newPostRef.key());
		});
	}
})