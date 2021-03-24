if(localStorage.getItem('game')==1){
    window.location ='play.html';
}

///////////////////////new game///////////////////////
var red=2;
var green=2;
var yellow=1;
var blue=1;
var banCount=2;

$('#index-btn-red-ban').click(function () { 
if(banCount<2){
    red=1;
    banCount++;
    $('#index-btn-red-user').removeClass('active');
    $('#index-btn-red-robot').removeClass('active');
    $('#index-btn-red-ban').addClass('active');
}
});

$('#index-btn-green-ban').click(function () { 
    if(banCount<2){
        green=1;
        banCount++;
        $('#index-btn-green-user').removeClass('active');
        $('#index-btn-green-robot').removeClass('active');
        $('#index-btn-green-ban').addClass('active');
    }
});

$('#index-btn-yellow-ban').click(function () { 
    if(banCount<2){
        yellow=1;
        banCount++;
        $('#index-btn-yellow-user').removeClass('active');
        $('#index-btn-yellow-robot').removeClass('active');
        $('#index-btn-yellow-ban').addClass('active');
    }
});

$('#index-btn-blue-ban').click(function () { 
    if(banCount<2){
        blue=1;
        banCount++;
        $('#index-btn-blue-user').removeClass('active');
        $('#index-btn-blue-robot').removeClass('active');
        $('#index-btn-blue-ban').addClass('active');
    }
});

/////////

$('#index-btn-red-user').click(function(){ 
    if(red==1){
        banCount--;
    }
    red=2;
    $('#index-btn-red-ban').removeClass('active');
    $('#index-btn-red-robot').removeClass('active');
    $('#index-btn-red-user').addClass('active');
});

$('#index-btn-green-user').click(function(){ 
    if(green==1){
        banCount--;
    }
    green=2;
    $('#index-btn-green-ban').removeClass('active');
    $('#index-btn-green-robot').removeClass('active');
    $('#index-btn-green-user').addClass('active');
});

$('#index-btn-yellow-user').click(function(){ 
    if(yellow==1){
        banCount--;
    }
    yellow=2;
    $('#index-btn-yellow-ban').removeClass('active');
    $('#index-btn-yellow-robot').removeClass('active');
    $('#index-btn-yellow-user').addClass('active');
});

$('#index-btn-blue-user').click(function(){ 
    if(blue==1){
        banCount--;
    }
    blue=2;
    $('#index-btn-blue-ban').removeClass('active');
    $('#index-btn-blue-robot').removeClass('active');
    $('#index-btn-blue-user').addClass('active');
});

/////////

$('#index-btn-red-robot').click(function(){ 
    if(red==1){
        banCount--;
    }
    red=3;
    $('#index-btn-red-ban').removeClass('active');
    $('#index-btn-red-user').removeClass('active');
    $('#index-btn-red-robot').addClass('active');
});

$('#index-btn-green-robot').click(function(){ 
    if(green==1){
        banCount--;
    }
    green=3;
    $('#index-btn-green-ban').removeClass('active');
    $('#index-btn-green-user').removeClass('active');
    $('#index-btn-green-robot').addClass('active');
});

$('#index-btn-yellow-robot').click(function(){ 
    if(yellow==1){
        banCount--;
    }
    yellow=3;
    $('#index-btn-yellow-ban').removeClass('active');
    $('#index-btn-yellow-user').removeClass('active');
    $('#index-btn-yellow-robot').addClass('active');
});

$('#index-btn-blue-robot').click(function(){ 
    if(blue==1){
        banCount--;
    }
    blue=3;
    $('#index-btn-blue-ban').removeClass('active');
    $('#index-btn-blue-user').removeClass('active');
    $('#index-btn-blue-robot').addClass('active');
});
//////////////////////////////////////////////

$('#start').click(function name() {
    localStorage.clear();
    localStorage.setItem('game','1');

    localStorage.setItem('red',red.toString());
    localStorage.setItem('green',green.toString());
    localStorage.setItem('yellow',yellow.toString());
    localStorage.setItem('blue',blue.toString());
});