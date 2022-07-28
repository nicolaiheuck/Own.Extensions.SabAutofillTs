import { StorageConsts } from '../../consts/storage-consts';
import { EmptyProfile } from '../../models/profiles.types';
import { StorageHelper } from '../storage/storage-helper';
import { FormHelper } from '../ui/form-helper';
import { ProfilesListHelper } from '../ui/profiles-list-helper';
import { LoaderType } from './loader.types';

export const Loader: LoaderType = {
	loadFormDataAsync: async () => {
		const formData = await StorageHelper.getFormDataAsync();
		if (!formData) {
			await StorageHelper.setValueAsync(StorageConsts.formDataKey, EmptyProfile);
			FormHelper.setRandomGuid();
			return;
		}

		FormHelper.setOnChangeEventHandler(
			async () => await StorageHelper.saveFormDataAsync()
		);
		await FormHelper.loadProfileAsync(formData);
	},
	loadProfilesAsync: async () => {
		const profiles = await StorageHelper.getProfilesAsync();
		if (!profiles) return;

		ProfilesListHelper.loadProfiles(profiles);
	},
};
