class LocalDB {
    constructor(name, version = 1) {
        this.name = name;
        this.version = version;
        this.db = null;
    }

    open(stores = []) {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.name, this.version);

            request.onupgradeneeded = (event) => {
                const db = event.target.result;

                for (const storeName of stores) {
                    if (!db.objectStoreNames.contains(storeName)) {
                        db.createObjectStore(storeName);
                    }
                }
            };

            request.onsuccess = (event) => {
                this.db = event.target.result;
                resolve(this);
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    }

    set(storeName, key, value) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(
                storeName,
                "readwrite"
            );

            transaction.objectStore(storeName).put(value, key);

            transaction.oncomplete = () => resolve();
            transaction.onerror = () => reject(transaction.error);
        });
    }

    get(storeName, key) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(
                storeName,
                "readonly"
            );

            const request = transaction
                .objectStore(storeName)
                .get(key);

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    delete(storeName, key) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(
                storeName,
                "readwrite"
            );

            transaction.objectStore(storeName).delete(key);

            transaction.oncomplete = () => resolve();
            transaction.onerror = () => reject(transaction.error);
        });
    }

    clear(storeName) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(
                storeName,
                "readwrite"
            );

            transaction.objectStore(storeName).clear();

            transaction.oncomplete = () => resolve();
            transaction.onerror = () => reject(transaction.error);
        });
    }

    setMany(storeName, items, keyProperty = 'key') {
        for (const item of items) {
            if (!Object.hasOwn(item, keyProperty)) {
                throw new Error(`setMany: item is missing ${keyProperty}`);
            }
        }

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(
                storeName,
                "readwrite"
            );

            const store = transaction.objectStore(storeName);

            for (const item of items) {
                store.put(item, item[keyProperty]);
            }

            transaction.oncomplete = () => resolve();
            transaction.onerror = () => reject(transaction.error);
        });
    }

    getAll(storeName) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(
                storeName,
                "readonly"
            );

            const request = transaction
                .objectStore(storeName)
                .getAll();

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }
}