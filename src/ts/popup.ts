import { Loader } from './helpers/load/loader';
import { StorageHelper } from './helpers/storage/storage-helper';
import { FormHelper } from './helpers/ui/form-helper';
import { Profile } from './models/profiles.types';
async function main() {
	const form = document.getElementById('new-profile-form');
	if (form) form.onsubmit = (e) => formSubmit(e);

	await Loader.loadProfilesAsync();
	await Loader.loadFormDataAsync();
	// NH_TODO: Remember to load form data
}
async function formSubmit(event: SubmitEvent) {
	event.preventDefault();

	const profile: Profile = FormHelper.getProfile();
	FormHelper.clearForm();

	await StorageHelper.saveProfileAsync(profile);
	await Loader.loadProfilesAsync();
}
document.addEventListener('DOMContentLoaded', main);
