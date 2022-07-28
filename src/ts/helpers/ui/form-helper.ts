import { Guid } from 'guid-typescript';
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
		}
	},
	clearForm: () => {
		for (const key in EmptyProfile) {
			FormHelper.setFieldValue(`profile-${key}`, '');
		}
		FormHelper.setRandomGuid();
	},
	setRandomGuid: () => {
		const guid = document.getElementById('profile-guid') as HTMLInputElement;
		if (guid) guid.value = Guid.create().toString();
	},
};
