import { Workshop } from './workshop.types';

export type Profile = {
	name: string;
	email: string;
	phone: string;
	regNr: string;
	kmDriven: string;
	workshop: Workshop;
};
