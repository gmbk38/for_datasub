<!-- Задание 2
Таблица Students имеет поля StudentId, FirstName, LastName, Group и содержит
информацию о студентах института. Таблица Exams имеет поля StudentId, ExamName, Result 
и содержит результаты экзаменов студентов.
a) написать SQL запрос, который выводит имена и фамилии студентов у которых больше двух экзаменов с результатом меньше 3.
b) написать SQL запрос, который выводит название групп, в которых таких студентов больше 10 -->

<?php
$servername = "localhost:8080"; // Имя хоста БД
$username = "SMTH"; // Пользователь БД
$password = "SMTH"; // Пароль к базе
$dbname = "SMTH"; // Имя базы

$conn = new mysqli($servername, $username, $password, $dbname); //Подключаемся к БД

$sql_first = "SELECT Student.FirstName, Student.LastName, COUNT(Student.StudentId) as count 
        FROM Student INNER JOIN Exams 
        ON Student.StudentId = Exams.StudentId
        WHERE Exams.Result < 3
        GROUP BY Student.StudentId HAVING count >= 2";

$sql_second = "SELECT Student.Group, COUNT(Student.StudentId) as count 
        FROM Student INNER JOIN Exams 
        ON Student.StudentId = Exams.StudentId
        WHERE Exams.Result < 3 and Student.StudentId HAVING count >= 2
        GROUP BY Student.Group HAVING count >= 10";

	
if ($conn->query($sql_first) === TRUE && $conn->query($sql_second)) {
 echo "Успех";	
}
$conn->close();
?>

<!-- Не совсем просто ориентироваться без БД под рукой, потому запрос сделал исходя из собственных наработок на сайте -->