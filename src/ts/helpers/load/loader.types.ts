import { Profile } from '../../models/profiles.types';

export type LoaderType = {
	loadProfilesAsync: () => Promise<Profile[]>;
	loadFormDataAsync: () => Promise<Profile>;
};
