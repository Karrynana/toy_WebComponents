import { footer, div, span, a } from '../../lib';

const linkGroupMap = {
  Services: ['Branding', 'Design', 'Marketing', 'Advertisement'],
  About: ['Careers', 'Blog', 'Contact', 'Jobs'],
  Legal: ['Terms', 'Privacy', 'Policy'],
};

export default () =>
  footer(
    { class: 'footer p-10 bg-neutral text-neutral-content' },
    ...Object.keys(linkGroupMap).map((linkGroupKey) =>
      div(
        {},
        span({ class: 'footer-title' }, linkGroupKey),
        ...linkGroupMap[linkGroupKey].map((link) =>
          a({ class: 'link link-hover' }, link)
        )
      )
    )
  );
