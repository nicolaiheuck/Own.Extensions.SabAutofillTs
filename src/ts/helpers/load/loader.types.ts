export type LoaderType = {
	loadProfilesAsync: () => Promise<void>;
	loadFormDataAsync: () => Promise<void>;
	initalizeImportExport: () => void;
};
