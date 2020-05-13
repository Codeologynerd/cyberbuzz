var ul;
var liItems; 
var imageWidth;
var imageNumber;

function init(){

    ul = document.getElementById(‘image_slider’);
    liItems = ul.children;
    imageNumber = liItems.length;
    imageWidth = liItems[0].children[0].offsetWidth;
    // set ul’s width as the total width of all images in image slider.
    ul.style.width = parseInt(imageWidth * imageNumber) + ‘px’;
    slider(ul);
}

function slider(ul){ 
    animate({
        delay:17,
        duration: 3000,
        delta:function(p){return Math.max(0, -1 + 2 * p)},
        step:function(delta){
            ul.style.left = ‘-’ + parseInt(currentImage * imageWidth + delta * imageWidth) + ‘px’;
    },
        callback:function(){
            currentImage++;
        // if it doesn’t slied to the last image, keep sliding
            if(currentImage < imageNumber-1){
                slider(ul);
        }
       // if current image it’s the last one, it slides back to the first one
            else{
                var leftPosition = (imageNumber - 1) * imageWidth;
               // after 2 seconds, call the goBack function to slide to the first image 
                setTimeout(function(){goBack(leftPosition)},2000); 
                setTimeout(function(){slider(ul)}, 4000);
            }
        }
    });
}
function goBack(leftPosition){
    currentImage = 0; 
    var id = setInterval(function(){
        if(leftPosition >= 0){
            ul.style.left = ‘-’ + parseInt(leftPosition) + ‘px’;
            leftPosition -= imageWidth / 10;
        }
        else{
            clearInterval(id);
        } 
    }, 17);
}
function animate(opts){
    var start = new Date;
    var id = setInterval(function(){
        var timePassed = new Date - start;
        var progress = timePassed / opts.duration
        if(progress > 1){
            progress = 1;
        }
        var delta = opts.delta(progress);
        opts.step(delta);
        if (progress == 1){
            clearInterval(id);
           opts.callback();
         }
    }, opts.dalay || 17);
}
window.onload = init;
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
