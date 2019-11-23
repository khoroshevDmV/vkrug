function enter_user() {
	if (!localStorage.getItem(email.value)) {
		email.style.borderColor = "maroon";
	}
	if (JSON.parse(localStorage.getItem(email.value)).password_person == password.value){
		buf = email.value;
		window.location = "/pages/userspage/usersinfo?id=" + JSON.parse(localStorage.getItem(email.value)).id_person + ".html";
	} else {
		password.style.borderColor = "maroon";
	}
}
function email_valid() {
	email.style.borderColor = "";
}
function password_valid() {
	password.style.borderColor = "";
}