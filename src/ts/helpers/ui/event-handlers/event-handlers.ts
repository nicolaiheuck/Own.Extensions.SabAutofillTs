import { ImportExportHelper } from '../import-export/import-export-helper';
import { EventHandlersType } from './event-handlers.types';

export const EventHandlers: EventHandlersType = {
	onExportClick: async () => {
		const exportedJson = await ImportExportHelper.exportAsync();
		var blob = new Blob([exportedJson], {
			type: 'application/json',
		});
		var url = URL.createObjectURL(blob);
		await chrome.downloads.download({
			url: url,
			filename: 'autofill-profiles.json',
		});
	},
	onImportClick: async () => {
		const importFileUpload = document.getElementById(
			'import-file-upload'
		) as HTMLInputElement;

		importFileUpload?.click();
	},
	onImportFileLoad: async (e) => {
		if (!e) return;
		const input = e.target as HTMLInputElement;
		if (!input.files || input.files.length === 0) return;

		const file = input.files[0];
		const reader = new FileReader();

		reader.onload = async () => {
			const result = reader.result as string | null;
			if (result) await ImportExportHelper.importAsync(result);
		};

		reader.readAsText(file);
	},
};
