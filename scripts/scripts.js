// Navigation Menu Toggle
const navOpen = document.querySelector('.fa-bars');
const navClosed = document.querySelector('.fa-x');
const nav = document.querySelector('.nav-menu');

// Check if elements exist before adding event listeners
if (navOpen && navClosed && nav) {
    navOpen.addEventListener('click', () => {
        nav.style.right = "0";
        navOpen.style.display = "none"; // Hide the open button
        navClosed.style.display = "block"; // Show the close button
    });

    navClosed.addEventListener('click', () => {
        nav.style.right = "-20rem";
        navOpen.style.display = "block"; // Show the open button
        navClosed.style.display = "none"; // Hide the close button
    });
}

// Lightbox Functionality
function openLightbox(image) {
    console.log("Lightbox function triggered"); // Debug log
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    if (lightbox && lightboxImg) {
        lightbox.style.display = "flex";
        lightboxImg.src = image.src; // Use the clicked image's source
    }
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");

    if (lightbox) {
        lightbox.style.display = "none";
    }
}

document.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG' && event.target.parentElement.classList.contains('image-placer')) {
        openLightbox(event.target);
    }
});
// button 
const btn = document.querySelector('.mouse-cursor-gradient-tracking');

btn.addEventListener('mousemove', e => {
  const rect = e.target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  btn.style.setProperty('--x', x + 'px');
  btn.style.setProperty('--y', y + 'px');
});

document.body.addEventListener('mousemove', e => {
    const rect = document.body.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
  
    document.body.style.setProperty('--x', x + 'px');
    document.body.style.setProperty('--y', y + 'px');
  });

  
