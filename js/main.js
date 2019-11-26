function count_of_people() {
	switch(localStorage.length % 10 / 2) {
		case 1:
			count.innerHTML = "Нас уже " + (localStorage.length / 2) + " пользователь";
			break;
		case 2:
		case 3:
		case 4:
			count.innerHTML = "Нас уже " + (localStorage.length / 2) + " пользователя";
			break;
		default:
			count.innerHTML = "Нас уже " + (localStorage.length / 2) + " пользователей";
	}
	out.hidden = true;
}