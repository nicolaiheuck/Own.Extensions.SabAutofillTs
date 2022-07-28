import { Profile } from '../../models/profiles.types';
import { StorageHelper } from '../storage/storage-helper';
import { ElementFactoryType } from './element-factory.types';
import { FormHelper } from './form-helper';

export const ElementFactory: ElementFactoryType = {
	createTd: (value: string) => {
		const td = document.createElement('td');
		td.innerText = value;
		return td;
	},
	createTdList: (values: string[]) => {
		const list: HTMLTableCellElement[] = [];
		for (const value of values) {
			const td = ElementFactory.createTd(value);
			list.push(td);
		}
		return list;
	},
	createProfileTr: (profile: Profile) => {
		const td = document.createElement('td');
		const text = document.createElement('span');
		text.innerHTML = profile.name;
		text.classList.add('mr-4');
		td.appendChild(text);
		td.appendChild(ElementFactory.createProfileEditButton(profile));
		td.appendChild(ElementFactory.createProfileDeleteButton(profile));

		const tr = document.createElement('tr');
		tr.appendChild(td);

		return tr;
	},
	createProfileEditButton: (profile: Profile) => {
		const button = ElementFactory.createButton(
			'Rediger',
			async () => await FormHelper.loadProfileAsync(profile, false),
			['btn', 'btn-primary', 'mr-2']
		);
		return button;
	},
	createProfileDeleteButton: (profile: Profile) => {
		const button = ElementFactory.createButton(
			'Slet',
			async () => await StorageHelper.deleteProfileAsync(profile),
			['btn', 'btn-danger']
		);
		return button;
	},
	createButton: (
		text: string,
		onclick?: (event: MouseEvent) => any,
		classes?: string[]
	) => {
		const button = document.createElement('button');
		button.innerText = text;
		button.onclick = onclick ?? (() => {});
		button.classList.add(...(classes ?? []));
		return button;
	},
	createOption: (text: string, value: string, selected: boolean = false) => {
		const option = document.createElement('option');
		option.value = value;
		option.text = text;
		option.selected = selected;
		return option;
	},
	createAutofillSelect: async () => {
		const select = document.createElement('select');
		const profiles = await StorageHelper.getProfilesAsync();
		select.appendChild(ElementFactory.createOption('Vælg en profil', '', true));

		for (const profile of profiles ?? []) {
			const value = profile.guid?.toString() ?? '';
			const text = profile.name;
			const option = ElementFactory.createOption(text, value);
			select.appendChild(option);
		}
		return select;
	},
};
