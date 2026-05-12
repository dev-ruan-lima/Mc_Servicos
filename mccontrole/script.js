
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });
}

const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
  items.forEach((item, i) => {
    item.style.transition = 'transform 0.5s ease-in-out';
    item.style.transform = `translateX(${(i - index) * 100}%)`;
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
}

if (items.length > 0) {
  showSlide(currentIndex);
  setInterval(nextSlide, 5000);
}

const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = form.querySelector('input[placeholder="Nome"]')?.value.trim();
    const email = form.querySelector('input[placeholder="E-mail"]')?.value.trim();
    const mensagem = form.querySelector('textarea')?.value.trim();

    if (nome && email && mensagem) {
      const texto = encodeURIComponent(
        `Olá, meu nome é ${nome}. E-mail: ${email}. Mensagem: ${mensagem}`
      );

      const whatsappUrl = `https://wa.me/5511999999999?text=${texto}`;
      window.open(whatsappUrl, '_blank');
    } else {
      alert('Por favor, preencha todos os campos antes de enviar.');
    }
  });
}

const animatedElements = document.querySelectorAll('.service, .member');

if (animatedElements.length > 0) {
  const elementObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => {
    el.classList.add('pre-animate');
    elementObserver.observe(el);
  });
}

const sections = document.querySelectorAll('section');

if (sections.length > 0) {
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.classList.add('pre-animate');
    sectionObserver.observe(section);
  });
}

setTimeout(() => {
  const popup = document.getElementById('popupAtendimento');
  if (popup) popup.style.display = 'block';
}, 5000);


const openFormBtn = document.querySelector('.btn-open-form');
const popupForm = document.getElementById('popupForm');
const closeFormBtn = document.querySelector('.close-form');

if (openFormBtn && popupForm && closeFormBtn) {
  openFormBtn.addEventListener('click', () => {
    popupForm.style.display = 'flex';
  });

  closeFormBtn.addEventListener('click', () => {
    popupForm.style.display = 'none';
  });

  popupForm.addEventListener('click', (e) => {
    if (e.target === popupForm) popupForm.style.display = 'none';
  });
}

const popupFormEl = document.getElementById('popupContactForm');

if (popupFormEl) {
  popupFormEl.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = popupFormEl.querySelector('input[placeholder="Nome"]').value.trim();
    const email = popupFormEl.querySelector('input[placeholder="E-mail"]').value.trim();
    const mensagem = popupFormEl.querySelector('textarea').value.trim();

    if (nome && email && mensagem) {
      const texto = encodeURIComponent(
        `Olá, meu nome é ${nome}. E-mail: ${email}. Mensagem: ${mensagem}`
      );

      const whatsappUrl = `https://wa.me/5511999999999?text=${texto}`;
      window.open(whatsappUrl, '_blank');

  
      document.getElementById('popupForm').style.display = 'none';
    } else {
      alert('Por favor, preencha todos os campos antes de enviar.');
    }
  });
}
