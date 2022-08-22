import { StorageHelper } from './helpers/storage/storage-helper';
import { AutofillHelper } from './helpers/ui/autofill-helper/autofill-helper';
import { ElementFactory } from './helpers/ui/element-factory/element-factory';

const injectAutofillSelect = async (select: HTMLSelectElement) => {
	const container = document.createElement('div');
	container.append(select);
	document.getElementsByTagName('header')[0].children[0].append(container);
};
const main = async () => {
	const select = await ElementFactory.createAutofillSelect();
	select.onchange = async (event: Event) => {
		const selectedOption = (event.target as HTMLOptionElement | undefined)?.value;
		const profiles = await StorageHelper.getProfilesAsync();
		const selectedProfile = profiles?.find(
			(p) => p.guid?.toString() === selectedOption
		);
		if (!selectedProfile) {
			console.error('No profile found for', selectedOption);
			return;
		}

		AutofillHelper.fillProfile(selectedProfile);
	};
	injectAutofillSelect(select);
};

main();
