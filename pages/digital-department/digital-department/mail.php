<?php
$name = $_POST['name'];
$university = $_POST['university'];
$direction = $_POST['direction'];
$program = $_POST['program'];
$phone = $_POST['phone'];
$email = $_POST['email'];

// Формируем сообщение для отправки, в нём мы соберём всё, что ввели в форме
$content = 'Заявка на обучение в проекте "Цифровая кафедра" \n' . 'ФИО: ' . $name . '\n ВУЗ: ' . $university . '\n Текущее направление обучения: ' . $direction . '\n Выбранная программа: ' . $program . '\n Телефон: ' . $phone . '\n Email: ' . $email;
// Пытаемся отправить письмо по заданному адресу
// Если нужно, чтобы письма всё время уходили на ваш адрес — замените первую переменную $email на свой адрес электронной почты
$send = mail('marrina-dm2000@yandex.ru', 'Заявка на обучение в проекте "Цифровая кафедра"', $content, "Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
// Если отправка прошла успешно — так и пишем
if ($send == 'true') {
    echo "Сообщение отправлено";
} // Если письмо не ушло — выводим сообщение об ошибке
else {
    echo "Ой, что-то пошло не так";
}