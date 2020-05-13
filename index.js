

$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize()

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function my() {
  var dot = document.getElementById("dot");
  var bigText = document.getElementById("big");
  var btnText = document.getElementById("myBtn");

  if ( dot.style.display === "none") {
    dot.style.display = "inline";
    btnText.innerHTML = "Read more";
    bigText.style.display = "none";
  } else {
    dot.style.display = "none";
    btnText.innerHTML = "Read less";
    bigText.style.display = "inline";
  }
}

function MY() {
  var dot1 = document.getElementById("dot1");
  var largeText = document.getElementById("large");
  var btnText = document.getElementById("myBtn");

  if ( dot1.style.display === "none") {
    dot1.style.display = "inline";
    btnText.innerHTML = "Read more";
    largeText.style.display = "none";
  } else {
    dot1.style.display = "none";
    btnText.innerHTML = "Read less";
    largeText.style.display = "inline";
  }
}