$( function() {
  $("#commentForm").validate(); 
  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();

});
/*  $( "#datepicker" ).datepicker();
  $("#commentForm").validate(); 
  
  $( "input" ).checkboxradio();
} );

  */

$(document).ready(function(){
  $(".perspire").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "blue");
  });

   $('.exercise').on('click', function(){
      $('.exercisepic').toggle(4000);
  });

  $('#hidden1').hover(function(){
    $('#hidden1').hide(3000);

  });

  $('#hidden2').hover(function(){
    $('#hidden2').hide(3000);

  });

  $('#hidden3').hover(function(){
    $('#hidden3').hide(3000);

  });

  $('#aboutus').fadeOut(2500).fadeIn(2500).fadeOut(4000).fadeIn(4000).fadeOut(4000).fadeIn(4000);
  $('#aboutus').css("background-color", "olive")

});

