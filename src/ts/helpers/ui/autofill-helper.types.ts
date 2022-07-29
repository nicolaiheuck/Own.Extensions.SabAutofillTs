import { Profile } from '../../models/profiles.types';

export type AutofillHelperType = {
	fillInput: (id: string, value: string) => void;
	fillProfile: (profile: Profile) => void;
	dispatchFocusEvent: (id: string) => void;
	fillWorkshop: (workshop: string) => Promise<void>;
};
