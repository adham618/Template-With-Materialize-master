//- Initialize Material Plugins
$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.materialboxed').materialbox();
  $('.parallax').parallax();
  $('.tabs').tabs();
  $('.datepicker').datepicker();
  $('.tooltipped').tooltip();
  $('.scrollspy').scrollSpy();
});

//- Initialize nicescroll 
$(function() {  
  $("body").niceScroll({
      cursorcolor: "#002E6D", 
      cursorwidth: "7px", 
      cursorborder: "none", 
      cursorborderradius: "none", 
      zindex: "99999"
  });
});