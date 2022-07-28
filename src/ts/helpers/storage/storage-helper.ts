import { StorageConsts } from '../../consts/storage-consts';
import { Profile } from '../../models/profiles.types';
import { StorageHelperType } from './storage-helper.types';

const { profilesKey, formKey } = StorageConsts;

export const StorageHelper: StorageHelperType = {
	keyExistsAsync: async (key: any) => {
		return (await StorageHelper.getValueAsync(key)) !== undefined;
	},
	setValueAsync: async (key: string | number, value: any) => {
		let data: any = {};
		data[key] = value;
		console.log('Saved', data);
		console.log('Into', key);
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
		return (await StorageHelper.getValueAsync(profilesKey)) as Profile[];
	},
	getFormDataAsync: async () => {
		return (await StorageHelper.getValueAsync(formKey)) as Profile;
	},
	saveProfileAsync: async (profile: Profile) => {
		let profiles = await StorageHelper.getProfilesAsync();
		if (profiles) {
			console.log('Profiles before filter', profiles);
			profiles = profiles.filter((p) => p.name !== profile.name);
		} else {
			console.log('saveProfileAsync: No profiles found');
			profiles = [] as Profile[];
		}
		profiles.push(profile);
		console.log('Saving profiles', profiles);

		StorageHelper.setValueAsync(profilesKey, profiles);
	},
};
