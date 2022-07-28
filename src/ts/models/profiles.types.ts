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
	name: '',
	email: '',
	phone: '',
	regNr: '',
	kmDriven: 0,
	workshop: 'Randers',
};
