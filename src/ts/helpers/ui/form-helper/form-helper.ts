import { Guid } from 'guid-typescript';
import { EmptyProfile, Profile } from '../../../models/profiles.types';
import { StorageHelper } from '../../storage/storage-helper';
import { FormHelperType } from './form-helper.types';
import { WorkshopSelectHelper } from '../workshop-select-helper/workshop-select-helper';

export const FormHelper: FormHelperType = {
	loadProfileAsync: async function (
		profile: Profile,
		preserveFormData: Boolean = true
	) {
		for (const key in profile) {
			this.setFieldValue(`profile-${key}`, (profile as any)[key]);
		}

		if (preserveFormData === false) await StorageHelper.clearFormDataAsync();
		const submit = document.getElementById('form-submit');
		if (submit) submit.innerText = 'Gem';
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
		const field = document.getElementById(id);
		if (field === undefined || field === null) return;

		if (field instanceof HTMLInputElement) {
			field.value = value;
		} else if (field instanceof HTMLSelectElement) {
			WorkshopSelectHelper.clearCurrentSelection(field);
			WorkshopSelectHelper.selectByValue(field, value);
		}
	},
	clearFormAsync: async () => {
		await StorageHelper.clearFormDataAsync();
		for (const key in EmptyProfile) {
			FormHelper.setFieldValue(`profile-${key}`, '');
		}
		FormHelper.setRandomGuid();
		const submit = document.getElementById('form-submit');
		if (submit) submit.innerText = 'Opret';
	},
	setRandomGuid: () => {
		const guid = document.getElementById('profile-guid') as HTMLInputElement;
		if (guid) guid.value = Guid.create().toString();
	},
	setOnChangeEventHandler: (eventHandler: () => Promise<void>) => {
		const form = document.getElementById('new-profile-form');
		if (!form) return;
		const inputs = Array.from(form.querySelectorAll('input,select')) as (
			| HTMLInputElement
			| HTMLSelectElement
		)[];

		for (const input of inputs) {
			input.onchange = eventHandler;
		}
	},
};
