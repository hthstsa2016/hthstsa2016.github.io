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