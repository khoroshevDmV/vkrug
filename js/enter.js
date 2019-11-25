function enter_user() {
	if (!localStorage.getItem(email.value)) {
		email.style.borderColor = "#ce7c7c";
	} else {
	if (JSON.parse(localStorage.getItem(email.value)).password_person == password.value){
		JSON.parse(localStorage.getItem(email.value)).loginIn_person = true;
		window.location = "C:/Users/Diana/Desktop/СРОЧНО!!!/pages/userspage/usersinfo?id=" + JSON.parse(localStorage.getItem(email.value)).id_person + ".html";
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