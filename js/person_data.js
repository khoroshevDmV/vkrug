function data_person_email() {
	let string_url = window.location.href;
	let buffer_id = String(String(string_url.split("=")[1]).split(".")[0]);
	let buffer_email = String(localStorage.getItem(buffer_id));
	person_email.innerHTML = buffer_email;
	person_password.innerHTML = String(JSON.parse(localStorage.getItem(buffer_email)).password_person);
	person_name.innerHTML = String(JSON.parse(localStorage.getItem(buffer_email)).name_person);
}
