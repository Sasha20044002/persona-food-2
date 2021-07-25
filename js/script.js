function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

const sliderHeader = new Swiper("#slider", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

$(document).ready(function () {
  // restauramt filter
  $(".restaurant__item").click(function () {
    var value = $(this).attr("data-filter");
    var elem = $(".restaurant__block");
    if (value == "all") {
      $(elem).show("0");
    } else {
      $(elem)
        .not("." + value)
        .hide("0");
      $(elem)
        .filter("." + value)
        .show("0");
    }
  });
});

window.onscroll = scrollFunction();

function scrollFunction() {
  if (window.scrollTop > 70) {
    console.log(window.offsetTop);
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

for (let i = 0; i < document.getElementsByClassName("label-menu").length; i++) {
  const a = document.getElementsByClassName("label-menu")[i];
  a.onclick = function () {
    if (window.innerWidth <= 1024) {
      console.log(window.innerWidth);
      if (!document.getElementById("menu-mobile").checked) {
        document.getElementById("right").classList.remove("hidden");
        document.getElementById("navigation-list").classList.remove("hidden");
        document.getElementById("right").classList.add("visible");
        document.getElementById("navigation-list").classList.add("visible");
      } else if (document.getElementById("menu-mobile").checked) {
        document.getElementById("right").classList.add("hidden");
        document.getElementById("navigation-list").classList.add("hidden");
        document.getElementById("right").classList.remove("visible");
        document.getElementById("navigation-list").classList.remove("visible");
      }
    }
  };
}

window.onscroll = function () {
  if (
    window.offsetHeight >=
      document.getElementById("header").offsetHeight +
        document.getElementById("slider").offsetHeight +
        document.getElementById("popular").offsetHeight +
        document.getElementById("restaurantNav").offsetHeight +
        document.getElementById("restaurantTitle").offsetHeight ||
    window.offsetHeight <=
      document.getElementById("header").offsetHeight +
        document.getElementById("slider").offsetHeight +
        document.getElementById("popular").offsetHeight +
        document.getElementById("restaurant").offsetHeight
  ) {
    document.getElementById("restaurantNav").classList.add("fixed");
  } else {
    document.getElementById("restaurantNav").classList.remove("fixed");
  }
};

console.log(
  document.getElementById("header").offsetHeight +
    document.getElementById("slider").offsetHeight +
    document.getElementById("popular").offsetHeight +
    document.getElementById("restaurantNav").offsetHeight +
    document.getElementById("restaurantTitle").offsetHeight
);

