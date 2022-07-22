//NH_TODO: Replace all any's with models when they are made
export type StorageHelperType = {
    keyExistsAsync: (key: string) => Promise<boolean>;
    setValueAsync: (key: string, value: any) => Promise<void>;
    getValueAsync: (key: string) => Promise<any>;
    getProfilesAsync: () => Promise<any>;
    getFormDataAsync: () => Promise<any>;
}