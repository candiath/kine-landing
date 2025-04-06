console.log('Banner script loaded');

const banner = document.getElementById('under-construction');
  const closeBtn = document.getElementById('close-banner');
  // if (!localStorage.getItem('bannerClosed')) {
    banner.classList.remove('hidden');
    setTimeout(() => {
      banner.classList.add('show');
      requestAnimationFrame(() => {
        banner.classList.add('show');
      });
    }, 1000);
  // }
closeBtn.addEventListener('click', () => {
    banner.classList.remove('show');
    localStorage.setItem('bannerClosed', 'true');
    setTimeout(() => {
      banner.classList.add('hidden');
    }, 40000); // coincide con el tiempo de la animación
  });
  