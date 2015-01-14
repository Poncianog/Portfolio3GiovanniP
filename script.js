/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$('document').ready(function(){
    $(".gio").css("background-color", "green");
    
    $("p").css("color", "white");
       
    $('div:last p:nth-child(3)').css('background-color', 'green');
     
    $('p:last').css('color', 'white');
    
    $('p:gt(4)').css('border-style', 'solid');
    
    $('p:first').css({'background-color':'cyan', 'color':'black'});
    
    //$('div p:nth-child(1)').css('background-color', 'black');
    
    $("h1").bind('mouseover', mouseOverme).bind('mouseout', mouseOverme);
    
    $('#replaceWText').bind('click', replaceWText);
    
    $('#randPara').bind('click',addAPara);
    
    $('#removePara').bind('click', removeAPara);
    
    
    
    
});

function addAPara(){
    $('#randPara p:last').remove();
}

function removeAPara(){
    $('#randPara').append('<p>ADDED</p>');
}

function replaceWText(){
    $('#replaceWText').text('Replaced');
}

function mouseOverMe(){
    $("h1").html("Computer Class");
}

function mouseOutMe(){
    $('h1').html('Gio is awesome');
}

