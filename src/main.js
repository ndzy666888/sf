import './singly-list';
import './doubly-list';

const render = () => {
  const body = document.querySelector('body');
  const text = document.createElement('p');
  text.textContent = 'Hello, World!';
  body.appendChild(text);
};
render();
// 目标
// 手写  单链表和双链表的增删改查
