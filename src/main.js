import './linked-list';

const render = () => {
  const body = document.querySelector('body');
  const text = document.createElement('p');
  text.textContent = 'Hello, World!';
  body.appendChild(text);
};
render();
