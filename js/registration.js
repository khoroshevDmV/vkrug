function registration_user() {
	localStorage.setItem(localStorage.length + 1, email.value);
	const new_person = {
		name_person: namea.value,
		email_person: email.value,
		password_person: password.value,
		id_person: localStorage.length + 1,
	}
	localStorage.setItem(email.value, JSON.stringify(new_person));
	window.location = "/pages/userspage/usersinfo?id=" + new_person.id_person + ".html";
}