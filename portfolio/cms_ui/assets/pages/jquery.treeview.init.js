/*
 Template: Metrica - Bootstrap 4 Admin Dashboard
 Author: Mannatthemes
 File: Treeview
 */



$(function () {
	"use strict";

	// Default
	$('#jstree').jstree();
	
	//Check Box
	$('.jstree-checkbox').jstree({
		"types" : {
	      "default" : {
	        "icon" : "fa fa-folder text-warning font-18"
	      }
	    },
		"checkbox" : {
			"keep_selected_style" : false
		},
		"plugins" : [ "checkbox","types" ]
	});
});