function getobj(id){
    return document.getElementById(id);
}
function date_select_list(){
    var date            = new Date();
    var _now_year       = date.getFullYear();
    var _now_month      = date.getMonth()+1;
    var _now_day        = date.getDate();
    var _now_hours      = date.getHours();
    var _now_min        = date.getMinutes();
    var le1             = _now_year - 1970;

    sub_list('year',_now_year,le1,_now_year);
    add_list('month',1,12,_now_month);
    add_list('day',1,31,_now_day);
    add_list('hours',0,24,_now_hours);
    add_list('minutes',0,60,_now_min);
}
//判斷不同的情況下二月的天數，並更改日的列表項中的內容
function febday(){
    var year=getobj('year').value;
    var month=getobj('month').value;
    var bigm=new Array('01','03','05','07','08','10','12');
    var bigstr=bigm.join('-');
    var smallm=new Array('04','06','09','10');
    var smallstr=smallm.join('-');

    if(bigstr.indexOf(month)>-1)
        add_list('day',1,31);
    if(smallstr.indexOf(month)>-1)
        day(30);
    if(month=='02'){
        if(isRui(year)){
            day(29);
        }else{
            day(28);
        }
    }
}
//改變二月的天數
function day(num){
    var list=getobj('day');
    var listlen=list.options.length;

    for(var i=listlen-1;i>=num;i--){
        list.options[i]=null;
    }
}
//是否是閏年
function isRui(year){
    if((year%400==0)||(year%4==0 && year/100!=0))
        return true;
    return false;
}
//增加list
function add_list(obj,begin,length,now_select){
    var list=getobj(obj);

    for(var i=0;i<length;i++){
        var num=fn1(i+begin,2);
        list.options[i]=new Option(num,num);

        if(num == now_select) {
            list.options[i].selected = true;
        }
    }
}
//減少List
function sub_list(obj,begin,length,now_select){
    var list=getobj(obj);

    for(var i=0;i<length;i++){
        var num=begin-i;
        list.options[i]=new Option(num,num);

        if(num == now_select) {
            list.options[i].selected = true;
        }
    }
}
//不足位數補0
function fn1(num, length) {
    return (num/Math.pow(10,length)).toFixed(length).substr(2);
}

$(function() {
    date_select_list();

    $('#year,#month').on('change',function() {
        febday();
    })
});
