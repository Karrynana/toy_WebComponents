interface Attributes {
  id: string;
  class: string;
  style: string;
}

interface SVGAttributes {
  xmlns: string;
  fill: string;
  viewBox: string;
}

interface PathAttributes {
  'stroke-linecap': string;
  'stroke-linejoin': string;
  'stroke-width': string;
  d: string;
}

type ChildElement =
  | SVGPathElement
  | HTMLElement
  | SVGSVGElement
  | string
  | null;

const DOMFactory = <ReturnElement>(
  tag: string,
  attrs: Partial<Attributes>,
  children?: ChildElement[],
  isSVG: boolean = false
): ReturnElement => {
  const el = isSVG
    ? document.createElementNS('http://www.w3.org/2000/svg', tag)
    : document.createElement(tag);

  for (const key in attrs) {
    if (attrs.hasOwnProperty(key)) {
      el.setAttribute(key, attrs[key]);
    }
  }
  if (children) {
    children.forEach((child) => {
      if (!child) {
        return;
      }
      if (typeof child === 'string') {
        el.appendChild(document.createTextNode(child));
      } else {
        el.appendChild(child);
      }
    });
  }
  return el as unknown as ReturnElement;
};

export const div = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLDivElement => DOMFactory('div', { ...attributes }, children);

export const br = (attributes?: Partial<Attributes>): HTMLBRElement =>
  DOMFactory('br', { ...attributes });

export const h1 = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLHeadingElement => DOMFactory('h1', { ...attributes }, children);

export const h2 = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLHeadingElement => DOMFactory('h2', { ...attributes }, children);

export const h3 = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLHeadingElement => DOMFactory('h3', { ...attributes }, children);

export const h4 = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLHeadingElement => DOMFactory('h4', { ...attributes }, children);

export const h5 = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLHeadingElement => DOMFactory('h5', { ...attributes }, children);

export const h6 = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLHeadingElement => DOMFactory('h6', { ...attributes }, children);

export const p = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLParagraphElement => DOMFactory('p', { ...attributes }, children);

export const a = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLAnchorElement => DOMFactory('a', { ...attributes }, children);

export const img = (
  attributes?: Partial<
    Attributes & {
      src: string;
      alt: string;
    }
  >,
  ...children: ChildElement[]
): HTMLImageElement => DOMFactory('img', { ...attributes }, children);

export const input = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLInputElement => DOMFactory('input', { ...attributes }, children);

export const button = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLButtonElement => DOMFactory('button', { ...attributes }, children);

export const select = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLSelectElement => DOMFactory('select', { ...attributes }, children);

export const option = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLOptionElement => DOMFactory('option', { ...attributes }, children);

export const textarea = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLTextAreaElement => DOMFactory('textarea', { ...attributes }, children);

export const label = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLLabelElement => DOMFactory('label', { ...attributes }, children);

export const ul = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLUListElement => DOMFactory('ul', { ...attributes }, children);

export const li = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLLIElement => DOMFactory('li', { ...attributes }, children);

export const table = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLTableElement => DOMFactory('table', { ...attributes }, children);

export const thead = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLTableSectionElement => DOMFactory('thead', { ...attributes }, children);

export const tbody = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLTableSectionElement => DOMFactory('tbody', { ...attributes }, children);

export const tfoot = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLTableSectionElement => DOMFactory('tfoot', { ...attributes }, children);

export const tr = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLTableRowElement => DOMFactory('tr', { ...attributes }, children);

export const td = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLTableCellElement => DOMFactory('td', { ...attributes }, children);

export const th = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLTableCellElement => DOMFactory('th', { ...attributes }, children);

export const form = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLFormElement => DOMFactory('form', { ...attributes }, children);

export const fieldset = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLFieldSetElement => DOMFactory('fieldset', { ...attributes }, children);

export const legend = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLLegendElement => DOMFactory('legend', { ...attributes }, children);

export const optgroup = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLOptGroupElement => DOMFactory('optgroup', { ...attributes }, children);

export const figure = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLElement => DOMFactory('figure', { ...attributes }, children);

export const svg = (
  attributes?: Partial<Attributes & SVGAttributes>,
  ...children: ChildElement[]
): SVGSVGElement => DOMFactory('svg', { ...attributes }, children, true);

export const path = (
  attributes?: Partial<Attributes & PathAttributes>
): SVGPathElement => DOMFactory('path', { ...attributes }, undefined, true);

export const span = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLSpanElement => DOMFactory('span', { ...attributes }, children);

export const footer = (
  attributes?: Partial<Attributes>,
  ...children: ChildElement[]
): HTMLElement => DOMFactory('footer', { ...attributes }, children);
