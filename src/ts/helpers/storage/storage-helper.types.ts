import { Profile } from '../../models/profiles.types';

export type StorageHelperType = {
	keyExistsAsync: (key: string) => Promise<boolean>;
	setValueAsync: (key: string, value: any) => Promise<void>;
	getValueAsync: (key: string) => Promise<any>;
	getProfilesAsync: () => Promise<Profile[] | undefined>;
	getFormDataAsync: () => Promise<Profile>;
	saveProfileAsync: (profile: Profile) => Promise<void>;
};
