function data_person_email() {
	get_info();
	if (buf_person.loginIn_person == true) {
		second_menu.hidden = true;
		menu.style.visibility = "visible";
		person_password.innerHTML = " " + buf_person.password_person;
	} else {
		menu.hidden = true;
		second_menu.style.visibility = "visible";
		person_password.innerHTML = " скрыт от посторонних глаз";
	}
	person_name.innerHTML = " " + buf_person.name_person;
	person_email.innerHTML = " " + buf_person.email_person;
}
function unhidden_avatar() {
	avatar.hidden = false;
}
function hidden_avatar() {
	avatar.hidden = true;
}
back_out.onclick = function() {
	get_info();
	window.location.href = "/pages/userspage/usersinfo?id=" + buf_person.id_person + ".html";
	data_person_email();
}
out.onclick = function() {
	get_info();
	localStorage.removeItem(buf_person);
	buf_person.loginIn_person = false;
	localStorage.setItem(buffer_email, JSON.stringify(buf_person));
	window.location.href = "/pages/userspage/enter.html";
}
back.onclick = function() {
	back_out.onclick;
}
function get_info() {
	let string_url = window.location.href;
	let buffer_id = String(String(string_url.split("=")[1]).split(".")[0]);
	let buffer_email = localStorage.getItem(buffer_id);
	return buf_person = JSON.parse(localStorage.getItem(buffer_email));
}