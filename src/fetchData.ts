const DEFAULT_TIMEOUT = 5000;

/**
 *  Выносим обработку ответа в отдельную функцию,
*/
function handleResponse(response: Response): void {
  if (response.ok) {
    console.log(response);
  } else {
    console.error('handleResponse Ошибка: ', response.statusText);
  }
}

/**
 *  Выносим обработку ошибок в отдельную функцию,
*/
function handleError(error: Error): void {
  console.error('handleError Ошибка: ', error);
}

/**
 *  Мы можем улучшить код, вынеся обработку ответа и ошибок в отдельные функции
*/
function fetchData(url: string, timeout = DEFAULT_TIMEOUT): void {
  fetch(url, { timeout })
    .then(handleResponse)
    .catch(handleError);
}
