const onClose = (event) => {
  if (
    event.target.classList.contains("backdrop") ||
    event.target.nodeName === "svg" ||
    event.target.nodeName === "BUTTON"
  ) {
    scrollUpBtn.classList.add("visible");
    document.body.classList.remove("backdrop-opened");
    backdrop.classList.remove("backdrop-is-open");
    modalWindow.classList.remove("window-is-open");
    document.body.removeEventListener("click", onClose);
  }
};

const onEscClose = (event) => {
  if (event.key === "Escape") {
    scrollUpBtn.classList.add("visible");
    document.body.classList.remove("backdrop-opened");
    backdrop.classList.remove("backdrop-is-open");
    modalWindow.classList.remove("window-is-open");
    window.removeEventListener("click", onEscClose);
  }
};

const submitHandler = async (event) => {
  try {
    event.preventDefault();
    document.body.addEventListener("click", onClose);
    window.addEventListener("keydown", onEscClose);
  } catch (error) {
    console.log(error);
    iziToast.show({
      title: "Error",
      message:
        "Unexpected error happend during submiting your review, please try again later",
      backgroundColor: "#ed3b44;",
      theme: "dark",
      color: "red",
      position: "bottomRight",
    });
  }
};

workTogetherForm.addEventListener("submit", submitHandler);

//For closing on esc and by pressing btn
