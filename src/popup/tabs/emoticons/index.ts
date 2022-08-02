import emoticonsList from './emoticonsList'
import './emoticons.scss'
import { addToHistory, filterList, notyf } from '@helpers'

const renderEmoticons = (searchText: string) => {
    const filteredList = filterList(emoticonsList, searchText)

    const searchResultsContainer = document.createElement('div')
    searchResultsContainer.id = 'search-results'

    filteredList.forEach((category) => {
        const categoryContainer = document.createElement('div')
        categoryContainer.classList.add('category-container')

        const categoryTitle = document.createElement('h4')
        categoryTitle.innerText = category.name
        categoryContainer.appendChild(categoryTitle)

        const categoryList = document.createElement('ul')
        categoryContainer.appendChild(categoryList)

        category.items.forEach((item) => {
            const listItem = document.createElement('li')
            listItem.innerHTML = `
                <span
                    title="${item.name}"
                >
                    ${item.value}
                </span>`
            listItem.addEventListener('click', () => {
                // Copy the value to clipboard
                addToHistory(item.name)
                navigator.clipboard.writeText(item.value)
                notyf.success(`Copied ${item.value} to clipboard`)
            })

            categoryList.appendChild(listItem)
        })
        searchResultsContainer.appendChild(categoryContainer)
    })

    // Check if list container already exists
    const prevListContainer = document.querySelector('#search-results')
    if (prevListContainer) {
        prevListContainer.remove()
    }

    return searchResultsContainer
}

export default renderEmoticons
