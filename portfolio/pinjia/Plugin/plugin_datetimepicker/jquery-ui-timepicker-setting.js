$(function() {

	var _calendarIco = 'Plugin/UI/img/calendar.png';

	$("#datepicker").datepicker({
	  showOn: 'both',
	  buttonImage: _calendarIco,
	  buttonImageOnly: true,
	  dateFormat: 'yy-mm-dd',
	  minDate : '-0',
	  changeYear: true,
	  showButtonPanel: true
	});

	$("#datetimepicker").datetimepicker({
	  showOn: 'both',
	  buttonImage: _calendarIco,
	  buttonImageOnly: true,
	  dateFormat: 'yy-mm-dd',
	  minDate : '-0',
	  changeYear: true,
	  showButtonPanel: true
	});

	$("#timepicker").timepicker({
	  showOn: 'both',
	  buttonImage: 'images/clock.png',
	  buttonImageOnly: true,
	  showButtonPanel: true
	});

	$("#datetimepicker_birthday").datepicker({
	  minDate: '-100y',
	  maxDate : '+0d',
	  dateFormat: 'yy-mm-dd',
	  defaultDate: '-20y',
	  changeYear: true,
	  showButtonPanel: true
	});
});