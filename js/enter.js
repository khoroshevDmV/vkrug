function enter_user() {
	if (!localStorage.getItem(email.value)) {
		email.style.borderColor = "#ce7c7c";
	} else {
	if 
		const buf_person = JSON.parse(localStorage.getItem(email.value));
		if (buf_person.password_person == password.value) {
		localStorage.removeItem(buf_person);
		buf_person.loginIn = true;
		localStorage.setItem(buf_person.email_person, JSON.stringify(buf_person));
		window.location = "/pages/userspage/usersinfo?id=" + buf_person.id_person + ".html";
	} else {
		password.style.borderColor = "#ce7c7c";
	}
	}
}
function email_valid() {
	email.style.borderColor = "";
}
function password_valid() {
	password.style.borderColor = "";
}