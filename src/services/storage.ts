import { Storage, StorageService as IStorageService } from '@types'

class StorageService implements IStorageService {
    async initializeStorageWithDefaults(defaults: Storage): Promise<void> {
        const currentStorageData = await this.getStorageData()
        const newStorageData = Object.assign({}, defaults, currentStorageData)
        await this.setStorageData(newStorageData)
    }

    getStorageData(): Promise<Storage> {
        return new Promise((resolve, reject) => {
            chrome.storage.sync.get(null, (result) => {
                if (chrome.runtime.lastError) {
                    return reject(chrome.runtime.lastError)
                }

                return resolve(result as Storage)
            })
        })
    }
    setStorageData(data: Storage): Promise<void> {
        return new Promise((resolve, reject) => {
            chrome.storage.sync.set(data, () => {
                if (chrome.runtime.lastError) {
                    return reject(chrome.runtime.lastError)
                }

                return resolve()
            })
        })
    }

    getStorageItem<Key extends 'searchedText'>(key: Key): Promise<Storage[Key]> {
        return new Promise((resolve, reject) => {
            chrome.storage.sync.get([key], (result) => {
                if (chrome.runtime.lastError) {
                    return reject(chrome.runtime.lastError)
                }

                return resolve((result as Storage)[key])
            })
        })
    }

    setStorageItem<Key extends 'searchedText'>(key: Key, value: Storage[Key]): Promise<void> {
        return new Promise((resolve, reject) => {
            chrome.storage.sync.set({ [key]: value }, () => {
                if (chrome.runtime.lastError) {
                    return reject(chrome.runtime.lastError)
                }

                return resolve()
            })
        })
    }
}

const storageService = new StorageService()
export default storageService
