function data_person_email() {
	let string_url = window.location.href;
	person_email.innerHTML = JSON.parse(localStorage.getItem(string_url.split("=")[1].split(".")[0]));
}