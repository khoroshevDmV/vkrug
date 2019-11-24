function count_of_people {
	switch(localStorage.length % 10) {
		case 1:
			count.innerHTML = "Нас уже " + localStorage.length + "пользователь";
			break;
		case 2:
		case 3:
		case 4:
			count.innerHTML = "Нас уже " + localStorage.length + "пользователя";
			break;
		default:
			count.innerHTML = "Нас уже " + localStorage.length + "пользователей";
	}
}