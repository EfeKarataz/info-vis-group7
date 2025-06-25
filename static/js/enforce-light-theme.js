function lichtThemaAfdwingen() {
  // Zoek en verwijder de schakelknop voor themawissel (indien aanwezig)
  const themaKnop = document.querySelector('.theme-switch-button');
  if (themaKnop) {
    themaKnop.remove();
  }

  // Forceer licht thema als het nog niet actief is
  const htmlElement = document.documentElement;
  if (htmlElement.getAttribute('data-theme') !== 'light') {
    htmlElement.setAttribute('data-theme', 'light');

    // Sla voorkeur op voor toekomstige bezoeken
    localStorage.setItem('mode', 'light');
    localStorage.setItem('theme', 'light');
  }
}

// Voer het script uit zodra de pagina volledig geladen is
window.addEventListener('load', lichtThemaAfdwingen);
