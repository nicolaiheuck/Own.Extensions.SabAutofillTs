import { StorageConsts } from '../../consts/storage-consts';

const { profilesKey, formKey } = StorageConsts;

const storageHelper = {
	keyExistsAsync: async (key: any) => {
		return (await storageHelper.getValueAsync(key)) !== undefined;
	},
	setValueAsync: async (key: string | number, value: any) => {
		let data: any = {};
		data[key] = value;
		await chrome.storage.local.set(data);
	},
	getValueAsync: async (key: any) => {
		const valuePromise = new Promise((resolve, reject) => {
			chrome.storage.local.get([key], (data) => {
				if (chrome.runtime.lastError) {
					return reject(chrome.runtime.lastError);
				}
				resolve(data);
			});
		});
		const value: any = await valuePromise;
		if (value) return value[key];
		return value;
	},
	getProfilesAsync: async () => {
		return await storageHelper.getValueAsync(profilesKey);
	},
	getFormDataAsync: async () => {
		return await storageHelper.getValueAsync(formKey);
	},
};
