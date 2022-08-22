import { Profile } from '../../../models/profiles.types';
import { StorageHelper } from '../../storage/storage-helper';
import { ProfilesListHelper } from '../profiles-list-helper';
import { ImportExportHelperType } from './import-export-helper.types';

export const ImportExportHelper: ImportExportHelperType = {
	exportAsync: async () => {
		const profiles = await StorageHelper.getProfilesAsync();
		return JSON.stringify(profiles);
	},
	importAsync: async (json: string) => {
		const newProfiles: Profile[] = JSON.parse(json);
		for (const newProfile of newProfiles) {
			await StorageHelper.saveProfileAsync(newProfile);
		}
		const profiles = await StorageHelper.getProfilesAsync();
		if (profiles) ProfilesListHelper.loadProfiles(profiles);
	},
};
//NH_TODO: Move all ui helpers into individual folders
