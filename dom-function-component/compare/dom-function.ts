import { div } from '../lib/index';

export const getCardComponent = (title: string, content: string) =>
  div(
    { class: 'card' },
    div({ class: 'card-title' }, title),
    div({ class: 'card-content' }, content)
  );
