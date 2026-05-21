const CARD_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae ultricies justo. Integer non lectus at sapien feugiat volutpat.`;

const DEFAULT_CARDS_COUNT = 64;

const cardsContainer = document.querySelector('.cards');
const countButtons = document.querySelectorAll('[data-cards-count]');

function createCard(index) {
  const card = document.createElement('article');
  card.className = 'card';
  card.setAttribute('aria-label', `Card ${index}`);

  const text = document.createElement('p');
  text.className = 'card__text';
  text.textContent = CARD_TEXT;

  card.append(text);

  return card;
}

function renderCards(count) {
  if (!cardsContainer) {
    return;
  }

  const cards = Array.from({ length: count }, (_, index) =>
    createCard(index + 1),
  );

  cardsContainer.replaceChildren(...cards);
}

function setActiveButton(activeButton) {
  countButtons.forEach((button) => {
    button.classList.toggle('is-active', button === activeButton);
  });
}

countButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const cardsCount = Number(button.dataset.cardsCount);

    if (!Number.isInteger(cardsCount) || cardsCount <= 0) {
      return;
    }

    renderCards(cardsCount);
    setActiveButton(button);
  });
});

renderCards(DEFAULT_CARDS_COUNT);
