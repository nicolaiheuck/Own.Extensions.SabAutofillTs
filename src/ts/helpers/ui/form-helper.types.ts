import { Profile } from '../../models/profiles.types';

export type FormHelperType = {
	loadProfile: (profile: Profile) => void;
	getProfile: () => Profile;

	getFieldValue: (id: string) => string;
	setFieldValue: (id: string, value: string) => void;

	clearForm: () => void;
	setRandomGuid: () => void;
};
