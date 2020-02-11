var openBtn = document.querySelector(".contacts-button");
var closeBtn = document.querySelector(".feedback-close");

openBtn.addEventListener("click", event => {
  document.querySelector(".feedback-container").classList.add("form-open");
});

closeBtn.addEventListener("click", event => {
  document.querySelector(".feedback-container").classList.remove("form-open");
});
