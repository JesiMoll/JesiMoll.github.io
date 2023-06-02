document.addEventListener('DOMContentLoaded', function() {
  // DOMCONTENT funciona para dar un loaded antes de que cargue la imagenes
  const carouselImages = [
    "Imagen1.jpeg",
    "Imagen2.jpeg",
    "Imagen3.jpeg"
  ];
  const carouselImgElement = document.getElementById("carousel-img");

  let currentImageIndex = 0;

  function showImage() {
    carouselImgElement.src = carouselImages[currentImageIndex];
  }

  function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= carouselImages.length) {
      currentImageIndex = 0;
    }
    showImage();
  }

  setInterval(nextImage, 3000); // Cambiar imagen cada 3 segundos (ajustar según sea necesario)

  showImage();
});
