import { WorkshopSelectHelperType } from './workshop-select-helper.types';

export const WorkshopSelectHelper: WorkshopSelectHelperType = {
	clearCurrentSelection: (select: HTMLSelectElement) => {
		Array.from(select.children).forEach(
			(o) => ((o as HTMLOptionElement).selected = false)
		);
	},
	selectByValue: (select: HTMLSelectElement, value: string) => {
		const targetOption = Array.from(select.children).find(
			(o) => (o as HTMLOptionElement).value === value
		) as HTMLOptionElement;

		if (targetOption) targetOption.selected = true;
	},
};
