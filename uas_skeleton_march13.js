  var mindesktop = 768;  //anything less than this is mobile.
  function htmlbodyHeightUpdate(){
    var height3 = $(window).height();
    var height1 = $('.nav').height()+50;
    height2 = $('.main').height();
    //alert($(window).width());
    if(height2 > height3){
      $('html').height(Math.max(height1,height3,height2)+10);
      $('body').height(Math.max(height1,height3,height2)+10);
    }
    else {
      $('html').height(Math.max(height1,height3,height2));
      $('body').height(Math.max(height1,height3,height2));
    }
  }

  function initializesidebar() {
    //Initialize: Desktop -> always show sidebar; Mobile -> hide sidebar by default
    if ($(window).width() >= mindesktop ) {
      $('#mainSidebar').show();
      $('#bs-sidebar-navbar-collapse').collapse('show');
    }
    else {
      $('#mainSidebar').hide();
      $('#bs-sidebar-navbar-collapse').collapse('hide');
    }
  }

  $(document).ready(function(){
      htmlbodyHeightUpdate();
      $( window ).resize(function() {
        htmlbodyHeightUpdate();
        initializesidebar();
      });
      $( window ).scroll(function() {
        height2 = $('.main').height();
        htmlbodyHeightUpdate();
      });

      initializesidebar();

    // Handler so that only one can be opened between Menu and Submenu   
      $('#mainmenu').click(function() {
        if($(window).width() < mindesktop ) {
          $('#mainSidebar').hide();
          $('#bs-sidebar-navbar-collapse').collapse('hide');
        }
      });

      $('#submenu').click(function() {
        if($(window).width() < mindesktop ) {
          if ($('#mainSidebar').css("display") == "none") {
          //alert('Hey!');
            $('#mainSidebar').show();
            $('#bs-sidebar-navbar-collapse').collapse('show');
          }

          else {
            $('#mainSidebar').hide();
            $('#bs-sidebar-navbar-collapse').collapse('hide');
          }
          //alert($('#mainSidebar').css("display"));
          //$('#mainSidebar').show();
          $('#myNavbar').collapse('hide');
        }
      });

      $('[id^=circle]').click(function() { 
        if ($(window).width() < mindesktop ) {
          $('#mainSidebar').hide();
          $('#bs-sidebar-navbar-collapse').collapse('hide');
        }
        else {
          if ($('#mainSidebar').css("display") == "none") {
            $('#mainSidebar').show();
            $('#bs-sidebar-navbar-collapse').collapse('show');
          }
        }
      });
 
      //for Tooltip
      $('#bs-sidebar-navbar-collapse [data-toggle="tooltip"]').tooltip({placement: "right"});
      //Assign and enable scrollspy
      $('body').scrollspy({target: "#bs-sidebar-navbar-collapse"})
      //Enable smooth scrolling
      $("#bs-sidebar-navbar-collapse a, #mainsection1 a").click(
    function(event){
            event.preventDefault();
            var hash = this.hash;
      $('html, body').animate({
               scrollTop: $(hash).offset().top
              }, 800, function(){
                window.location.hash = hash;
            })
    });

      $('#bs-sidebar-navbar-collapse').on('activate.bs.scrollspy', function () {
       var activesection = $(this).find("li.active a").attr("href");
       //alert(activesection);
       setSwitchBackground(activesection);
      });
      
  });


/*Sets display to none*/
$(document).ready(function() {
        $("body").css("display", "none");
    });


$(document).ready(function() {
  $("body").css("display", "none");

  $("body").fadeIn(3000);

  $("a.transition").click(function(event){
      event.preventDefault();
      linkLocation = this.href;
      $("body").fadeOut(2000, redirectPage);      
  });
       
  function redirectPage() {
      window.location = linkLocation;
  }
});


$(document).ready(function(){ 
 $("#closeTech").click(function() { 
      $("#alertt").fadeOut("slow"); 
    });
 });


$(document).ready(function(){
  TriggerClick = 0;

  $("#LeftSide").click(function(){
    if(TriggerClick==0){
         TriggerClick=1;
         $("div#LeftSide").animate({width:'100%',overflow:'hidden'}, 500);
         //$("div#RightSide").animate({visibility:'hidden',overflow:'hidden'}, 500);
    }else{
         TriggerClick=0;
         $("div#LeftSide").animate({width:'50%'}, 500);
         $("div#RightSide").animate({display:'block'}, 500);
         
    };
  });
});


//$('#invisible').hide();
$(window).scroll(function() {
    if ($(this).scrollTop() > 950)
     {
        $('#mainSidebar').fadeIn();
     }
    else
     {
      $('#mainSidebar').fadeOut();
     }
 });


