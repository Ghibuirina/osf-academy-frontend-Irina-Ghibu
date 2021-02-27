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


function displayFeaturedProducts(data) {
  var featuredContainer = document.querySelector(".products--featured .row");

  data.forEach(item => {
    var div = document.createElement("div");

    div.classList.add("item");

    div.innerHTML = `<div class="item_wrap">
  <a href="../pages/product.html"><img src="/images/${item.image}.png" alt="${item.name}"></a>
      <div class="item_caption">
      <span class="item-title"><a href="../pages/product.html">${item.name}</a></span>
      <span class="description">${item.description}</span>
      </div>
      </div>`;

    if (featuredContainer) {
      featuredContainer.appendChild(div);
    }
  });

  $(".products--featured .row ").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    appendArrows: ".slider-nav",
    nextArrow: '<button class="fas fa-angle-right arrow-right"></button>',
    prevArrow: '<button class="fas fa-angle-left arrow-left"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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

