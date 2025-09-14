// Select elements
const emailPage = document.querySelector(".email-page");
const passwordPage = document.querySelector(".password-page");
const nextBtn = document.querySelector(".btn-next");
const backBtn = document.querySelector(".btn-back");

// Switch to password page
nextBtn.addEventListener("click", () => {
  emailPage.classList.remove("active");
  passwordPage.classList.add("active");
});

// Switch back to email page
backBtn.addEventListener("click", () => {
  passwordPage.classList.remove("active");
  emailPage.classList.add("active");
});
