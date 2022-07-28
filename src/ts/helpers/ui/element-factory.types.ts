import { Profile } from '../../models/profiles.types';

export type ElementFactoryType = {
	createTd: (value: string) => HTMLTableCellElement;
	createTdList: (values: string[]) => HTMLTableCellElement[];
	createProfileTr: (profile: Profile) => HTMLTableRowElement;

	createProfileEditButton: (profile: Profile) => HTMLButtonElement;
	createProfileDeleteButton: (profile: Profile) => HTMLButtonElement;
	createButton: (
		text: string,
		onclick?: () => void,
		classes?: string[]
	) => HTMLButtonElement;
};
