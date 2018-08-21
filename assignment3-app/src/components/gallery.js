import React, { Component } from 'react';
import '../stylesheets/gallery.css'

class Gallery extends React.Component {
    state = {
        slideIndex: 1
    };

showSlides(slideIndex);

// Next/previous controls
plusSlides = (n) => {
    this.setState({slideIndex: slideIndex + n});
    showSlides(slideIndex);
}

// Thumbnail image controls
currentSlide = (n) => {
    this.setState({slideIndex: n});
    showSlides(slideIndex);
}

showSlides = (n) => {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
  
    render () {
      return (
        <div>
            <div class="slideshow-container">
            <div class="mySlides fade">
            <div class="numbertext">1 / 3</div>
            <img src="images/ad_sample1.jpg" style="width:100%" />
            <div class="text">AD 1</div>
            </div>
            <div class="mySlides fade">
            <div class="numbertext">2 / 3</div>
            <img src="images/ad_sample2.jpg" style="width:100%" />
            <div class="text">AD 2</div>
            </div>
            <div class="mySlides fade"> 
            <div class="numbertext">3 / 3</div>
            <img src="images/ad_sample1.jpg" style="width:100%" />
            <div class="text">AD 3</div>
            </div>
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
            <br />
            <div style="text-align:center">
                <span class="dot" onclick="currentSlide(1)"></span> 
                <span class="dot" onclick="currentSlide(2)"></span> 
                <span class="dot" onclick="currentSlide(3)"></span> 
            </div>
        </div>
      );
    }
  }
  
  export default Gallery;