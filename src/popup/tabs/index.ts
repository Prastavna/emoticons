import { debounce } from '@helpers'
import { storageService } from '@services'
import renderEmoticons from './emoticons'
import renderGifs from './gifs'
import './tabs.scss'
import renderTextEmoticons from './text-emoticons'

const popupBody = document.querySelector('#popup .body')

const renderSearchResults = (tabName: string, searchText: string) => {
    // Check if list container already exists
    const prevListContainer = document.querySelector('#search-results')
    if (prevListContainer) {
        prevListContainer.remove()
    }
    
    if (tabName === 'emoticons') {
        popupBody.appendChild(renderEmoticons(searchText))
    } else if (tabName === 'text-emoticons') {
        popupBody.appendChild(renderTextEmoticons(searchText))
    } else if (tabName === 'gifs') {
        renderGifs(searchText).then((gifs) => {
            popupBody.appendChild(gifs)
        })
    }
}

const renderTabBody = async (tabName: string) => {
    //Adds search bar to the popup
    const searchBar = document.createElement('input')
    searchBar.type = 'text'
    searchBar.placeholder = 'Search'
    searchBar.id = 'search-bar'
    popupBody.innerHTML = ''

    let searchText = ''
    searchBar.addEventListener(
        'keyup',
        debounce(() => {
            // Accept alphanumeric characters or backspace
            searchText = searchBar.value.trim().replace(/[^a-zA-Z0-9]/g, '')
            renderSearchResults(tabName, searchText)
        }, 1000),
    )

    const historyDataList = document.createElement('datalist')
    historyDataList.id = 'history-data-list'
    searchBar.setAttribute('list', 'history-data-list')

    const history = await storageService.getStorageItem('history')
    history.forEach((item) => {
        const option = document.createElement('option')
        option.value = item
        option.innerText = item
        historyDataList.appendChild(option)
    })

    popupBody.appendChild(searchBar)
    popupBody.appendChild(historyDataList)
    renderSearchResults(tabName, searchText)
}

export default renderTabBody
