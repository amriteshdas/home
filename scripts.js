// Smooth Scroll Function
function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  }

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  




  const texts = ["Crafting Technology ", "Photographer ", "Innovating Engineering "];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

const typingTextElement = document.querySelector(".typing-text");

function typeEffect() {
  if (index < texts.length) {
    currentText = texts[index];

    if (!isDeleting && charIndex <= currentText.length) {
      typingTextElement.textContent = currentText.substring(0, charIndex);
      charIndex++;
    } else if (isDeleting && charIndex > 0) {
      typingTextElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // Pause before deleting
      return;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index++;
    }

    if (index === texts.length) {
      index = 0; // Loop back to the first text
    }

    setTimeout(typeEffect, isDeleting ? 50 : 150); // Typing and deleting speed
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

  
  