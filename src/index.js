import _ from 'lodash';

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
  'Kiss me, under the bearded barley',
  'Nightly, beside the green, green grass',
  'Swing, swing, swing the spinning step',
  'You wear those shoes and I will wear that dress',
  'Oh, kiss me beneath the milky twilight',
  'Lead me out on the moonlit floor',
  'Lift your open hand',
  'Strike up the band and make the fireflies dance',
  'Silver moon\'s sparkling',
  'So kiss me',
].forEach((text) => {
  const paragraph = p({ text });
  container.appendChild(paragraph);
});

document.body.appendChild(container);
