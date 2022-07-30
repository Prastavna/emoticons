/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosService from "../../../services/api";

const renderGifsAsGrid = (gifs: any) => {
    const gifsContainer = document.createElement("div");
    gifsContainer.classList.add("gifs-container");

    if(Array.isArray(gifs) && gifs.length > 0) {
        gifs.forEach((gif) => {
            const gifContainer = document.createElement("div");
            gifContainer.classList.add("gif-container");
            const gifImage = document.createElement("img");
            gifImage.src = gif.images.fixed_height.url;
            gifImage.classList.add("gif-image");
            gifContainer.appendChild(gifImage);

            gifContainer.addEventListener("click", () => {
                // Download gif
                const link = document.createElement("a");
                link.href = gif.images.original.url;
                link.download = "";
                link.click();
            })

            gifsContainer.appendChild(gifContainer);
        })
    }

    return gifsContainer;
}

const renderGifs = async (searchText: string) => {
    let gifs: any = [];

    try {
        const response = await axiosService.get(searchText ? `/search` : '/trending', {
            params: {
                q: searchText,
                limit: 10
            }
        });
        gifs = response.data.data;

        return renderGifsAsGrid(gifs);
    } catch (error) {
        console.log(error);
    }
}

export default renderGifs;