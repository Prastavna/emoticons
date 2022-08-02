import { storageService } from "@services"

const addToHistory = async (searchedText: string) => {
    const historyLen = 2
    const prevHistory = await storageService.getStorageItem('history');

    if(prevHistory.length >= historyLen) {
        prevHistory.pop()
    }

    if(prevHistory.includes(searchedText)) {
        prevHistory.splice(prevHistory.indexOf(searchedText), 1)
    }

    prevHistory.unshift(searchedText.toLowerCase())
    await storageService.setStorageItem('history', prevHistory)
}

export default addToHistory