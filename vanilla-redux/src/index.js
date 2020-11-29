import { createStore } from 'redux';

const plus = document.getElementById('plus');
const minus = document.getElementById('minus')
const number = document.querySelector('span');

// let count = 0;

const PLUS = 'plus';
const MINUS = 'minus';

const reducer = (count = 0, { type }) => {
  switch (type) {
    case PLUS:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(reducer);

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange)

plus.addEventListener('click', () => {
  countStore.dispatch({ type: PLUS })
});

minus.addEventListener('click', () => {
  countStore.dispatch({ type: MINUS })
});