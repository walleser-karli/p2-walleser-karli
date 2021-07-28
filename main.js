// Hamburger menu functionality
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
 navbar.classList.toggle("change");
});

// Accordion menu functionality 
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
   faq.addEventListener("click", () => {
      faq.classList.toggle("active");
   });
});