/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosService } from '@services'
import './gifs.scss'

const renderGifsAsGrid = (gifs: any) => {
    let gifsContainer = document.querySelector('.gifs-container')
    if (gifsContainer) {
        gifsContainer.remove()
    }

    gifsContainer = document.createElement('div')
    gifsContainer.classList.add('gifs-container')

    if (Array.isArray(gifs) && gifs.length > 0) {
        gifs.forEach((gif) => {
            const gifContainer = document.createElement('div')
            gifContainer.classList.add('gif-container')
            const gifImage = document.createElement('img')
            gifImage.src = gif.images.preview_gif.url
            gifContainer.appendChild(gifImage)

            gifContainer.addEventListener('click', () => {
                // Download gif
                const link = document.createElement('a')
                link.href = gif.images.original.url
                link.download = ''
                link.click()
            })

            gifsContainer.appendChild(gifContainer)
        })
    }

    return gifsContainer
}

const renderGifs = async (searchText: string) => {
    let gifs: any = []

    try {
        const response = await axiosService.get(searchText ? `/search?q=${searchText}` : '/trending', {
            params: {
                limit: 30,
            },
        })
        gifs = response.data.data

        return renderGifsAsGrid(gifs)
    } catch (error) {
        console.log(error)
    }
}

export default renderGifs