//$('#invisible').hide();
$(window).scroll(function() {
    if ($(this).scrollTop() > 1000)
     {
        $('#invisible').fadeIn();
     }
    else
     {
      $('#invisible').fadeOut();
     }
 });

function cycleBackgrounds() {
  var index = 0;

  $imageEls = $('.toggle-image'); // Get the images to be cycled.

  setInterval(function () {
    // Get the next index.  If at end, restart to the beginning.
    index = index + 1 < $imageEls.length ? index + 1 : 0;
    // Show the next image.
    $imageEls.eq(index).addClass('show');
    // Hide the previous image.
    $imageEls.eq(index - 1).removeClass('show');

  }, 5000);
};

// Document Ready.
$(function () {
  cycleBackgrounds();
});


function cycleBackgrounds2() {
  var index2 = 0;

  $imageEls2 = $('.toggle-image2'); // Get the images to be cycled.

  setInterval(function () {
    // Get the next index.  If at end, restart to the beginning.
    index2 = index2 + 1 < $imageEls2.length ? index2 + 1 : 0;
    // Show the next image.
    $imageEls2.eq(index2).addClass('show');
    // Hide the previous image.
    $imageEls2.eq(index2 - 1).removeClass('show');

  }, 6000);
};

// Document Ready.
$(function () {
  cycleBackgrounds2();
});

