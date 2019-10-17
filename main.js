let coll = document.querySelector(".collapsible");

coll.addEventListener("click", function () {
  this.classList.toggle("active");       // add class if no, delete if is
  let content = this.nextElementSibling; // div after button
  if (content.style.maxHeight) {
    content.style.maxHeight = '';        // we need changin from 0 => maxHeight (we need it for transition )
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
});


let coll2 = document.querySelector(".collapsible2");

coll2.addEventListener("click", function () {
  this.classList.toggle("active2");
  let content = this.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = '';
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
});


let coll3 = document.querySelector(".collapsible3");

coll3.addEventListener("click", function () {
  this.classList.toggle("active3");
  let content = this.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = '';
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
});


$('.sl').slick();
