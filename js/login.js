let login = prompt("Login");
if (login == "admin") {

    let password = prompt("Password?");
    if (password == null) {
        alert("Вход отменен");
    }
    else if (password == "1202") {
        alert("Добро пожаловать");
    }
    else {
        alert("Пароль неверный");
    }
}
else if (login == null) {
    alert("Вход отменен");
}
else {
    alert("Я вас не знаю");
}
