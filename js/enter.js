function enter_user() {
	if (!localStorage.getItem(email.value)) {
		email.style.borderColor = "maroon";
	}
	if (JSON.parse(localStorage.getItem(email.value)).password_person == password.value){
		window.location = "C:/Users/Diana/Desktop/СРОЧНО!!!/pages/userspage/usersinfo.html";	
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