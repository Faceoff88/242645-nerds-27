document.addEventListener("DOMContentLoaded", function() {
  var sliderBtnOne = document.getElementById("slideOne");
  var sliderBtnTwo = document.getElementById("slideTwo");
  var sliderBtnThree = document.getElementById("slideThree");

  sliderBtnOne.addEventListener("click", event => {
    var posOne = document.getElementsByClassName("feature-slider-item");
    for (var i = 0; i < posOne.length; i++) {
      posOne[i].style.left = "0";
    }
    sliderBtnThree.classList.remove("active-slider-button");
    sliderBtnTwo.classList.remove("active-slider-button");
    sliderBtnOne.classList.add("active-slider-button");
  });

  sliderBtnTwo.addEventListener("click", event => {
    var posOne = document.getElementsByClassName("feature-slider-item");
    for (var i = 0; i < posOne.length; i++) {
      posOne[i].style.left = "-1140px";
    }
    sliderBtnOne.classList.remove("active-slider-button");
    sliderBtnThree.classList.remove("active-slider-button");
    sliderBtnTwo.classList.add("active-slider-button");
  });

  sliderBtnThree.addEventListener("click", event => {
    var posOne = document.getElementsByClassName("feature-slider-item");
    for (var i = 0; i < posOne.length; i++) {
      posOne[i].style.left = "-2283px";
    }
    sliderBtnTwo.classList.remove("active-slider-button");
    sliderBtnOne.classList.remove("active-slider-button");
    sliderBtnThree.classList.add("active-slider-button");
  });
});
