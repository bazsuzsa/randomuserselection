import get from './utils/getElement.js';
import getUser from './utils/fetchUser.js';

const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const btn = get('.btn');
const btns = [...document.querySelectorAll('.icon')];

const showUser = () => {
  //get user from API
  getUser().then((data) => console.log(data));
  //display user
};
window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
