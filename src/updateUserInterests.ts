
// Убираем дубли, делаем одну функцию
const updateUserProperty = (property, value) => {
  if (!isLoggedIn()) {
    toLoginPage();

    return;
  }

  const token = getToken();
  const headers = getHeaders(token);

  return fetch(`${domain}/v1/users/${property}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      [property]: value,
    }),
  });
};

const updateUserHandle = (handle) => updateUserProperty('handle', handle);
const updateUserInterests = (interestUUIDs) => updateUserProperty('interests', interestUUIDs);

