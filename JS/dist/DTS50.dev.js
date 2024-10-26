"use strict";

$(function () {
  'use strict'; // Adjust Header Height
  // var myHeader = $('.header');
  // myHeader.height($(window).height());
  // $(window).resize(function () {
  //     myHeader.height($(window).height());
  // });
  // Links Add active Class

  $('.links li a').click(function () {
    $(this).parent().addClass('active').siblings().removeClass('active');
  }); // make Items bxSlider Center
  // $('.bxslider').each(function () {
  //     $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
  // });
  // Trigger the bxSlider

  $('.bxslider').bxSlider(); //Smooth Scroll

  $('.links li a').click(function () {
    $('html, body').animate({
      scrollTop: $('#' + $(this).data('value')).offset().top
    }, 500);
  }); // Auto Slider

  setInterval(function () {
    $(".active").each(function () {
      $(this).addClass("hidden").removeClass("active");
      $(this).next().addClass("active").removeClass("hidden");

      if ($(".slider").children().last().hasClass("active")) {
        setTimeout(function () {
          $(".slider").children().first().removeClass("hidden").addClass("active");
        }, 3000);
      }
    });
  }, 3000);
  var Shuffle = window.Shuffle,
      filterVal = "";
  var myShuffle = new Shuffle(document.querySelector('.gallery'), {
    itemSelector: '.hide',
    sizer: '.sizeEle',
    buffer: 1
  });
  $('.listItem').on('click', function () {
    var $this = $(this);
    $('.filters .Selected').removeClass('Selected');
    $this.addClass('Selected');
    filterVal = $this.attr("data-filter-name");

    if (filterVal === "all") {
      filterVal = "";
    }

    galleryFiltering(myShuffle, filterVal);
  }); // Trigger Nice Scrol
  // $('html').niceScroll();
});

function galleryFiltering(galleryObj, val) {
  galleryObj.filter(val);
} // Toggel Menu


var toggleBtn = document.querySelector(".toggle-menu");
var tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {
  // Stop Propagation
  e.stopPropagation(); // Toggle Class menu-active on Button

  this.classList.toggle("menu-active"); // Toggle Class Open on Links

  tLinks.classList.toggle("open");
}; // Click anywhere Outside Menu and Toggle Button


document.addEventListener("click", function (e) {
  // console.log(e.target);
  if (e.target !== toggleBtn && e.target !== tLinks) {
    // console.log("good");
    // Check If Menu is Open
    if (tLinks.classList.contains("open")) {
      // console.log("good");
      // Toggle Class menu-active on Button
      toggleBtn.classList.toggle("menu-active"); // Toggle Class Open on Links

      tLinks.classList.toggle("open");
    }
  }
}); // Stop Propagation

tLinks.onclick = function (e) {
  e.stopPropagation();
};