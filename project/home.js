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


function openNavPagesFooter() {
  $(".lvl1 .has-children > i").on("click", function() {
    $(this)
      .parent()
      .toggleClass("open");
  });
}

function toggleDropdownsHeader() {
  $(".language.level1 > li").on("click", function() {
    $(this).toggleClass("open");
    $(this)
      .parent()
      .toggleClass("open");
  });
}

function cookies() {
  setTimeout(function() {
    if ($.cookie("cookie-popup") == null) {
      $("#myModal").modal("show");
      $("#accept").on("click", function() {
        $.cookie("cookie-popup", "2");
        $("#myModal").modal("hide");
      });
    } else {
      $("#myModal").modal("hide");
    }
  }, 10000);
}


cookies();
toggleMobileNav();
openNavPages();
openNavPagesFooter();
toggleDropdownsHeader();
});

