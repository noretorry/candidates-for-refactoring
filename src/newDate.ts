/**
 *  Повышаем читаемость и предсказуемость
*/ 
const addDaysToDate = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

/**
 *  Применяем функцию для добавления 5 дней
*/ 
const newDate = addDaysToDate(date, 5);