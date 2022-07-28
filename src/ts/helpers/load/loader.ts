import { LoaderType } from './loader.types';

export const Loader: LoaderType = {
	loadFormDataAsync: () => {
		return new Promise<null>((resolve) => resolve(null));
	},
	loadProfilesAsync: () => {
		return new Promise<null>((resolve) => resolve(null));
	},
};
