
/**
 *  Добавить guard clauses, async/await, error handling
*/
function processUserDataAndSendEmail(user: User) {
  // Обработка данных пользователя
  user.processData();

  // Отправка электронной почты
  emailService.sendEmail(user.email, 'Данные обработаны успешно');
}

