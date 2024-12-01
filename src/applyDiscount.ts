
// Модуль 1
function calculateTotalPrice(items) {
  let totalPrice = 0;
  items.forEach((item) => {
    totalPrice += item.price;
  });
  // Использовать reduce, что улучшит производительность и читабельность кода
  // return items.reduce((acc, cur) => acc + cur.price, 0);
  return totalPrice;
}

// Модуль 2
function applyDiscount(totalPrice, discountPercentage) {
  return totalPrice * (1 - discountPercentage / 100);
}