/*IED JS*/
function switchVisible1() {
  var modal1 = document.getElementById('courseDescriptionPageIED');
  var modal2 = document.getElementById('mediaPageIED');
  var modal3 = document.getElementById('teachNotePageIED');

  if (modal1) {

      if (modal1 == 'none') {

          modal1.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}

function switchVisible2() {
  var modal1 = document.getElementById('courseDescriptionPageIED');
  var modal2 = document.getElementById('mediaPageIED');
  var modal3 = document.getElementById('teachNotePageIED');

  if (modal1) {

      if (modal1 == 'none') {
        
          modal1.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible3() {
  var modal1 = document.getElementById('courseDescriptionPageIED');
  var modal2 = document.getElementById('mediaPageIED');
  var modal3 = document.getElementById('teachNotePageIED');

  if (modal2) {

      if (modal2 == 'none') {

          modal2.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible4() {
  var modal1 = document.getElementById('courseDescriptionPageIED');
  var modal2 = document.getElementById('mediaPageIED');
  var modal3 = document.getElementById('teachNotePageIED');

  if (modal2) {

      if (modal2 == 'none') {
        
          modal2.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible5() {
  var modal1 = document.getElementById('courseDescriptionPageIED');
  var modal2 = document.getElementById('mediaPageIED');
  var modal3 = document.getElementById('teachNotePageIED');

  if (modal3) {

      if (modal3 == 'none') {

          modal3.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible6() {
  var modal1 = document.getElementById('courseDescriptionPageIED');
  var modal2 = document.getElementById('mediaPageIED');
  var modal3 = document.getElementById('teachNotePageIED');

  if (modal3) {

      if (modal3 == 'none') {
        
          modal3.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}

/*CIM JS*/
function switchVisible7() {
  var modal1 = document.getElementById('courseDescriptionPageCIM');
  var modal2 = document.getElementById('mediaPageCIM');
  var modal3 = document.getElementById('teachNotePageCIM');

  if (modal1) {

      if (modal1 == 'none') {

          modal1.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}

function switchVisible8() {
  var modal1 = document.getElementById('courseDescriptionPageCIM');
  var modal2 = document.getElementById('mediaPageCIM');
  var modal3 = document.getElementById('teachNotePageCIM');

  if (modal1) {

      if (modal1 == 'none') {
        
          modal1.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible9() {
  var modal1 = document.getElementById('courseDescriptionPageCIM');
  var modal2 = document.getElementById('mediaPageCIM');
  var modal3 = document.getElementById('teachNotePageCIM');

  if (modal2) {

      if (modal2 == 'none') {

          modal2.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible10() {
  var modal1 = document.getElementById('courseDescriptionPageCIM');
  var modal2 = document.getElementById('mediaPageCIM');
  var modal3 = document.getElementById('teachNotePageCIM');

  if (modal2) {

      if (modal2 == 'none') {
        
          modal2.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible11() {
  var modal1 = document.getElementById('courseDescriptionPageCIM');
  var modal2 = document.getElementById('mediaPageCIM');
  var modal3 = document.getElementById('teachNotePageCIM');

  if (modal3) {

      if (modal3 == 'none') {

          modal3.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible12() {
  var modal1 = document.getElementById('courseDescriptionPageCIM');
  var modal2 = document.getElementById('mediaPageCIM');
  var modal3 = document.getElementById('teachNotePageCIM');

  if (modal3) {

      if (modal3 == 'none') {
        
          modal3.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}

/*POE JS*/
function switchVisible13() {
  var modal1 = document.getElementById('courseDescriptionPagePOE');
  var modal2 = document.getElementById('mediaPagePOE');
  var modal3 = document.getElementById('teachNotePagePOE');

  if (modal1) {

      if (modal1 == 'none') {

          modal1.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}

function switchVisible14() {
  var modal1 = document.getElementById('courseDescriptionPagePOE');
  var modal2 = document.getElementById('mediaPagePOE');
  var modal3 = document.getElementById('teachNotePagePOE');

  if (modal1) {

      if (modal1 == 'none') {
        
          modal1.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible15() {
  var modal1 = document.getElementById('courseDescriptionPagePOE');
  var modal2 = document.getElementById('mediaPagePOE');
  var modal3 = document.getElementById('teachNotePagePOE');

  if (modal2) {

      if (modal2 == 'none') {

          modal2.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible16() {
  var modal1 = document.getElementById('courseDescriptionPagePOE');
  var modal2 = document.getElementById('mediaPagePOE');
  var modal3 = document.getElementById('teachNotePagePOE');

  if (modal2) {

      if (modal2 == 'none') {
        
          modal2.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible17() {
  var modal1 = document.getElementById('courseDescriptionPagePOE');
  var modal2 = document.getElementById('mediaPagePOE');
  var modal3 = document.getElementById('teachNotePagePOE');

  if (modal3) {

      if (modal3 == 'none') {

          modal3.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible18() {
  var modal1 = document.getElementById('courseDescriptionPagePOE');
  var modal2 = document.getElementById('mediaPagePOE');
  var modal3 = document.getElementById('teachNotePagePOE');

  if (modal3) {

      if (modal3 == 'none') {
        
          modal3.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}


/*COPE JS*/
function switchVisible19() {
  var modal1 = document.getElementById('courseDescriptionPageCOPE');
  var modal2 = document.getElementById('mediaPageCOPE');
  var modal3 = document.getElementById('teachNotePageCOPE');

  if (modal1) {

      if (modal1 == 'none') {

          modal1.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}

function switchVisible20() {
  var modal1 = document.getElementById('courseDescriptionPageCOPE');
  var modal2 = document.getElementById('mediaPageCOPE');
  var modal3 = document.getElementById('teachNotePageCOPE');

  if (modal1) {

      if (modal1 == 'none') {
        
          modal1.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible21() {
  var modal1 = document.getElementById('courseDescriptionPageCOPE');
  var modal2 = document.getElementById('mediaPageCOPE');
  var modal3 = document.getElementById('teachNotePageCOPE');

  if (modal2) {

      if (modal2 == 'none') {

          modal2.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible22() {
  var modal1 = document.getElementById('courseDescriptionPageCOPE');
  var modal2 = document.getElementById('mediaPageCOPE');
  var modal3 = document.getElementById('teachNotePageCOPE');

  if (modal2) {

      if (modal2 == 'none') {
        
          modal2.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible23() {
  var modal1 = document.getElementById('courseDescriptionPageCOPE');
  var modal2 = document.getElementById('mediaPageCOPE');
  var modal3 = document.getElementById('teachNotePageCOPE');

  if (modal3) {

      if (modal3 == 'none') {

          modal3.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible24() {
  var modal1 = document.getElementById('courseDescriptionPageCOPE');
  var modal2 = document.getElementById('mediaPageCOPE');
  var modal3 = document.getElementById('teachNotePageCOPE');

  if (modal3) {

      if (modal3 == 'none') {
        
          modal3.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}


/*CSE JS*/
function switchVisible25() {
  var modal1 = document.getElementById('courseDescriptionPageCSE');
  var modal2 = document.getElementById('mediaPageCSE');
  var modal3 = document.getElementById('teachNotePageCSE');

  if (modal1) {

      if (modal1 == 'none') {

          modal1.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}

function switchVisible26() {
  var modal1 = document.getElementById('courseDescriptionPageCSE');
  var modal2 = document.getElementById('mediaPageCSE');
  var modal3 = document.getElementById('teachNotePageCSE');

  if (modal1) {

      if (modal1 == 'none') {
        
          modal1.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible27() {
  var modal1 = document.getElementById('courseDescriptionPageCSE');
  var modal2 = document.getElementById('mediaPageCSE');
  var modal3 = document.getElementById('teachNotePageCSE');

  if (modal2) {

      if (modal2 == 'none') {

          modal2.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible28() {
  var modal1 = document.getElementById('courseDescriptionPageCSE');
  var modal2 = document.getElementById('mediaPageCSE');
  var modal3 = document.getElementById('teachNotePageCSE');

  if (modal2) {

      if (modal2 == 'none') {
        
          modal2.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible29() {
  var modal1 = document.getElementById('courseDescriptionPageCSE');
  var modal2 = document.getElementById('mediaPageCSE');
  var modal3 = document.getElementById('teachNotePageCSE');

  if (modal3) {

      if (modal3 == 'none') {

          modal3.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible30() {
  var modal1 = document.getElementById('courseDescriptionPageCSE');
  var modal2 = document.getElementById('mediaPageCSE');
  var modal3 = document.getElementById('teachNotePageCSE');

  if (modal3) {

      if (modal3 == 'none') {
        
          modal3.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}


/*CEA JS*/
function switchVisible31() {
  var modal1 = document.getElementById('courseDescriptionPageCEA');
  var modal2 = document.getElementById('mediaPageCEA');
  var modal3 = document.getElementById('teachNotePageCEA');

  if (modal1) {

      if (modal1 == 'none') {

          modal1.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}

function switchVisible32() {
  var modal1 = document.getElementById('courseDescriptionPageCEA');
  var modal2 = document.getElementById('mediaPageCEA');
  var modal3 = document.getElementById('teachNotePageCEA');

  if (modal1) {

      if (modal1 == 'none') {
        
          modal1.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible33() {
  var modal1 = document.getElementById('courseDescriptionPageCEA');
  var modal2 = document.getElementById('mediaPageCEA');
  var modal3 = document.getElementById('teachNotePageCEA');

  if (modal2) {

      if (modal2 == 'none') {

          modal2.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible34() {
  var modal1 = document.getElementById('courseDescriptionPageCEA');
  var modal2 = document.getElementById('mediaPageCEA');
  var modal3 = document.getElementById('teachNotePageCEA');

  if (modal2) {

      if (modal2 == 'none') {
        
          modal2.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible35() {
  var modal1 = document.getElementById('courseDescriptionPageCEA');
  var modal2 = document.getElementById('mediaPageCEA');
  var modal3 = document.getElementById('teachNotePageCEA');

  if (modal3) {

      if (modal3 == 'none') {

          modal3.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible36() {
  var modal1 = document.getElementById('courseDescriptionPageCEA');
  var modal2 = document.getElementById('mediaPageCEA');
  var modal3 = document.getElementById('teachNotePageCEA');

  if (modal3) {

      if (modal3 == 'none') {
        
          modal3.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}


/*EDD JS*/
function switchVisible37() {
  var modal1 = document.getElementById('courseDescriptionPageEDD');
  var modal2 = document.getElementById('mediaPageEDD');
  var modal3 = document.getElementById('teachNotePageEDD');

  if (modal1) {

      if (modal1 == 'none') {

          modal1.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}

function switchVisible38() {
  var modal1 = document.getElementById('courseDescriptionPageEDD');
  var modal2 = document.getElementById('mediaPageEDD');
  var modal3 = document.getElementById('teachNotePageEDD');

  if (modal1) {

      if (modal1 == 'none') {
        
          modal1.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible39() {
  var modal1 = document.getElementById('courseDescriptionPageEDD');
  var modal2 = document.getElementById('mediaPageEDD');
  var modal3 = document.getElementById('teachNotePageEDD');

  if (modal2) {

      if (modal2 == 'none') {

          modal2.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible40() {
  var modal1 = document.getElementById('courseDescriptionPageEDD');
  var modal2 = document.getElementById('mediaPageEDD');
  var modal3 = document.getElementById('teachNotePageEDD');

  if (modal2) {

      if (modal2 == 'none') {
        
          modal2.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible41() {
  var modal1 = document.getElementById('courseDescriptionPageEDD');
  var modal2 = document.getElementById('mediaPageEDD');
  var modal3 = document.getElementById('teachNotePageEDD');

  if (modal3) {

      if (modal3 == 'none') {

          modal3.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible42() {
  var modal1 = document.getElementById('courseDescriptionPageEDD');
  var modal2 = document.getElementById('mediaPageEDD');
  var modal3 = document.getElementById('teachNotePageEDD');

  if (modal3) {

      if (modal3 == 'none') {
        
          modal3.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}


/*Res JS*/
function switchVisible43() {
  var modal1 = document.getElementById('courseDescriptionPageRes');
  var modal2 = document.getElementById('mediaPageRes');
  var modal3 = document.getElementById('teachNotePageRes');

  if (modal1) {

      if (modal1 == 'none') {

          modal1.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}

function switchVisible44() {
  var modal1 = document.getElementById('courseDescriptionPageRes');
  var modal2 = document.getElementById('mediaPageRes');
  var modal3 = document.getElementById('teachNotePageRes');

  if (modal1) {

      if (modal1 == 'none') {
        
          modal1.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible45() {
  var modal1 = document.getElementById('courseDescriptionPageRes');
  var modal2 = document.getElementById('mediaPageRes');
  var modal3 = document.getElementById('teachNotePageRes');

  if (modal2) {

      if (modal2 == 'none') {

          modal2.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible46() {
  var modal1 = document.getElementById('courseDescriptionPageRes');
  var modal2 = document.getElementById('mediaPageRes');
  var modal3 = document.getElementById('teachNotePageRes');

  if (modal2) {

      if (modal2 == 'none') {
        
          modal2.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible47() {
  var modal1 = document.getElementById('courseDescriptionPageRes');
  var modal2 = document.getElementById('mediaPageRes');
  var modal3 = document.getElementById('teachNotePageRes');

  if (modal3) {

      if (modal3 == 'none') {

          modal3.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible48() {
  var modal1 = document.getElementById('courseDescriptionPageRes');
  var modal2 = document.getElementById('mediaPageRes');
  var modal3 = document.getElementById('teachNotePageRes');

  if (modal3) {

      if (modal3 == 'none') {
        
          modal3.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}

/*IED*/
function showHide() {
    var ele = document.getElementById("courseDescriptionPageIED");
    var ele1 = document.getElementById("mediaPageIED");
    var ele2 = document.getElementById("teachNotePageIED");
    ele1.style.display = "none";
    ele2.style.display = "none";
    if(ele.style.display == "block") {
            ele.style.display = "none";             
      }
    else {
        ele.style.display = "block";            
    }
}

function showHide1() {
    var ele = document.getElementById("courseDescriptionPageIED");
    var ele1 = document.getElementById("mediaPageIED");
    var ele2 = document.getElementById("teachNotePageIED");
    ele.style.display = "none";
    ele2.style.display = "none";
    if(ele1.style.display == "block") {
            ele1.style.display = "none";
      }
    else {
        ele1.style.display = "block";
    }
}

    function showHide2() {
    var ele = document.getElementById("courseDescriptionPageIED");
    var ele1 = document.getElementById("mediaPageIED");
    var ele2 = document.getElementById("teachNotePageIED");
    ele.style.display = "none";
    ele1.style.display = "none";
    if(ele2.style.display == "block") {
            ele2.style.display = "none";
      }
    else {
        ele2.style.display = "block";
    }
}

/*CIM*/
function showHide3() {
    var ele = document.getElementById("courseDescriptionPageCIM");
    var ele1 = document.getElementById("mediaPageCIM");
    var ele2 = document.getElementById("teachNotePageCIM");
    ele1.style.display = "none";
    ele2.style.display = "none";
    if(ele.style.display == "block") {
            ele.style.display = "none";             
      }
    else {
        ele.style.display = "block";            
    }
}

function showHide4() {
    var ele = document.getElementById("courseDescriptionPageCIM");
    var ele1 = document.getElementById("mediaPageCIM");
    var ele2 = document.getElementById("teachNotePageCIM");
    ele.style.display = "none";
    ele2.style.display = "none";
    if(ele1.style.display == "block") {
            ele1.style.display = "none";
      }
    else {
        ele1.style.display = "block";
    }
}

    function showHide5() {
    var ele = document.getElementById("courseDescriptionPageCIM");
    var ele1 = document.getElementById("mediaPageCIM");
    var ele2 = document.getElementById("teachNotePageCIM");
    ele.style.display = "none";
    ele1.style.display = "none";
    if(ele2.style.display == "block") {
            ele2.style.display = "none";
      }
    else {
        ele2.style.display = "block";
    }
}

/*POE*/
function showHide6() {
    var ele = document.getElementById("courseDescriptionPagePOE");
    var ele1 = document.getElementById("mediaPagePOE");
    var ele2 = document.getElementById("teachNotePagePOE");
    ele1.style.display = "none";
    ele2.style.display = "none";
    if(ele.style.display == "block") {
            ele.style.display = "none";             
      }
    else {
        ele.style.display = "block";            
    }
}

function showHide7() {
    var ele = document.getElementById("courseDescriptionPagePOE");
    var ele1 = document.getElementById("mediaPagePOE");
    var ele2 = document.getElementById("teachNotePagePOE");
    ele.style.display = "none";
    ele2.style.display = "none";
    if(ele1.style.display == "block") {
            ele1.style.display = "none";
      }
    else {
        ele1.style.display = "block";
    }
}

    function showHide8() {
    var ele = document.getElementById("courseDescriptionPagePOE");
    var ele1 = document.getElementById("mediaPagePOE");
    var ele2 = document.getElementById("teachNotePagePOE");
    ele.style.display = "none";
    ele1.style.display = "none";
    if(ele2.style.display == "block") {
            ele2.style.display = "none";
      }
    else {
        ele2.style.display = "block";
    }
}


/*COPE*/
function showHide9() {
    var ele = document.getElementById("courseDescriptionPageCOPE");
    var ele1 = document.getElementById("mediaPageCOPE");
    var ele2 = document.getElementById("teachNotePageCOPE");
    ele1.style.display = "none";
    ele2.style.display = "none";
    if(ele.style.display == "block") {
            ele.style.display = "none";             
      }
    else {
        ele.style.display = "block";            
    }
}

function showHide10() {
    var ele = document.getElementById("courseDescriptionPageCOPE");
    var ele1 = document.getElementById("mediaPageCOPE");
    var ele2 = document.getElementById("teachNotePageCOPE");
    ele.style.display = "none";
    ele2.style.display = "none";
    if(ele1.style.display == "block") {
            ele1.style.display = "none";
      }
    else {
        ele1.style.display = "block";
    }
}

    function showHide11() {
    var ele = document.getElementById("courseDescriptionPageCOPE");
    var ele1 = document.getElementById("mediaPageCOPE");
    var ele2 = document.getElementById("teachNotePageCOPE");
    ele.style.display = "none";
    ele1.style.display = "none";
    if(ele2.style.display == "block") {
            ele2.style.display = "none";
      }
    else {
        ele2.style.display = "block";
    }
}


/*CSE*/
function showHide12() {
    var ele = document.getElementById("courseDescriptionPageCSE");
    var ele1 = document.getElementById("mediaPageCSE");
    var ele2 = document.getElementById("teachNotePageCSE");
    ele1.style.display = "none";
    ele2.style.display = "none";
    if(ele.style.display == "block") {
            ele.style.display = "none";             
      }
    else {
        ele.style.display = "block";            
    }
}

function showHide13() {
    var ele = document.getElementById("courseDescriptionPageCSE");
    var ele1 = document.getElementById("mediaPageCSE");
    var ele2 = document.getElementById("teachNotePageCSE");
    ele.style.display = "none";
    ele2.style.display = "none";
    if(ele1.style.display == "block") {
            ele1.style.display = "none";
      }
    else {
        ele1.style.display = "block";
    }
}

    function showHide14() {
    var ele = document.getElementById("courseDescriptionPageCSE");
    var ele1 = document.getElementById("mediaPageCSE");
    var ele2 = document.getElementById("teachNotePageCSE");
    ele.style.display = "none";
    ele1.style.display = "none";
    if(ele2.style.display == "block") {
            ele2.style.display = "none";
      }
    else {
        ele2.style.display = "block";
    }
}


/*CEA*/
function showHide15() {
    var ele = document.getElementById("courseDescriptionPageCEA");
    var ele1 = document.getElementById("mediaPageCEA");
    var ele2 = document.getElementById("teachNotePageCEA");
    ele1.style.display = "none";
    ele2.style.display = "none";
    if(ele.style.display == "block") {
            ele.style.display = "none";             
      }
    else {
        ele.style.display = "block";            
    }
}

function showHide16() {
    var ele = document.getElementById("courseDescriptionPageCEA");
    var ele1 = document.getElementById("mediaPageCEA");
    var ele2 = document.getElementById("teachNotePageCEA");
    ele.style.display = "none";
    ele2.style.display = "none";
    if(ele1.style.display == "block") {
            ele1.style.display = "none";
      }
    else {
        ele1.style.display = "block";
    }
}

    function showHide17() {
    var ele = document.getElementById("courseDescriptionPageCEA");
    var ele1 = document.getElementById("mediaPageCEA");
    var ele2 = document.getElementById("teachNotePageCEA");
    ele.style.display = "none";
    ele1.style.display = "none";
    if(ele2.style.display == "block") {
            ele2.style.display = "none";
      }
    else {
        ele2.style.display = "block";
    }
}


/*EDD*/
function showHide18() {
    var ele = document.getElementById("courseDescriptionPageEDD");
    var ele1 = document.getElementById("mediaPageEDD");
    var ele2 = document.getElementById("teachNotePageEDD");
    ele1.style.display = "none";
    ele2.style.display = "none";
    if(ele.style.display == "block") {
            ele.style.display = "none";             
      }
    else {
        ele.style.display = "block";            
    }
}

function showHide19() {
    var ele = document.getElementById("courseDescriptionPageEDD");
    var ele1 = document.getElementById("mediaPageEDD");
    var ele2 = document.getElementById("teachNotePageEDD");
    ele.style.display = "none";
    ele2.style.display = "none";
    if(ele1.style.display == "block") {
            ele1.style.display = "none";
      }
    else {
        ele1.style.display = "block";
    }
}

    function showHide20() {
    var ele = document.getElementById("courseDescriptionPageEDD");
    var ele1 = document.getElementById("mediaPageEDD");
    var ele2 = document.getElementById("teachNotePageEDD");
    ele.style.display = "none";
    ele1.style.display = "none";
    if(ele2.style.display == "block") {
            ele2.style.display = "none";
      }
    else {
        ele2.style.display = "block";
    }
}


/*Res*/
function showHide21() {
    var ele = document.getElementById("courseDescriptionPageRes");
    var ele1 = document.getElementById("mediaPageRes");
    var ele2 = document.getElementById("teachNotePageRes");
    ele1.style.display = "none";
    ele2.style.display = "none";
    if(ele.style.display == "block") {
            ele.style.display = "none";             
      }
    else {
        ele.style.display = "block";            
    }
}

function showHide22() {
    var ele = document.getElementById("courseDescriptionPageRes");
    var ele1 = document.getElementById("mediaPageRes");
    var ele2 = document.getElementById("teachNotePageRes");
    ele.style.display = "none";
    ele2.style.display = "none";
    if(ele1.style.display == "block") {
            ele1.style.display = "none";
      }
    else {
        ele1.style.display = "block";
    }
}

    function showHide23() {
    var ele = document.getElementById("courseDescriptionPageRes");
    var ele1 = document.getElementById("mediaPageRes");
    var ele2 = document.getElementById("teachNotePageRes");
    ele.style.display = "none";
    ele1.style.display = "none";
    if(ele2.style.display == "block") {
            ele2.style.display = "none";
      }
    else {
        ele2.style.display = "block";
    }
}

//****  Joshua Timers *****
  var timers = new Array();
 
  function setSwitchBackground(activeyear) {
 
    // clear all timers in the array
    for (var i = 0; i < timers.length; i++) {
      clearTimeout(timers[i]);
    }
 
/*Freshman - Changing Backgrounds*/
    /*Frosh starts here*/
    var courseyr1A = $('#Half1A');
    var backgroundsyr1A =
           ['url("ctePics/stockPhotos/IedStock3.jpg")',
            'url("ctePics/stockPhotos/IedStock2.jpg")',
            'url("ctePics/stockPhotos/IedStock1.jpg")'];
    var currentyr1A = 0;
    function nextBackground1A() {
      courseyr1A.css('background-image', backgroundsyr1A[currentyr1A = ++currentyr1A % backgroundsyr1A.length]);
      if (activeyear == "#mainsection2") {
        timers.push(setTimeout(nextBackground1A, 4000));
      }
    }
    if (activeyear == "#mainsection2") {
      timers.push(setTimeout(nextBackground1A, 4000));
    }
    courseyr1A.css('background-image', backgroundsyr1A[0]);
 
    var courseyr1B = $('#Half1B');
    var backgroundsyr1B =
           ['url("ctePics/stockPhotos/CimStock1.jpg")',
            'url("ctePics/stockPhotos/CimStock3.jpg")',
            'url("ctePics/stockPhotos/CimStock2.jpg")'];
    var currentyr1B = 0;
    function nextBackground1B() {
      courseyr1B.css(
       'background-image',
        backgroundsyr1B[currentyr1B = ++currentyr1B % backgroundsyr1B.length]
      );
      if (activeyear == "#mainsection2") {
        timers.push(setTimeout(nextBackground1B, 5000));
      }
    }
    if (activeyear == "#mainsection2") {
      timers.push(setTimeout(nextBackground1B, 4000));
    }
    courseyr1B.css('background-image', backgroundsyr1B[0]);
 
    /*Frosh ends here*/
 
/*Sophomore - Changing Backgrounds*/
      /*Soph starts here*/
    var courseyr2A = $('#Half2A');
    var backgroundsyr2A =
           ['url("ctePics/stockPhotos/PoeStock3.jpg")',
            'url("ctePics/stockPhotos/PoeStock1.jpg")',
            'url("ctePics/stockPhotos/PoeStock2.jpg")'];
    var currentyr2A = 0;
    function nextBackground2A() {
      courseyr2A.css('background-image', backgroundsyr2A[currentyr2A = ++currentyr2A % backgroundsyr2A.length]);
      if (activeyear == "#mainsection3") {
        timers.push(setTimeout(nextBackground2A, 4000));
      }
    }
    if (activeyear == "#mainsection3") {
      timers.push(setTimeout(nextBackground2A, 4000));
    }
    courseyr2A.css('background-image', backgroundsyr2A[0]);
 
    var courseyr2B = $('#Half2B');
    var backgroundsyr2B =
           ['url("ctePics/stockPhotos/CopeStock1.jpg")',
            'url("ctePics/stockPhotos/CopeStock2.jpg")',
            'url("ctePics/stockPhotos/CopeStock3.jpg")'];
    var currentyr2B = 0;
    function nextBackground2B() {
      courseyr2B.css(
       'background-image',
        backgroundsyr2B[currentyr2B = ++currentyr2B % backgroundsyr2B.length]
      );
      if (activeyear == "#mainsection3") {
        timers.push(setTimeout(nextBackground2B, 5000));
      }
    }
    if (activeyear == "#mainsection3") {
      timers.push(setTimeout(nextBackground2B, 5000));
    }
    courseyr2B.css('background-image', backgroundsyr2B[0]);
 
    /*Soph ends here*/
 
/*Junior - Changing Backgrounds*/
      /*Junior starts here*/
    var courseyr3A = $('#Half3A');
    var backgroundsyr3A =
           ['url("ctePics/stockPhotos/CseStock1.jpg")',
            'url("ctePics/stockPhotos/CseStock2.jpg")',
            'url("ctePics/stockPhotos/CseStock3.jpg")'];
    var currentyr3A = 0;
    function nextBackground3A() {
      courseyr3A.css('background-image', backgroundsyr3A[currentyr3A = ++currentyr3A % backgroundsyr3A.length]);
      if (activeyear == "#mainsection4") {
        timers.push(setTimeout(nextBackground3A, 4000));
      }
    }
    if (activeyear == "#mainsection4") {
      timers.push(setTimeout(nextBackground3A, 4000));
    }
    courseyr3A.css('background-image', backgroundsyr3A[0]);
 
    var courseyr3B = $('#Half3B');
    var backgroundsyr3B =
           ['url("ctePics/stockPhotos/CeaStock1.jpg")',
            'url("ctePics/stockPhotos/CeaStock2.jpg")',
            'url("ctePics/stockPhotos/CeaStock3.jpg")'];
    var currentyr3B = 0;
    function nextBackground3B() {
      courseyr3B.css(
       'background-image',
        backgroundsyr3B[currentyr3B = ++currentyr3B % backgroundsyr3B.length]
      );
      if (activeyear == "#mainsection4") {
        timers.push(setTimeout(nextBackground3B, 5000));
      }
    }
    if (activeyear == "#mainsection4") {
      timers.push(setTimeout(nextBackground3B, 4000));
    }
    courseyr3B.css('background-image', backgroundsyr3B[0]);
 
    /*Junior ends here*/
 
 
/*Senior - Changing Backgrounds*/
      /*Senior starts here*/
    var courseyr4A = $('#Half4A');
    var backgroundsyr4A =
           ['url("ctePics/stockPhotos/EddStock2.jpg")',
            'url("ctePics/stockPhotos/EddStock1.jpg")',
            'url("ctePics/stockPhotos/EddStock3.jpg")'];
    var currentyr4A = 0;
    function nextBackground4A() {
      courseyr4A.css('background-image', backgroundsyr4A[currentyr4A = ++currentyr4A % backgroundsyr4A.length]);
      if (activeyear == "#mainsection5") {
        timers.push(setTimeout(nextBackground4A, 4000));
      }
    }
    if (activeyear == "#mainsection5") {
      timers.push(setTimeout(nextBackground4A, 4000));
    }
    courseyr4A.css('background-image', backgroundsyr4A[0]);
 
    var courseyr4B = $('#Half4B');
    var backgroundsyr4B =
           ['url("ctePics/stockPhotos/ResearchStock2.jpg")',
            'url("ctePics/stockPhotos/ResearchStock3.jpg")',
            'url("ctePics/stockPhotos/ResearchStock1.jpg")'];
    var currentyr4B = 0;
    function nextBackground4B() {
      courseyr4B.css(
       'background-image',
        backgroundsyr4B[currentyr4B = ++currentyr4B % backgroundsyr4B.length]
      );
      if (activeyear == "#mainsection5") {
        timers.push(setTimeout(nextBackground4B, 5000));
      }
    }
    if (activeyear == "#mainsection5") {
      timers.push(setTimeout(nextBackground4B, 4000));
    }
    courseyr4B.css('background-image', backgroundsyr4B[0]);
 
    /*Senior ends here*/
//**********************
  } //**  setSwitchBackground
