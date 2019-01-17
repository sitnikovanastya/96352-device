/*Переменные формы обратной связи*/

var writeUsButton = document.querySelector(".contacts__button");
var writeUsPopup = document.querySelector(".modal-сontact");
var closeWriteUsPopup = writeUsPopup.querySelector(".modal-close");
var writeUsForm = writeUsPopup.querySelector(".modal-contact__form");
var writeUsName = writeUsPopup.querySelector("[name=user-name]");
var writeUsEmail = writeUsPopup.querySelector("[name=email]");
var writeUsComment = writeUsPopup.querySelector("[name=comment]");

if (localStorage) {
  var writeUsNameStorage = localStorage.getItem("name");
}

if (localStorage) {
  var writeUsEmailStorage = localStorage.getItem("email");
}

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

/*Форма обратной связи*/

writeUsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("modal-show");
  writeUsName.focus();
  if (writeUsNameStorage) {
    writeUsName.value = writeUsNameStorage;
  }
  if (writeUsEmailStorage) {
    writeUsEmail.value = writeUsEmailStorage;
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

/*Переменные для слайдера*/

var switchers = document.querySelectorAll(".switchers__button");
var slides = document.querySelectorAll(".slider");

/*Слайдер главный*/

for (var i = 0; i < switchers.length; i++) {
  switchers[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    for (var j = 0; j < slides.length; j++) {
      switchers[j].classList.remove("active-switchers");
      evt.currentTarget.classList.add("active-switchers");
      slides[j].classList.remove("active");
      if (evt.currentTarget === switchers[j]) {
        slides[j].classList.add("active");
      }
    }
  });
}

/*Слайдер сервис*/

var serviceButton = document.querySelectorAll(".service-button");
var serviceSlides = document.querySelectorAll(".service__slider");

for (var i = 0; i < serviceButton.length; i++) {
  serviceButton[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    for (var j = 0; j < serviceButton.length; j++) {
      serviceButton[j].classList.remove("button-active");
      evt.currentTarget.classList.add("button-active");
      serviceSlides[j].classList.remove("service-active");
      if (evt.currentTarget === serviceButton[j]) {
        serviceSlides[j].classList.add("service-active");
      }
    }
  });
}
