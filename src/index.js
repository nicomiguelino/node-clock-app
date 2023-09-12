import { getLocaleByAlpha2 } from 'country-locale-map';

function h3({ text }) {
  const element = document.createElement('h3');
  element.innerHTML = text;

  return element;
}

function p({ text }) {
  const element = document.createElement('p');
  element.innerHTML = text;

  return element;
}

const container = document.createElement('div');
const header = h3({ text: 'Hello, Galaxy' });

container.appendChild(header);

[
  getLocaleByAlpha2('US'),
  getLocaleByAlpha2('FR'),
  getLocaleByAlpha2('ES'),
].forEach((locale) => {
  const paragraph = p({ text: locale });
  container.appendChild(paragraph);
});

document.body.appendChild(container);
