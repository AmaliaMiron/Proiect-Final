window.onload = function () {
  const modal = document.querySelector(".modal");
  const modalShow = document.querySelector("#modal-button");
  const modalClose = document.querySelector(".close-button");
  const parentDiv = document.querySelector(".submit-button");
  const submit = document.querySelector("#submit");

  modalShow.addEventListener("click", () => {
    modal.showModal();
    return;
  });

  modalClose.addEventListener("click", () => {
    modal.close();
  });

  const actionForm = () => {
    const nameValue = document.forms["contact-form"]["complet1"].value;
    const emailValue = document.forms["contact-form"]["complet2"].value;

    const childDiv = document.querySelector("#sendmessage");

    if (nameValue === "" && emailValue === "") {
      var nameInput = document.getElementById("name");
      nameInput.setAttribute(
        "style",
        "border: solid 2px red; border-shadow:5px;"
      );
      var emailInput = document.getElementById("email");
      emailInput.setAttribute(
        "style",
        "border: solid 2px red; border-shadow:5px;"
      );
      var messageInput = document.getElementById("message");
      messageInput.setAttribute(
        "style",
        "border: solid 2px red; border-shadow:5px;"
      );
    } else {
      var nameInput = document.getElementById("name");
      nameInput.setAttribute(
        "style",
        "border: solid 2px green; border-shadow:5px;"
      );
      var emailInput = document.getElementById("email");
      emailInput.setAttribute(
        "style",
        "border: solid 2px green; border-shadow:5px;"
      );
      var messageInput = document.getElementById("message");
      messageInput.setAttribute(
        "style",
        "border: solid 2px green; border-shadow:5px;"
      );
      childDiv.setAttribute("style", "visibility: initial;  ");
    }
  };
  submit.addEventListener("click", actionForm);
  console.log(submit);
};

window.addEventListener("load", function () {
  const addButtonElement = document.querySelector("#comment-button");
  const commentContainer = document.querySelector(".comments-posted");
  const addCommentElement = document.querySelector("#addComm");

  const create = () => {
    var commentElement = createCommentElement(addCommentElement.value);
    commentContainer.appendChild(commentElement);
  };
  if (create) {
    addButtonElement.addEventListener("click", create);
  }
});

const deleteCommentElement = (event) => {
  event.target.parentElement.parentElement.removeChild(
    event.target.parentElement
  );
};

const createCommentElement = (textareaValue) => {
  const div = document.createElement("div");
  div.classList.add("comments");
  div.innerHTML =
    "<p></p>" +
    textareaValue +
    " <button class='deleteButton' onclick=deleteCommentElement(event)>Delete</button>";
  return div;
};
