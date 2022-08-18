import 'virtual:windi.css';
import header from './components/header';
import side from './components/side';
import footer from './components/footer';
import card from './components/card';
import { div } from '../lib';

const app = div(
  { class: 'w-screen h-screen flex flex-col' },
  header(),
  div(
    {
      class: 'flex-grow flex h-full',
    },
    side(),
    div(
      { class: 'p-5' },
      card('Hello', 'I am the first card', 'https://placeimg.com/400/225/arch'),
      card('Hi', 'Nice to meet you')
    )
  ),
  footer()
);

document.querySelector('#app')!.appendChild(app);
