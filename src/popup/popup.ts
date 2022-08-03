import navElements from './navigation'
import './popup.scss'
import renderTabBody from './tabs'

let currentTab = 'emoticons'

// Adds navigation elements to the popup
const navigation = document.getElementsByTagName('nav')[0]

const setActiveTab = () => {
    navigation.innerHTML = ''
    
    navElements.forEach((element) => {
        const navElement = document.createElement('div')
        const navElementImg = document.createElement('img')
        navElementImg.src = element.icon
        navElementImg.alt = element.name
        navElementImg.title = element.name
    
        if(element.value === currentTab) {
            navElement.classList.add('active-tab')
        }

        navElement.addEventListener('click', () => {
            currentTab = element.value
            updatePopup()
        })
    
        navElement.appendChild(navElementImg)
        navigation.appendChild(navElement)
    })
}

// Updates the popup with the current tab
const updatePopup = () => {
    const popupHead = document.querySelector('#popup .head')

    setActiveTab()
    popupHead.innerHTML = `<h2>${navElements.find((element) => element.value === currentTab).name}</h2>`

    renderTabBody(currentTab)
}

updatePopup()
