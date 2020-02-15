$(document).ready(function() {  
    $(document).get(0).oncontextmenu = function() {
        return false;
    };
    $('body').attr('onselectstart','return false');
}); 
