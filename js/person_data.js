function data_person_email() {
	let string_url = window.location.href;
	let buffer_id = String(String(string_url.split("=")[1]).split(".")[0]);
	let buffer_email = localStorage.getItem(buffer_id);
	const buf_person = JSON.parse(localStorage.getItem(buffer_email));
	person_email.innerHTML = buf_person.email_person;
	person_password.innerHTML = buf_person.password_person;
	person_name.innerHTML = buf_person.name_person;
	hidden.style.top = "300px";
	unhidden.style.top = "320px";
	console.log(avatar.top);
}
function unhidden_avatar() {
	avatar.hidden = false;
}
function hidden_avatar() {
	avatar.hidden = true;
}
