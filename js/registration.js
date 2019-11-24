function registration_user() {
	localStorage.setItem(String(localStorage.length / 2 + 1), email.value);
	const new_person = {
		name_person: namea.value,
		email_person: email.value,
		password_person: password.value,
		id_person: String(localStorage.length / 2 + 1), 
		avatar_person: "default_avatar",
		loginIn_person: true,
	}
	localStorage.setItem(email.value, JSON.stringify(new_person));
	window.location = "/pages/userspage/usersinfo?id=" + new_person.id_person + ".html";
}
