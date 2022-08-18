import { div, figure, h1, img, p, button } from '../../lib';

export default (title: string, content: string, src?: string) =>
  div(
    { class: 'card w-96 shadow-xl image-full' },
    ...[src ? figure({}, img({ src })) : null],
    div(
      { class: 'card-body' },
      h1({ class: 'card-title' }, title),
      p({}, content),
      div(
        { class: 'card-actions justify-end' },
        button({ class: 'btn btn-primary' }, 'I see')
      )
    )
  );
