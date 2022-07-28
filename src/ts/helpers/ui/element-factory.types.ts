import { Profile } from '../../models/profiles.types';

export type ElementFactoryType = {
	createTd: (value: string) => HTMLTableCellElement;
	createTdList: (values: string[]) => HTMLTableCellElement[];
	createProfileTr: (profile: Profile) => HTMLTableRowElement;
};
