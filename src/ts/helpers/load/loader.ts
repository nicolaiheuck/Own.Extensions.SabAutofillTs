import { StorageHelper } from '../storage/storage-helper';
import { FormHelper } from '../ui/form-helper';
import { ProfilesListHelper } from '../ui/profiles-list-helper';
import { LoaderType } from './loader.types';

export const Loader: LoaderType = {
	loadFormDataAsync: async () => {
		const formData = await StorageHelper.getFormDataAsync();
		if (!formData) {
			FormHelper.setRandomGuid();
			return;
		}

		FormHelper.loadProfile(formData);
	},
	loadProfilesAsync: async () => {
		const profiles = await StorageHelper.getProfilesAsync();
		if (!profiles) return;

		ProfilesListHelper.loadProfiles(profiles);
	},
};
