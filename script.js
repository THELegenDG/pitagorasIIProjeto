let currentSlide = 0;

function changeSlide(direction) {
  const carouselImages = document.querySelector(".carousel-images");
  if (!carouselImages) {
    console.error("Elemento '.carousel-images' não encontrado.");
    return;
  }

  const totalSlides = carouselImages.children.length;


  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;


  const offset = -currentSlide * 100;
  carouselImages.style.transform = `translateX(${offset}%)`;
}


setInterval(() => {
  changeSlide(1);
}, 5000);

let currentSlideAgenda = 0;

function startCarouselAgenda() {
  const carouselImages = document.querySelector(".carousel-images-agenda");
  const progressBar = document.querySelector(".progress");

  if (!carouselImages || !progressBar) {
    console.error("Elemento do carrossel ou barra de progresso não encontrado.");
    return;
  }

  const totalSlides = carouselImages.children.length;

  // Função para atualizar o slide
  function updateSlide() {
    currentSlideAgenda = (currentSlideAgenda + 1) % totalSlides;
    const offset = -currentSlideAgenda * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;

    // Reinicia a barra de progresso
    progressBar.style.transition = "none"; // Remove a transição para reiniciar
    progressBar.style.width = "0"; // Redefine a largura
    setTimeout(() => {
      progressBar.style.transition = "width 5s linear"; // Adiciona a transição novamente
      progressBar.style.width = "100%"; // Inicia a animação
    }, 50); // Pequeno atraso para garantir o reinício
  }

  // Inicia a barra de progresso e o carrossel
  progressBar.style.width = "100%";
  setInterval(updateSlide, 5000); // Troca de slide a cada 5 segundos
}

// Inicia o carrossel ao carregar a página
document.addEventListener("DOMContentLoaded", startCarouselAgenda);