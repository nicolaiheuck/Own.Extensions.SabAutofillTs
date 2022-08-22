export type WorkshopSelectHelperType = {
	clearCurrentSelection: (select: HTMLSelectElement) => void;
	selectByValue: (select: HTMLSelectElement, value: string) => void;
};
