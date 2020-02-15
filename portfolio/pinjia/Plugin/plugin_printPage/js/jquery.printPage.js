function print_page(_print_text,_print_close_text) {
	var _print_area = '<div class="printBtn-section"><button onclick="window.print()">'+_print_text+'</button><button onclick="window.close()">'+_print_close_text+'</button></div>';
	var myWindow = window.open("", "_blank", "toolbar=no, scrollbars=yes, resizable=yes, location=no, top=200, left=500, width=900, height=800");
	var _clone_div = $('.print_area').clone();
	
	_clone_div.find('*[style]').removeAttr('style');
	_clone_div = _clone_div.html();
	 
	 //load script and css
	myWindow.document.writeln('<link rel="stylesheet" type="text/css" href="css/custom_style/plug_printPage_style.css" />');
	myWindow.document.writeln('<script src="script/jquery-last.min.js"></script>');
	
	//load HTML
	myWindow.document.writeln(_print_area);
	myWindow.document.writeln('<div class="print-section">'+_clone_div+'</div>');
	myWindow.document.writeln(_print_area);
	
	//end code
	myWindow.document.close();
	
	//Print
	//myWindow.focus();
    //myWindow.print();
}
