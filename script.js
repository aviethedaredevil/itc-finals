document.querySelectorAll('.image-container img').forEach(image => {
  image.onclick = () => {
    document.querySelector('.popup-image').style.display = 'block';
    document.querySelector('.popup-image img').src =
      image.getAttribute('src');
  };
});

document.querySelector('.popup-image span').onclick = () => {
  document.querySelector('.popup-image').style.display = 'none';
};

document.addEventListener('keydown', (event) => {
if (event.key === "Escape") {
 document.querySelector('.popup-image').style.display = 'none';
  };
});

function scrollToTop() {
  window.scrollTo({
    top: 0, 
    behavior: 'smooth' 
  });
}