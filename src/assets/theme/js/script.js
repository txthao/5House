/*
Author       : Code-Theme
Template Name: Find Houses - HTML5 Template
Version      : 1.0
*/

"use strict";

jQuery(document).on('ready', function ($) {

	/*----------------------------------
	//------ JQUERY SCROOLTOP ------//
	-----------------------------------*/
	$(window).on('scroll', function () {
		var scrolltop = $(this).scrollTop();
		if (scrolltop >= 50) {
			$(".go-up").fadeIn();
		} else {
			$(".go-up").fadeOut();
		}
	});

}(jQuery));
