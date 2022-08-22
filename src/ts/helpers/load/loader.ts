import { StorageConsts } from '../../consts/storage-consts';
import { EmptyProfile } from '../../models/profiles.types';
import { StorageHelper } from '../storage/storage-helper';
import { EventHandlers } from '../ui/event-handlers/event-handlers';
import { FormHelper } from '../ui/form-helper/form-helper';
import { ProfilesListHelper } from '../ui/profiles-list-helper/profiles-list-helper';
import { LoaderType } from './loader.types';

export const Loader: LoaderType = {
	loadFormDataAsync: async () => {
		const formData = await StorageHelper.getFormDataAsync();
		if (!formData) {
			await StorageHelper.setValueAsync(StorageConsts.formDataKey, EmptyProfile);
			FormHelper.setRandomGuid();
			return;
		}
		if (!formData.guid) {
			FormHelper.setRandomGuid();
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
	initalizeImportExport: () => {
		const exportButton = document.getElementById('export') as HTMLButtonElement;
		const importButton = document.getElementById('import') as HTMLButtonElement;
		const importFileUpload = document.getElementById(
			'import-file-upload'
		) as HTMLInputElement;

		if (!importButton || !exportButton || !importFileUpload) return;

		exportButton.onclick = EventHandlers.onExportClick;
		importButton.onclick = EventHandlers.onImportClick;
		importFileUpload.onchange = EventHandlers.onImportFileLoad;
	},
};
