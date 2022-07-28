import { EmptyProfile, Profile } from '../../models/profiles.types';
import { FormHelperType } from './form-helper.types';

export const FormHelper: FormHelperType = {
	loadProfile: function (profile: Profile) {
		for (const key in profile) {
			this.setFieldValue(`profile-${key}`, (profile as any)[key]);
		}
	},
	getProfile: function () {
		const profile = {} as Profile;
		for (const key in EmptyProfile) {
			(profile as any)[key] = this.getFieldValue(`profile-${key}`);
		}
		return profile;
	},
	getFieldValue(id: string) {
		const field = document.getElementById(id) as HTMLInputElement;
		return field?.value;
	},
	setFieldValue(id: string, value: string) {
		const field = document.getElementById(id) as HTMLInputElement;
		if (field === undefined || field === null) return;

		if (field instanceof HTMLInputElement) {
			field.value = value;
		} else {
			console.debug(typeof field);
		}
	},
};
