const coll = document.querySelector('.collapsible');
const coll2 = document.querySelector('.collapsible2');
const coll3 = document.querySelector('.collapsible3');
const coll4 = document.querySelector('.collapsible4');
const coll5 = document.querySelector('.collapsible5');

coll.addEventListener('click', function () {
  this.classList.toggle('active');
  const content = this.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = '';
  } else {
    content.style.maxHeight = `${content.scrollHeight}px`;
  }
});


function cliker1() {
  this.classList.toggle('active2');
  const content = this.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = '';
    if (document.body.offsetWidth <= 768) {
      this.parentElement.parentElement.querySelector('.sl__img').classList.remove('blur');
    }
  } else {
    content.style.maxHeight = `${content.scrollHeight}px`;
    if (document.body.offsetWidth <= 768) {
      this.parentElement.parentElement.querySelector('.sl__img').classList.add('blur');
    }
  }
}
coll2.addEventListener('click', cliker1);
coll3.addEventListener('click', cliker1);
coll4.addEventListener('click', cliker1);
coll5.addEventListener('click', cliker1);

$('.sl').slick();
