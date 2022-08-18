import { ul, li, a } from '../../lib';

export default () => {
  return ul(
    { class: 'h-full menu bg-base-100 w-56' },
    ...[...Array(10)].map((item, i) =>
      li({ class: 'hover-bordered' }, a({}, `NavItem ${i + 1}`))
    )
  );
};
