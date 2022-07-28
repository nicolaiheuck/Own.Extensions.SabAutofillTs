import { Profile } from '../../models/profiles.types';

export type ElementFactoryType = {
	createTd: (value: string) => HTMLTableCellElement;
	createTdList: (values: string[]) => HTMLTableCellElement[];
	createProfileTr: (profile: Profile) => HTMLTableRowElement;

	createProfileEditTd: (profile: Profile) => HTMLTableCellElement;
	createProfileDeleteTd: (profile: Profile) => HTMLTableCellElement;
	createButton: (
		text: string,
		onclick?: () => void,
		classes?: string[]
	) => HTMLButtonElement;
};
