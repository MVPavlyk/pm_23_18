$(document).ready(function (){
	$('.burger_menu').click(function(event){
		$('.nav, .ann, .right_content, .left_b_divs, .messages, .courses, .main_nav, .nav_text, .nav_point, .nav_footer, .user_name, .location, .location_text, .activity, .user, .user_ava, .right_b_divs, .calendar').toggleClass('active');
	});
});
