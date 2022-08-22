import { ElementFactory } from '../element-factory/element-factory';
import { ProfilesListHelperType } from './profiles-list-helper.types';

export const ProfilesListHelper: ProfilesListHelperType = {
	loadProfiles: (profiles) => {
		const table = document.getElementById('profiles-table');
		const tbody = table?.querySelector('tbody');
		if (!tbody) return;
		tbody.innerHTML = '';

		for (const profile of profiles) {
			const tr = ElementFactory.createProfileTr(profile);
			tbody.appendChild(tr);
		}
	},
};
