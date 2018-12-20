/*Переменные формы обратной связи*/

var writeUsButton = document.querySelector(".contacts__button");
var writeUsPopup = document.querySelector(".modal-сontact");
var closeWriteUsPopup = writeUsPopup.querySelector(".modal-close");
var writeUsForm = writeUsPopup.querySelector(".modal-contact__form");
var writeUsName = writeUsPopup.querySelector("[name=user-name]");
var writeUsEmail = writeUsPopup.querySelector("[name=email]");
var writeUsComment = writeUsPopup.querySelector("[name=comment]");
var writeUsNameStorage = localStorage.getItem("writeUsName");
var writeUsEmailStorage = localStorage.getItem("writeUsEmail");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("writeUsName");
  storage = localStorage.getItem("writeUsEmail");
} catch (err) {
  isStorageSupport = false;
}

/*Форма обратной связи*/

writeUsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("modal-show");

  if (writeUsNameStorage) {
    writeUsName.value = writeUsNameStorage;
    writeUsEmail.focus();
  } else {
    writeUsName.focus();
  }
});

closeWriteUsPopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("modal-show");
});

writeUsForm.addEventListener("submit", function (evt) {
  if (!writeUsName.value || !writeUsEmail.value || !writeUsComment.value) {
    evt.preventDefault();
    console.log("Пожалуйста, заполните все поля");
    writeUsPopup.classList.remove("modal-error");
    writeUsPopup.offsetWidth;
    writeUsPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", writeUsName.value);
      localStorage.setItem("email", writeUsEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeUsPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      writeUsPopup.classList.remove("modal-show");
    }
  }
});

closeWriteUsPopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("modal-error");
  writeUsName.classList.remove("contact-form__item--invalid");
  writeUsEmail.classList.remove("contact-form__item--invalid");
  writeUsComment.classList.remove("contact-form__item--invalid");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    writeUsPopup.classList.remove("modal-error");
    writeUsName.classList.remove("contact-form__item--invalid");
    writeUsEmail.classList.remove("contact-form__item--invalid");
    writeUsComment.classList.remove("contact-form__item--invalid");
  }
});


writeUsForm.addEventListener("submit", function (evt) {
  if (!writeUsName.value) {
    writeUsName.classList.add("contact-form__item--invalid");
  }
  if (!writeUsEmail.value) {
    writeUsEmail.classList.add("contact-form__item--invalid");
  }
  if (!writeUsComment.value) {
    writeUsComment.classList.add("contact-form__item--invalid");
  }
});

writeUsName.addEventListener("click", function(evt) {
  if (writeUsName.classList.contains("contact-form__item--invalid")) {
      writeUsName.classList.remove("contact-form__item--invalid");
  }
});

writeUsEmail.addEventListener("click", function(evt) {
  if (writeUsEmail.classList.contains("contact-form__item--invalid")) {
      writeUsEmail.classList.remove("contact-form__item--invalid");
  }
});

writeUsComment.addEventListener("click", function(evt) {
  if (writeUsComment.classList.contains("contact-form__item--invalid")) {
      writeUsComment.classList.remove("contact-form__item--invalid");
  }
});

/*Переменные для карты*/

var map = document.querySelector(".contacts__map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

/*Карта*/
map.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});
