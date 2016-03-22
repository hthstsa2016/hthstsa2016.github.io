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

  $(document).ready(function(){
      htmlbodyHeightUpdate();
      $( window ).resize(function() {
  htmlbodyHeightUpdate();
      });
      $( window ).scroll(function() {
        height2 = $('.main').height();
        htmlbodyHeightUpdate();
      });

      $('#bs-sidebar-navbar-collapse [data-toggle="tooltip"]').tooltip({placement: "right"});
      $('body').scrollspy({target: "#bs-sidebar-navbar-collapse"})
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

$('.carousel').carousel();

function googleTranslateElementInit() {
      new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
      }
