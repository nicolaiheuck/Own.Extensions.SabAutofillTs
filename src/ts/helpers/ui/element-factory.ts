import { EmptyProfile, Profile } from '../../models/profiles.types';
import { ElementFactoryType } from './element-factory.types';

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
		for (const key in EmptyProfile) {
			const value = (profile as any)[key];
			console.log('key of profile', key);
			console.log('value of key', value);
			values.push((value ?? '').toString());
		}
		const tdList = ElementFactory.createTdList(values);

		const tr = document.createElement('tr');
		for (const td of tdList) {
			tr.appendChild(td);
		}

		return tr;
	},
};
