$(document).ready(function(){
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
