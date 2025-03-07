/* Created by Oman Ryne */

let passInput = document.querySelector(".input-box input");
let rangeInput = document.querySelector(".range input");
let generateBtn = document.querySelector(".generate-btn");

let generatePass = () => {
  let exp = "";
  if (document.querySelector(".lowercase").checked) {
    exp += "abcdefghijklmnopqrstuvwxyz";
  }
  if (document.querySelector(".uppercase").checked) {
    exp += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (document.querySelector(".numbers").checked) {
    exp += "0123456789";
  }
  if (document.querySelector(".specialchar").checked) {
    exp += "!@#$%^&*()_+-={}[];<>:";
  }

  let length = rangeInput.value;

  let password = "";
  for (let i = 0; i < length; i++) {
    let j = Math.floor(Math.random() * exp.length);
    password += exp[j];
  }

  passInput.value = password;
};

generatePass();
generateBtn.addEventListener("click", generatePass);

rangeInput.addEventListener("input", () => {
  document.querySelector(".range span").textContent = rangeInput.value;
  generatePass();
});

document.querySelectorAll('input[type="checkbox"]').forEach((elem) => {
  elem.addEventListener("click", generatePass);
});

document.querySelector(".copy-btn").addEventListener("click", (e) => {
  navigator.clipboard.writeText(passInput.value).then(() => {
    e.target.innerHTML = "copied!";
    setTimeout(() => {
      e.target.innerHTML = "copy";
    }, 1000);
  });
});