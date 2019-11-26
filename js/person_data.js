function data_person_email() {
	let string_url = window.location.href;
	let buffer_id = String(String(string_url.split("=")[1]).split(".")[0]);
	let buffer_email = localStorage.getItem(buffer_id);
	const buf_person = JSON.parse(localStorage.getItem(buffer_email));
	if (buf_person.loginIn_person == true) {
		person_password.innerHTML = "Пароль: " + buf_person.password_person;
		back_out.style.display = "none";
		back_out.value = "К себе";
		back_out.style.display = "inline-block";
		news.style.display = "none";
		news.value = "Новости";
		news.style.display = "inline-block";
		out.style.display = "none";
		out.value = "Выход";
		out.style.display = "inline-block";
	} else {
		person_password.innerHTML = "Скрыто от посторонних глаз";
		back_out.style.display = "none";
		back_out.value = "Главная";
		back_out.style.display = "inline-block";
		news.style.display = "none";
		news.value = "Вход";
		news.style.display = "inline-block";
		out.style.display = "none";
		out.value = "Регистрация";
		out.style.display = "inline-block";
	}
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
	if (back_out.value == "К себе") {
	let string_url = window.location.href;
	let buffer_id = String(String(string_url.split("=")[1]).split(".")[0]);
	let buffer_email = localStorage.getItem(buffer_id);
	const buf_person = JSON.parse(localStorage.getItem(buffer_email));
	window.location.href = "/pages/userspage/usersinfo?id=" + buf_person.id_person + ".html";
	data_person_email();
	} else {
		window.location.href = "/index.html";
	}
}
out.onclick = function() {
	if (out.value == "Выход") {
	let string_url = window.location.href;
	let buffer_id = String(String(string_url.split("=")[1]).split(".")[0]);
	let buffer_email = localStorage.getItem(buffer_id);
	const buf_person = JSON.parse(localStorage.getItem(buffer_email)); 
	localStorage.removeItem(buf_person);
	buf_person.loginIn_person = false;
	localStorage.setItem(buffer_email, JSON.stringify(buf_person));
	window.location.href = "/pages/userspage/enter.html";
	} else {
		window.location.href = "/pages/userspage/registration.html";
	}
}
function json_local() {
	let string_url = window.location.href;
	let buffer_id = String(String(string_url.split("=")[1]).split(".")[0]);
	let buffer_email = localStorage.getItem(buffer_id);
	const buf_person = JSON.parse(localStorage.getItem(buffer_email));
}
back.onclick = function() {
	back_out.onclick;
}
news.onclick = function() {
	if (news.value == "Новости") {
		news_check.onclick;
	} else {
		window.location.href = "/pages/userspage/enter.html";
	}
}