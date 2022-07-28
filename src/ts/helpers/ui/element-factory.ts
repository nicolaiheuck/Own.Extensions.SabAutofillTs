import { Profile, VisibleFieldsProfile } from '../../models/profiles.types';
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
		const values: string[] = [];
		for (const key in VisibleFieldsProfile) {
			const value = (profile as any)[key];
			values.push((value ?? '').toString());
		}
		const tdList = ElementFactory.createTdList(values);
		tdList.push(ElementFactory.createProfileEditTd(profile));
		tdList.push(ElementFactory.createProfileDeleteTd(profile));

		const tr = document.createElement('tr');
		for (const td of tdList) {
			tr.appendChild(td);
		}

		return tr;
	},
	createProfileEditTd: (profile: Profile) => {
		const td = document.createElement('td');
		const editButton = ElementFactory.createButton(
			'Rediger',
			() => FormHelper.loadProfile(profile),
			['btn', 'btn-primary']
		);
		td.appendChild(editButton);
		return td;
	},
	createProfileDeleteTd: (profile: Profile) => {
		const td = document.createElement('td');
		const editButton = ElementFactory.createButton(
			'Slet',
			async () => await StorageHelper.deleteProfileAsync(profile),
			['btn', 'btn-danger']
		);
		td.appendChild(editButton);
		return td;
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
};
