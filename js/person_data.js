function data_person_email() {
	get_info();
	if (buf_person.loginIn_person == true) {
		main_back.innerHTML = "К себе";
		news_back.innerHTML = "Новости";
		enter_back.innerHTML = "Выход";
		person_password.innerHTML = " " + buf_person.password_person;
		body.style.backgroundColor = buf_person.bgcolor;
		body.style.color = buf_person.txtcolor;
	} else {
		main_back.innerHTML = "Главная";
		news_back.innerHTML = "Регистрация";
		enter_back.innerHTML = "Вход";
		person_password.innerHTML = " скрыт от посторонних глаз";
	}
	person_name.innerHTML = " " + buf_person.name_person;
	person_email.innerHTML = " " + buf_person.email_person;
}
back_out.onclick = function() {
	if (main_back.innerHTML == "К себе") {
		get_info();
		window.location.href = "/usersinfo?id=" + buf_person.id_person + ".html";
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
	window.location.href = "/enter.html";
}
back.onclick = function() {
	if (news_back.innerHTML == "Новости") {
		back_out.onclick;
	} else {
		window.location.href = "/registration.html";
	}
}
function get_info() {
	let string_url = window.location.href;
	let buffer_id = String(String(string_url.split("=")[1]).split(".")[0]);
	let buffer_email = localStorage.getItem(buffer_id);
	return buf_person = JSON.parse(localStorage.getItem(buffer_email));
}
colorsone.onmouseover = function() 
{
	save_color("#990011FF","#FCF6F5FF");
}
colorstwo.onmouseover = function() 
{
	save_color("#DF6589FF","#3C1053FF");
}
colorsthree.onmouseover = function() 
{
	save_color("#F2EDD7FF","#755139FF");
}
colorsfour.onmouseover = function() 
{
	save_color("#006B38FF","#101820FF");
}
colorsfive.onmouseover = function() 
{
	save_color("#F4A950","#161B21");
}
function save_color(bgcolor,txtcolor) {
	get_info();
	localStorage.removeItem(buf_person);
	buf_person.bgcolor = bgcolor;
	buf_person.txtcolor = txtcolor;
	localStorage.setItem(buf_person.email_person,JSON.stringify(buf_person));
	body.style.backgroundColor = bgcolor;
	body.style.color = txtcolor;
}
checkbox.onclick = function() {
	if (settings.style.visibility == "hidden") {
		settings.style.visibility = "hidden";
	} else {
		settings.style.visibility = "visible";
	}
}