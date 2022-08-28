const textarea = document.querySelector(".chatbox-message-input");
const chatboxForm = document.querySelector(".chatbox-message-form");

textarea.addEventListener("input", function () {
  let line = textarea.value.split("\n").length;

  if (textarea.rows < 6 || line < 6) {
    textarea.rows = line;
  }

  if (textarea.rows > 1) {
    chatboxForm.style.alignItems = "flex-end";
  } else {
    chatboxForm.style.alignItems = "center";
  }
});

const chatboxToggle = document.querySelector(".chatbox-toggle");
const chatboxMessage = document.querySelector(".chatbox-message-wrapper");
chatboxToggle.addEventListener("click", function () {
  chatboxMessage.classList.toggle("show");
});
const dropdownToggle = document.querySelector(
  ".chatbox-message-dropdown-toggle"
);
const dropdownMenu = document.querySelector(".chatbox-message-dropdown-menu");

dropdownToggle.addEventListener("click", function () {
  dropdownMenu.classList.toggle("show");
});

document.addEventListener("click", function (e) {
  if (
    !e.target.matches(".chatbox-message-dropdown, .chatbox-message-dropdown *")
  ) {
    dropdownMenu.classList.remove("show");
  }
});
