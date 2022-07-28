import { Workshop } from './workshop.types';

export type Profile = {
	name: string;
	email: string;
	phone: string;
	regNr: string;
	kmDriven: number;
	workshop: Workshop;
};
export const EmptyProfile: Profile = {
	email: '',
	kmDriven: 0,
	name: '',
	phone: '',
	regNr: '',
	workshop: 'Randers',
};
