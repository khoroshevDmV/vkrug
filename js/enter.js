enter_users.onclick = function() {
	if (!localStorage.getItem(email.value)) {
		email.style.borderColor = "#ce7c7c";
	} else {
		const buf_person = JSON.parse(localStorage.getItem(email.value));
		if (buf_person.password_person == password.value) {
		localStorage.removeItem(buf_person);
		buf_person.loginIn_person = true;
		localStorage.setItem(buf_person.email_person, JSON.stringify(buf_person));
		window.location = "/usersinfo?id=" + buf_person.id_person + ".html";
	} else {
		password.style.borderColor = "#ce7c7c";
	}
	}
}
email.onblur = function() {
	email.style.borderColor = "";
}
password.onblur = function() {
	password.style.borderColor = "";
}