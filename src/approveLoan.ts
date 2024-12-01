
// Вынести логику проверки на соответствие требованиям в отдельную функцию 
if (
  user.age >= 18 &&
  user.age <= 65 &&
  user.employmentStatus === 'employed' &&
  user.criminalRecord === false
) {
  approveLoan();
}
