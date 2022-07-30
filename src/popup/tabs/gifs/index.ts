import axiosService from "../../../services/api";

const renderGifs = (searchText: string) => {
    const temp = document.createElement("div");
    temp.innerHTML = `
    GIFSD
    `

    axiosService.get('/trending').then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })

    return temp;
}

export default renderGifs;