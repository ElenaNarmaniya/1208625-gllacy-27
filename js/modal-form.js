    var link = document.querySelector(".back_form");
    var popup = document.querySelector(".modal-form");
    var close = popup.querySelector(".clform");
    var data = popup.querySelector("[name=Name]");
    var email = popup.querySelector("[name=Email]");
    var text = popup.querySelector("[name=information]");
    var form = popup.querySelector("form");

    var isStorageSupport = true;
    var namestorage = "";
    var emailstorage = "";
    try {
    name_storage = localStorage.getItem("Name");
    email_storage = localStorage.getItem("Email");
    } catch (err) {
    isStorageSupport = false;
    }

    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
      if ((namestorage==true) && (emailstorage==true)) {
      data.value = namestorage;
      email.value = emailstorage;
      text.focus();
      } else {
          data.focus();
        }
    });

      close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    });

      form.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });

    form.addEventListener("submit", function (evt) {
      if (!data.value || !email.value || !text.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
      console.log("Необходимо заполнить все поля формы");
      } else {
        if (isStorageSupport) {
      localStorage.setItem("Name", data.value);
      localStorage.setItem("Email", email.value);
       }
    }
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
      evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
        }
      }
    });
