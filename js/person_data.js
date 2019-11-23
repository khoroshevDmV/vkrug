function data_person_email() {
	let string_url = window.location.href;
	person_email.innerHTML = String(String(string_url.split("=")[1]).split(".")[0]);
	const items = {...localStorage};
	person_password.innerHTML = items;
}
