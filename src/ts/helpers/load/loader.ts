import { StorageHelper } from '../storage/storage-helper';
import { LoaderType } from './loader.types';

export const Loader: LoaderType = {
	loadFormDataAsync: () => {
		return StorageHelper.getFormDataAsync();
	},
	loadProfilesAsync: () => {
		return StorageHelper.getProfilesAsync();
	},
};
