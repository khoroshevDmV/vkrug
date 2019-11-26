var menu_Exit_a = document.createElement('a');
var menu_Exit_li = document.createElement('li');
menu_Exit_a.id = "out";
menu_Exit_a.innerHTML = "Выход";
menu_Exit_li.className = "button_out";
document.nav.ul.append(menu_Exit_li);
document.nav.ul.getElementsByTagName('button_out').append(menu_Exit_a);