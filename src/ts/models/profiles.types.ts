import { Guid } from 'guid-typescript';
import { Workshop } from './workshop.types';

export type Profile = {
	name: string;
	email: string;
	phone: string;
	regNr: string;
	kmDriven: number;
	workshop: Workshop;
	guid?: Guid;
};
export const EmptyProfile: Profile = {
	name: '',
	email: '',
	phone: '',
	regNr: '',
	kmDriven: 0,
	workshop: 'Randers',
	guid: Guid.create(),
};
export const VisibleFieldsProfile: Profile = {
	name: '',
	email: '',
	phone: '',
	regNr: '',
	kmDriven: 0,
	workshop: 'Randers',
};
