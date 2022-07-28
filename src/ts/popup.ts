import { StorageConsts } from './consts/storage-consts';
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
		const profiles = await Loader.loadProfilesAsync();
		if (profiles && profiles.length > 0) {
			const profile = profiles[0];

			target.innerText = profile.name;
		} else {
			console.error('No profiles found');
		}
	}
}
async function formSubmit(event: SubmitEvent) {
	event.preventDefault();
	console.log('Submitted');

	const profile: Profile = FormHelper.getProfile();
	console.log(profile);
	StorageHelper.setValueAsync(StorageConsts.profilesKey, profile);

	for (const key in EmptyProfile as Profile) {
		console.log(key);
	}
}
setTimeout(() => {
	main();
}, 1000);
