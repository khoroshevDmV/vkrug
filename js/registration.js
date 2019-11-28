function registration_user() {
	if (name_check() && email_check() && check()) {
	localStorage.setItem(String(localStorage.length / 2 + 1), email.value);
	const new_person = {
		name_person: namea.value,
		email_person: email.value,
		password_person: password.value,
		id_person: String(localStorage.length / 2 + 0.5), 
		avatar_person: "default_avatar",
		loginIn_person: true,
	}
	localStorage.setItem(email.value, JSON.stringify(new_person));
	window.location = "/pages/usersinfo?id=" + new_person.id_person + ".html";
	}
}
namea.onblur = function() {
	name_check();
}
email.onblur = function() { 
	email_check();
}
password_check.onblur = function() { 
	check();
}
password.onblur = function() { 
	check();
}
function check() { 
	if (password.value != password_check.value || password.value == "" || password.value.length<=5) {
		password_check.style.borderColor = "#ce7c7c";
		password.style.borderColor = "#ce7c7c";
	} else {
		password_check.style.borderColor = "#7fca72";
		password.style.borderColor = "#7fca72";
		return true;
	}
}
function email_check() {
	if (email.value.includes(" ") || email.value == "" || !(email.value.includes("@")) || !(email.value.includes(".")) || email.value.indexOf("@") == 0 || email.value.indexOf(".") < (email.value.indexOf("@") + 3) || email.value.indexOf(".") == email.value.length-1){
		email.style.borderColor = "#ce7c7c";
	} else {
		email.style.borderColor = "#7fca72";
		return true;
	}
}
function name_check() {
	if (namea.value == "") {
		namea.style.borderColor = "#ce7c7c";
		} else {
		namea.style.borderColor = "#7fca72";
		return true;
	}
}