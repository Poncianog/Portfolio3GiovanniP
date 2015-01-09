/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$('document').ready(function(){
    $(".gio").css("background-color", "green");
    
    $("p").css("color", "white");
    
    $("phs").css("background-color", "red");
    
    $("p").css("color", "black");
    
    $('div:last p:nth-child(3)').css('background-color', 'red');
     
    $('p:last').css('color', 'red');
    
    $('p:gt(4)').css('border-style', 'solid');
    
    $('p:first').css({'background-color':'cyan', 'color':'black'});
    
    //$('div p:nth-child(1)').css('background-color', 'black');
    
    $("h1").bind('mouseover', mouseOverme).bind('mouseout', mouseOverme);
    
});

function mouseOverMe(){
    $("h1").html("Computer Class");
}

function mouseOutMen(){
    $('h1').html('Gio is awesome');
}