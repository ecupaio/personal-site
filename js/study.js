//open lightbox and populate image
document.querySelectorAll('.item-image').forEach(el => {
  el.addEventListener('click', event => { 
    const selectedImage = el.getAttribute('src');
    document.querySelector('.selected-image').setAttribute('src',selectedImage);
    document.querySelector('#image-lightbox').classList.add('active');
    document.querySelector('html').classList.add('active');
  });
});
// close lightbox 
document.querySelector('.close-lightbox').addEventListener('click', event => {
  closeLightbox();
});
window.onclick = event => {
  if (event.target === document.querySelector('#image-lightbox')) {
    closeLightbox();
  } 
};
function closeLightbox() {
  document.querySelector('#image-lightbox').classList.remove('active');
  document.querySelector('html').classList.remove('active');
}

