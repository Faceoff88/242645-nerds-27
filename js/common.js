document.addEventListener("DOMContentLoaded", function() {
  var openBtn = document.querySelector(".contacts-button");
  var closeBtn = document.querySelector(".feedback-close");

  openBtn.addEventListener("click", event => {
    event.preventDefault();
    document.querySelector(".feedback-container").classList.add("form-open");
    function ever() {
      document
        .querySelector(".feedback-container")
        .classList.remove("form-open");
    }
    setTimeout(ever, 900);
    document.querySelector(".feedback-container").classList.add("form-ever");
  });

  closeBtn.addEventListener("click", event => {
    document.querySelector(".feedback-container").classList.remove("form-ever");
  });

  var name = document.querySelector("[name=name]");
  var email = document.querySelector("[name=email]");
  var text = document.querySelector("[name=text]");
  var form = document.querySelector(".feedback");

  form.addEventListener("submit", function(evt) {
    if (!name.value || !email.value || !text.value.trim()) {
      evt.preventDefault();
      document.querySelector(".feedback-container").classList.add("inv-form");
      if (!name.value) {
        name.classList.add("invalid");
      } else {
        name.classList.remove("invalid");
      }
      if (!email.value) {
        email.classList.add("invalid");
      } else {
        email.classList.remove("invalid");
      }
      if (!text.value.trim()) {
        text.classList.add("invalid");
      } else {
        text.classList.remove("invalid");
      }
    }

    function del() {
      document
        .querySelector(".feedback-container")
        .classList.remove("inv-form");
    }
    setTimeout(del, 1000);
  });
});
