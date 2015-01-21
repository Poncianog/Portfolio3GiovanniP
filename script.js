/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function(){
    $(".gio").css("background-color", "green"); 
    
    $("p").css("color", "black");
    $("h3").css("color", "black");
    
    //$("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    $("h1").bind("click", mouseClick);   
    
    $('#replaceWText').bind('click', replaceWText);
    
    $('#addPara').bind('click', addAPara);
    
    $('#removePara').bind('click', removeAPara);   
    
    $('#hide').bind('click', hideThePage);
    
    $('#show').bind('click', showThePage);
    
    $('#superHumans').accordion({header: "h3"});
    
    $('#superHumans').css('width', '400px');
    
    $('h3').css('background', 'white');
    
 
});

//comment// this hides the page and makes it slide over so the page is no longer visible.
function hideThePage(){
    $('#show').css('visibility', 'visible');
    
    $('div').hide('slide', {}, 2500);
    
    $('#show').show('explode', {}, 2500);
}

function showThePage(){
    $('div').show('explode', {}, 2500);

}

function removeAPara(){
    $('#randPara p:last').remove();
}

function addAPara(){
    $('#randPara').append('<p>ADDED</p>');
}

function replaceWText(){
    $('#replaceWText').text('Goodbye');
}

function mouseOverMe (){
    $("h1").html("Get noscoped");
}

function mouseOverMe (){
    $("h1").html("I am a king");
}

function mouseClick (){
    
    $("p").html("LizardSquad is Hacking You");
}

function addAPara() {
    $('#randPara').append('Solami');
}

