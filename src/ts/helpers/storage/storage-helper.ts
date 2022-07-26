import { StorageConsts } from '../../consts/storage-consts';
import { Profile } from '../../models/profiles.types';
import { FormHelper } from '../ui/form-helper/form-helper';
import { ProfilesListHelper } from '../ui/profiles-list-helper/profiles-list-helper';
import { StorageHelperType } from './storage-helper.types';

const { profilesKey, formDataKey } = StorageConsts;

export const StorageHelper: StorageHelperType = {
	keyExistsAsync: async (key: any) => {
		return (await StorageHelper.getValueAsync(key)) !== undefined;
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
		return (await StorageHelper.getValueAsync(profilesKey)) as Profile[];
	},
	getFormDataAsync: async () => {
		return (await StorageHelper.getValueAsync(formDataKey)) as Profile;
	},
	clearFormDataAsync: async () => {
		await StorageHelper.setValueAsync(formDataKey, {});
	},
	saveProfileAsync: async (profile: Profile) => {
		let profiles = await StorageHelper.getProfilesAsync();
		profiles = profiles?.filter((p) => p.guid !== profile.guid) ?? [];

		profiles.push(profile);
		StorageHelper.setValueAsync(profilesKey, profiles);
	},
	deleteProfileAsync: async (profile: Profile) => {
		let profiles = await StorageHelper.getProfilesAsync();
		if (!profiles) return;

		profiles = profiles.filter((p) => p.guid !== profile.guid);
		StorageHelper.setValueAsync(profilesKey, profiles);
		ProfilesListHelper.loadProfiles(profiles);
	},
	saveFormDataAsync: async () => {
		const formData = FormHelper.getProfile();
		await StorageHelper.setValueAsync(formDataKey, formData);
	},
};
