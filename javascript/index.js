const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const testimonials = document.querySelectorAll('.testimonial');
const visibleCount = 4; 
let currentIndex = 0;


function updateTestimonials() {
  testimonials.forEach((testimonial, index) => {
    if (index >= currentIndex && index < currentIndex + visibleCount) {
      testimonial.style.display = 'flex'; 
    } else {
      testimonial.style.display = 'none'; 
    }
  });

  
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex + visibleCount >= testimonials.length;
}


prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateTestimonials();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex + visibleCount < testimonials.length) {
    currentIndex++;
    updateTestimonials();
  }
});
updateTestimonials();


const clientContainers = document.querySelectorAll('#client-container > div');
const clientLabels = [
  'hellafafo',
  'gjafa',
  'Lafa',
  'asfaf',
  'afassfa',
  'assfaf',
]; 
let labelIndex = 0; 


function updateClientContainers() {
  clientContainers.forEach((container, index) => {
    
    const currentLabelIndex = (labelIndex + index) % clientLabels.length;
    container.innerHTML = `<p>${clientLabels[currentLabelIndex]}</p>`; // Update container content
  });

  
  labelIndex = (labelIndex + 1) % clientLabels.length;
}


updateClientContainers();


setInterval(updateClientContainers, 5000);
