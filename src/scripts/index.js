import _ from 'lodash';
import '../styles/index.css';
import Logo from '../images/logo.png';

function index() {
  const header = document.createElement('header');
  header.innerHTML = `<h1>JavaScript 30</h1>`;
  header.classList.add('title');
  
  const siteLogo = new Image();
  siteLogo.src = Logo;
  header.appendChild(siteLogo);

  return header;
}

document.body.appendChild(index());