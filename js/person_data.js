function data_person_email() {
	let string_url = window.location.href;
	person_email.innerHTML = String(string_url.split("=")[1]).split(".")[0];
	let a = "dog"
	person_email.innerHTML = a;
}