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
      $("#bs-sidebar-navbar-collapse a").click(
    function(event){
            event.preventDefault();
            var hash = this.hash;
      $('html, body').animate({
               scrollTop: $(hash).offset().top
              }, 800, function(){
                window.location.hash = hash;
            })
    });
  });

// $('.carousel').carousel({
//   interval: 2000
// })

// $('.carousel').carousel();

// function googleTranslateElementInit() {
//       new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
//       }

// $(document).ready(function(){
//     $("a").click(function(){
//         $("#describeEngineer").fadeOut();
//         $("#linee").fadeOut("slow");
//         $("#div3").fadeOut(3000);
//     });
// });

// $('a').click(function() {
//   $("#").animate({ 
//         opacity: 0.0
//         }, 1500 );
//     }); 


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

// $(document).ready(function(){
//   TriggerClick = 0;

//   $("#RightSide").click(function(){
//     if(TriggerClick==0){
//          TriggerClick=1;
//          $("div#RightSide").animate({width:'50%'}, 500);
//          $("div#LeftSide").animate({width:'50%'}, 500);
//     }else{
//          TriggerClick=0;
//          $("div#RightSide").animate({width:'100%'}, 500);
//          $("div#LeftSide").animate({width:'0%'}, 500);
//     };
//   });
// });


/*//Sam's Modal Closing
$(document).ready(function(){
  modalClick = 0;

  $("#RightSide").click(function(){
    if(modalClick==0){
         modalClick=1;
         $("div#RightSide").animate({width:'50%'}, 500);
         $("div#LeftSide").animate({width:'50%'}, 500);
    }else{
         TriggerClick=0;
         $("div#RightSide").animate({width:'100%'}, 500);
         $("div#LeftSide").animate({width:'0%'}, 500);
    };
  });
});*/

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

/*Changing Backgrounds*/
  $(function() {
    var courseyr1A = $('#Half1A');
    var backgroundsyr1A = 
           ['url(ctePics/measure.jpg) no-repeat center center fixed', 
            'url(ctePics/juniorPic.jpg)',
            'url(ctePics/motherboard.jpg) no-repeat center center fixed'];
    var currentyr1A = 0;
    function nextBackground1A() {
      courseyr1A.css(
       'background',
        backgroundsyr1A[currentyr1A = ++currentyr1A % backgroundsyr1A.length]
      );
      setTimeout(nextBackground1A, 4000);
    }
    setTimeout(nextBackground1A, 4000);
    courseyr1A.css('background', backgroundsyr1A[0]);

    var courseyr1B = $('#Half1B');
    var backgroundsyr1B = 
           ['url(ctePics/keyboard.jpg) no-repeat center center fixed', 
            'url(ctePics/spring.jpg)',
            'url(ctePics/office.jpg) no-repeat center center fixed'];
    var currentyr1B = 0;
    function nextBackground1B() {
      courseyr1B.css(
       'background',
        backgroundsyr1B[currentyr1B = ++currentyr1B % backgroundsyr1B.length]
      );
      setTimeout(nextBackground1B, 5000);
    }
    setTimeout(nextBackground1B, 5000);
    courseyr1B.css('background', backgroundsyr1B[0]);
  });