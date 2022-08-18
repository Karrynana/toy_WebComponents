export const getCardComponent = (
  title: string,
  content: string
): HTMLElement => {
  const card = document.createElement('div');
  card.classList.add('card');
  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header');
  cardHeader.innerText = title;
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  cardBody.innerText = content;
  card.appendChild(cardHeader);
  card.appendChild(cardBody);
  return card;
};
