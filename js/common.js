document.addEventListener("DOMContentLoaded", function() {
  var openBtn = document.querySelector(".contacts-button");
  var closeBtn = document.querySelector(".feedback-close");

  openBtn.addEventListener("click", event => {
    document.querySelector(".feedback-container").classList.add("form-open");
  });

  closeBtn.addEventListener("click", event => {
    document.querySelector(".feedback-container").classList.remove("form-open");
  });

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
      posOne[i].style.left = "-2280px";
    }
    sliderBtnTwo.classList.remove("active-slider-button");
    sliderBtnOne.classList.remove("active-slider-button");
    sliderBtnThree.classList.add("active-slider-button");
  });

  var name = document.querySelector("[name=name]");
  var email = document.querySelector("[email=email]");
  var form = document.querySelector("form");

  form.addEventListener("submit", function(evt) {
    if (!name.value || !email.value) {
      evt.preventDefault();
    }
  });
});
