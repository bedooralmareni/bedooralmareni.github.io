const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');
if (menu && navigation) {
  menu.addEventListener('click', () => {
    const expanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!expanded));
    menu.textContent = expanded ? 'Menu' : 'Close';
    navigation.toggleAttribute('data-open', !expanded);
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menu.setAttribute('aria-expanded', 'false');
      menu.textContent = 'Menu';
      navigation.removeAttribute('data-open');
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navigation.hasAttribute('data-open')) {
      navigation.removeAttribute('data-open');
      menu.setAttribute('aria-expanded', 'false');
      menu.textContent = 'Menu';
      menu.focus();
    }
  });
}

const lightbox = document.querySelector('.lightbox');
if (lightbox) {
  const image = lightbox.querySelector('img');
  const caption = lightbox.querySelector('.lightbox-caption');
  document.querySelectorAll('.gallery-button').forEach((button) => {
    button.addEventListener('click', () => {
      const source = button.querySelector('img');
      image.src = source.src;
      image.alt = source.alt;
      caption.textContent = source.alt;
      lightbox.showModal();
    });
  });
  lightbox.querySelector('.close-lightbox').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      const bounds = lightbox.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
        lightbox.close();
      }
    }
  });
}
