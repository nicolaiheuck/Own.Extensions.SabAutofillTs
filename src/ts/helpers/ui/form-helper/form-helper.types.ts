import { Profile } from '../../../models/profiles.types';

export type FormHelperType = {
	loadProfileAsync: (profile: Profile, preserveFormData?: Boolean) => Promise<void>;
	getProfile: () => Profile;

	getFieldValue: (id: string) => string;
	setFieldValue: (id: string, value: string) => void;

	clearFormAsync: () => Promise<void>;
	setRandomGuid: () => void;
	setOnChangeEventHandler: (eventHandler: () => Promise<void>) => void;
};
