var slides = 0;
var timer;

const slideshowSlides = document.getElementsByClassName('slideshow_item');

const slideshowContents = slideshowSlides.length;

document.getElementById('slideshow_button_next').addEventListener("click", function() {
  nextSlide();
})

document.getElementById('slideshow_button_prev').addEventListener("click", function() {
  prevSlide();
})

function change() {
  for (var slideshowSlide of slideshowSlides) {
    slideshowSlide.classList.remove('slideshow_item--visible');
    slideshowSlide.classList.add('slideshow_item--hidden');
  }
  slideshowSlides[slides].classList.add('slideshow_item--visible')
};


document.addEventListener("keydown", function(event){
  if(event.key === "ArrowRight"){
    nextSlide();
  }
});

document.addEventListener("keydown", function(event){
  if(event.key === "ArrowLeft"){
    prevSlide();
  }
});


function nextSlide() {
  if (slides === slideshowContents - 1) {
    slides = 0;
  } else {
    slides++;
  }
  change();
};

function prevSlide() {
  if (slides === 0) {
    slides = slideshowContents - 1;
  } else {
    slides--;
  }
  change();
};

//pop-up//
var closePopup = document.getElementById("popupclose");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");
var button = document.getElementById("button");
// Close Popup Event
closePopup.onclick = function() {
  overlay.style.display = 'none';
  popup.style.display = 'none';
};
// Show Overlay and Popup
button.onclick = function() {
  overlay.style.display = 'block';
  popup.style.display = 'block';
}
