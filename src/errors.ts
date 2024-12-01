
/**
 *  Мы можем улучшить код, удалив дублирование и повысив его читаемость, 
 *  Вместо создания отдельных функций для каждого статуса, мы создадим 
 *  одну функцию, принимающую статус код в качестве параметра.
*/ 
enum EHttpStatus {
  NOT_FOUND = 404,
  FORBIDDEN = 403,
  SERVICE_UNAVAILABLE = 503,
}

const hasStatus = (response: Response, status: EHttpStatus) => {
  return response.status === status;
};

/**
 *  Теперь, чтобы проверить статус, можно использовать:
*/ 
hasStatus(response, EHttpStatus.NOT_FOUND)
hasStatus(response, EHttpStatus.FORBIDDEN)
hasStatus(response, EHttpStatus.SERVICE_UNAVAILABLE)

