//slider
$(document).ready(function() {

    $('.slider').slick({
        dots: true,
       
    });


function toggleMobileNav() {
    $(".menu-mobile").hide();
    $(".toggle-nav").on("click", function() {
      $(this).toggleClass("open");
      $(".menu-mobile").slideToggle();
    });
  }
  
  function openNavPages() {
    $(".menu-mobile .has-children > i").on("click", function() {
      $(this)
        .parent()
        .toggleClass("open");
    });
  }





 

  toggleMobileNav();
  openNavPages();
  });