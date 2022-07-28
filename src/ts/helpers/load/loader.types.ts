import { Profile } from '../../models/profiles.types';

export type LoaderType = {
	loadProfilesAsync: () => Promise<Profile[] | null>;
	loadFormDataAsync: () => Promise<Profile | null>;
};
