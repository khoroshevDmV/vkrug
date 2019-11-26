function data_person_email() {
	let string_url = window.location.href;
	let buffer_id = String(String(string_url.split("=")[1]).split(".")[0]);
	let buffer_email = localStorage.getItem(buffer_id);
	const buf_person = JSON.parse(localStorage.getItem(buffer_email));
	if (buf_person.loginIn_person == true) {
		person_password.innerHTML = "Пароль: " + buf_person.password_person;
		inter.hidden = true;
		reg.hidden = true;
	} else {
		person_password.innerHTML = "Скрыто от посторонних глаз";
		out.hidden = true;
	}
	person_name.innerHTML = "Имя: " + buf_person.name_person;
	person_email.innerHTML = "Почтовый адрес: " + buf_person.email_person;
}
function unhidden_avatar() {
	avatar.hidden = false;
}
function hidden_avatar() {
	avatar.hidden = true;
	inter.hidden = true;
	reg.hidden = true;
}
back_out.onclick = function() {
	let string_url = window.location.href;
	let buffer_id = String(String(string_url.split("=")[1]).split(".")[0]);
	let buffer_email = localStorage.getItem(buffer_id);
	const buf_person = JSON.parse(localStorage.getItem(buffer_email));
	window.location.href = "/pages/userspage/usersinfo?id=" + buf_person.id_person + ".html";
	data_person_email();
}
out.onclick = function() {
	let string_url = window.location.href;
	let buffer_id = String(String(string_url.split("=")[1]).split(".")[0]);
	let buffer_email = localStorage.getItem(buffer_id);
	const buf_person = JSON.parse(localStorage.getItem(buffer_email)); 
	localStorage.removeItem(buf_person);
	buf_person.loginIn_person = false;
	localStorage.setItem(buffer_email, JSON.stringify(buf_person));
	window.location.href = "/pages/userspage/enter.html";
}
function json_local() {
	let string_url = window.location.href;
	let buffer_id = String(String(string_url.split("=")[1]).split(".")[0]);
	let buffer_email = localStorage.getItem(buffer_id);
	const buf_person = JSON.parse(localStorage.getItem(buffer_email));
}