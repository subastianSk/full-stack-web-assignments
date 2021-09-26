const elBtnComment = document.querySelector('#btn-comment');
const elCommentList = document.querySelector('#comment-list');

const elCommentSection = document.querySelector('#comment-form-section');
const elCommentForm = document.querySelector('#comment-form');
const elInputUsername = document.querySelector('#input-username');
const elInputComment = document.querySelector('#input-comment');
const elBtnSubmit = document.querySelector('#btn-submit');
const elBtnCancel = document.querySelector('#btn-cancel');

// EDIT HERE
elBtnComment.addEventListener("click", function() {
  elCommentSection.classList.remove("d-none");
  elBtnComment.classList.add("d-none");
});
elBtnSubmit.addEventListener("click", function(e) {
  // prevent to re-load the page
  e.preventDefault();

  // extracting user input
  const username = elInputUsername.value;
  const comment = elInputComment.value;

  const lastCommentList = elCommentList.lastElementChild;
  const divCommentList = lastCommentList.firstElementChild;
  const clonedDiv = divCommentList.cloneNode(true);
  clonedDiv.firstElementChild.innerText = username;
  clonedDiv.childNodes[2].textContent = comment;

  // create <li>
  const newComment = document.createElement("li");
  newComment.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-start");
  newComment.append(clonedDiv);

  elCommentList.prepend(newComment);

  // toggle section-> button
  elCommentSection.classList.add("d-none");
  elBtnComment.classList.remove("d-none");

  // reset value
  elInputUsername.value = "";
  elInputComment.value = "";
});