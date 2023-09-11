import _ from 'lodash';

function component() {
  const element = document.createElement('h3');
  element.innerHTML = 'Weeeeee!';
  return element;
}

document.body.appendChild(component());
