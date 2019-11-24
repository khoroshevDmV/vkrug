function registration_user() {
	let leng = String(localStorage.length / 2 + 1) ;
	localStorage.setItem(leng, email.value);
	const new_person = {
		name_person: namea.value,
		email_person: email.value,
		password_person: password.value,
		id_person: leng
		avatar_person: "default_avatar",
		loginIn_person: true,
	}
	localStorage.setItem(email.value, JSON.stringify(new_person));
	window.location = "/pages/userspage/usersinfo?id=" + new_person.id_person + ".html";
}
