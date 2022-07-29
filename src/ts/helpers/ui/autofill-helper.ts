import { Profile } from '../../models/profiles.types';
import { AutofillHelperType } from './autofill-helper.types';

export const AutofillHelper: AutofillHelperType = {
	fillInput: (id: string, value: string) => {
		const input = document.getElementById(id) as any;
		const valueSetter = Object.getOwnPropertyDescriptor(
			input.__proto__,
			'value'
		)?.set;
		const event = new Event('input', { bubbles: true });

		valueSetter?.call(input, value);
		input.dispatchEvent(event);
	},
	fillProfile: (profile: Profile) => {
		let i = 1;
		const autofillDelay = 100;
		for (const key in profile) {
			const id = formIdNameLookup[key];
			if (!id) continue;

			setTimeout(() => {
				AutofillHelper.fillInput(id, (profile as any)[key]);
			}, autofillDelay * i++);
		}
		AutofillHelper.dispatchFocusEvent(formIdNameLookup.regNr);
		AutofillHelper.fillWorkshop(profile.workshop);
	},
	dispatchFocusEvent: (id: string) => {
		const element = document.getElementById(id);
		element?.focus();
		element?.blur();
	},
	fillWorkshop: async (workshop: string) => {
		const workshopDiv = Array.from(document.getElementsByTagName('div')).find(
			(t) => t.attributes.getNamedItem('disabled') !== null
		);
		if (!workshopDiv) return;

		let intervalRunning = false;
		const interval = setInterval(() => {
			intervalRunning = true;

			if (workshopDiv.attributes.getNamedItem('disabled')) return;

			clearInterval(interval);
			intervalRunning = false;

			workshopDiv.click();
			const workshopOptions = Array.from(
				workshopDiv?.parentElement?.getElementsByTagName('ul')[0].children ?? []
			);

			const targetOption = workshopOptions.find(
				(li) => (li as HTMLLIElement).innerText == workshop
			) as HTMLLIElement;

			targetOption?.click();
		}, 100);

		setTimeout(() => {
			if (!intervalRunning) return;

			clearInterval(interval);
			console.error('Workshop dropdown loading timed out');
		}, 1000 * 10);
	},
};

const formIdNameLookup: any = {
	email: 'YourCar:Email',
	phone: 'YourCar:Telephone number',
	regNr: 'YourCar:Car Registration Number',
	kmDriven: 'YourCar:Driven Kilometers',
};
