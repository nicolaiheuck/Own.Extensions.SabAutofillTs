import { ElementFactory } from './element-factory';
import { ProfilesListHelperType } from './profiles-list-helper.types';

export const ProfilesListHelper: ProfilesListHelperType = {
	loadProfiles: (profiles) => {
		const table = document.getElementById('profiles-table');
		const tbody = table?.querySelector('tbody');
		if (!tbody) return;

		for (const profile of profiles) {
			console.log('Added profile to list', profile);
			const tr = ElementFactory.createProfileTr(profile);
			tbody.appendChild(tr);
		}
	},
};
