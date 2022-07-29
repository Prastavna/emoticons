import navElements from './navigation';
import './popup.scss';

let currentTab = 'emoticons';

// Adds navigation elements to the popup
const navigation = document.getElementsByTagName('nav')[0];

navElements.forEach(element => {
  const navElement = document.createElement('div');
  const navElementImg = document.createElement('img');
  navElementImg.src = element.icon;
  navElementImg.alt = element.name;
  navElementImg.title = element.name;
  
  navElement.addEventListener('click', () => {
    currentTab = element.value;
    updatePopup();
  })
  
  navElement.appendChild(navElementImg);
  navigation.appendChild(navElement);
})


// Updates the popup with the current tab
const updatePopup = () => {
  const popupHead = document.querySelector('#popup .head');
  
  popupHead.innerHTML = `<h1>${navElements.find(element => element.value === currentTab).name}</h1>`;
  const popupBody = document.querySelector('#popup .body');
  popupBody.innerHTML = `<div>${currentTab}</div>`;
}


updatePopup();