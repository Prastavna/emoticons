import Storage from './Storage';

interface StorageService {
    getStorageData(): Promise<Storage>;
    setStorageData(data: Storage): Promise<void>;
    getStorageItem<Key extends keyof Storage>(key: Key): Promise<Storage[Key]>;
    setStorageItem<Key extends keyof Storage>(key: Key, value: Storage[Key]): Promise<void>;
    initializeStorageWithDefaults(defaults: Storage): Promise<void>;
}

export default StorageService;