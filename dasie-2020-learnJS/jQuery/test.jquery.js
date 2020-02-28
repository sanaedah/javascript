/*vanilla avascript*/
let listItems = document.querySelectorAll('li');
let i;
for (i = 0; i < listItems.length; i++) {
    listItems[i].className = 'starred';
}

/*jQuery : $("element").method("params");*/

$("li").addClass("starred");

/*document.ready*/
jQuery(document).ready(function () {
    // 
});

$(document).ready(function () {
    // 
});

$(function () {
    //
});

$('p').on( 'click', function () {
    alert("Paragraph clicked!!")
});

/*test jQuery selectors on: https://www.w3schools.com/jquery/trysel.asp*/