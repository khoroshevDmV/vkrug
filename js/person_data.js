function data_person_email() {
	json_local();
	buf_person.loginIn_person == true ? person_password.innerHTML = "Пароль: " + buf_person.password_person : person_password.innerHTML = "Скрыто от посторонних глаз";
	person_name.innerHTML = "Имя: " + buf_person.name_person;
	person_email.innerHTML = "Почтовый адрес: " + buf_person.email_person;
}
function unhidden_avatar() {
	avatar.hidden = false;
}
function hidden_avatar() {
	avatar.hidden = true;
}
back_out.onclick = function() {
	window.location.href = "/pages/userspage/usersinfo?id=" + JSON.parse(localStorage.getItem(buf_person.email_person)).id_person + ".html";
	data_person_email();
}
out.onclick = function() {
	json_local();
	localStorage.removeItem(buffer_email).loginIn_person; 
	localStorage.setItem(buffer_email).loginIn_person = false;
	window.location.href = "/pages/userspage/enter.html";
}
function json_local() {
	let string_url = window.location.href;
	let buffer_id = String(String(string_url.split("=")[1]).split(".")[0]);
	let buffer_email = localStorage.getItem(buffer_id);
	const buf_person = JSON.parse(localStorage.getItem(buffer_email));
}