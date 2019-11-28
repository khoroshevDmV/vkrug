function data_person_email() {
	get_info();
	if (buf_person.loginIn_person == true) {
		main_back.innerHTML = "К себе";
		news_back.innerHTML = "Новости";
		enter_back.innerHTML = "Выход";
		person_password.innerHTML = " " + buf_person.password_person;
	} else {
		main_back.innerHTML = "Главная";
		news_back.innerHTML = "Регистрация";
		enter_back.innerHTML = "Вход";
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
	if (main_back.innerHTML == "К себе") {
		get_info();
		window.location.href = "/pages/userspage/usersinfo?id=" + buf_person.id_person + ".html";
		data_person_email();
	} else {
		window.location.href = "/index.html";
	}
}
out.onclick = function() {
	if (enter_back.innerHTML == "Выход") {
		get_info();
		localStorage.removeItem(buf_person);
		buf_person.loginIn_person = false;
		localStorage.setItem(buf_person.email_person, JSON.stringify(buf_person));
	}
	window.location.href = "/pages/userspage/enter.html";
}
back.onclick = function() {
	if (news_back.innerHTML == "Новости") {
		back_out.onclick;
	} 
	if (news_back.innerHTML == "Регистрация") {
		window.location.href = "/pages/userspage/registration.html";
	}
}
function get_info() {
	let string_url = window.location.href;
	let buffer_id = String(String(string_url.split("=")[1]).split(".")[0]);
	let buffer_email = localStorage.getItem(buffer_id);
	return buf_person = JSON.parse(localStorage.getItem(buffer_email));
}