
document.addEventListener('DOMContentLoaded', function() {
  const btnMenu = document.getElementById('btn-menu');
  const navContent = document.getElementById('main-navigation');
  const navLinks = document.querySelectorAll('.navigation a');

  // Menu burger
  btnMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    const open = navContent.classList.toggle('active');
    btnMenu.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navContent.classList.remove('active');
      btnMenu.setAttribute('aria-expanded','false');
    });
  });

  document.addEventListener('click', function(e) {
    if (!navContent.contains(e.target) && e.target !== btnMenu) {
      navContent.classList.remove('active');
      btnMenu.setAttribute('aria-expanded','false');
    }
  });

  document.addEventListener('keydown', function(e){
    if(e.key==='Escape' && navContent.classList.contains('active')){
      navContent.classList.remove('active');
      btnMenu.setAttribute('aria-expanded','false');
      btnMenu.focus();
    }
  });

  window.addEventListener('resize', function() {
    if(window.innerWidth>768){
      navContent.classList.remove('active');
      btnMenu.setAttribute('aria-expanded','false');
    }
  });

  // Floating CTA: open reservation page or WhatsApp
  (function initFloatingCTA(){
    const container = document.createElement('div');
    container.className = 'floating-cta';
    container.innerHTML = `
      <a class="cta-book" href="reservation.html" aria-label="Réserver une table">Réserver <i class="fas fa-calendar-check"></i></a>
      <a class="cta-whatsapp" href="https://wa.me/16475551234?text=Bonjour%20La%20Maison%20Verde%2C%20je%20souhaite%20réserver" aria-label="Contact WhatsApp">WhatsApp <i class="fab fa-whatsapp"></i></a>
    `;
    document.body.appendChild(container);
  })();

  // Lightbox for images
  (function initLightbox(){
    const lightbox = document.getElementById('lightbox');
    if(!lightbox) return;
    const img = lightbox.querySelector('.lightbox-img');
    const caption = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    function open(src, alt){
      img.src = src;
      img.alt = alt || '';
      caption.textContent = alt || '';
      lightbox.setAttribute('aria-hidden','false');
      document.body.style.overflow = 'hidden';
    }
    function close(){
      lightbox.setAttribute('aria-hidden','true');
      img.src = '';
      document.body.style.overflow = '';
    }

    document.querySelectorAll('.signature-card img').forEach(el=>{
      el.style.cursor = 'zoom-in';
      el.addEventListener('click', function(e){
        open(this.src, this.alt);
      });
    });

    closeBtn.addEventListener('click', close);
    lightbox.addEventListener('click', function(e){ if(e.target === lightbox) close(); });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape') close(); });
  })();
});

document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('[data-animation="fadeInUp"]');

    if (serviceCards.length === 0) return;

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry, index) {
            if (entry.isIntersecting) {
                setTimeout(function() {
                    entry.target.classList.add('visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    serviceCards.forEach(card => {
        observer.observe(card);
    });
});

