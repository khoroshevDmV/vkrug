function registration_user() {
	const new_person = {
		name_person: namea.value,
		email_person: email.value,
		password_person: password.value,
	}
	localStorage.setItem(email.value, JSON.stringify(new_person));
}