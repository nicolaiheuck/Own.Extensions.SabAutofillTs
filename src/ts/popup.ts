import { Loader } from './helpers/load/loader';
import { StorageHelper } from './helpers/storage/storage-helper';
import { FormHelper } from './helpers/ui/form-helper';
import { EmptyProfile, Profile } from './models/profiles.types';
async function main() {
	const target = document.getElementById('Target');
	const form = document.getElementById('new-profile-form');

	if (form) form.onsubmit = (e) => formSubmit(e);

	if (!target) {
		console.error('Target not found');
	} else {
		await Loader.loadProfilesAsync();
		await Loader.loadFormDataAsync();
	}
}
async function formSubmit(event: SubmitEvent) {
	event.preventDefault();
	console.log('Submitted');

	const profile: Profile = FormHelper.getProfile(); // NH_TODO: Add workshop as to model binding
	console.log(profile);
	await StorageHelper.saveProfileAsync(profile);
	await Loader.loadProfilesAsync();

	for (const key in EmptyProfile as Profile) {
		console.log(key);
	}
}
setTimeout(() => {
	//NH_TODO: Find a substitute for document.ready
	main();
}, 100);
