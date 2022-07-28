import { Profile } from '../../models/profiles.types';

export type ProfilesListHelperType = {
	loadProfiles: (profiles: Profile[]) => void;
};
