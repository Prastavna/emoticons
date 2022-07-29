import './popup.scss';

// document.getElementById('go-to-options').addEventListener('click', () => {
//   chrome.runtime.openOptionsPage();
// });

const popupContainer = document.getElementById('popup');
const sayHii = document.createElement('div');
sayHii.innerText = 'Hi!';
popupContainer.appendChild(sayHii);
