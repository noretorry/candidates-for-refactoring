enum ShapeType {
  Circle,
  Square,
}

//
//  Мы не хотим, чтобы наш код имел избыточность, 
//  поэтому мы выносим общие действия в отдельную функцию
//  + добавим дефолтное поведение
// 
function getAreaByShape(shape: ShapeType, radiusOrSide: number): number {
  switch (shape) {
    case ShapeType.Circle:
      return Math.PI * Math.pow(radiusOrSide, 2);
    case ShapeType.Square:
      return Math.pow(radiusOrSide, 2);
    default:
      throw new Error(`Unknown shape: ${shape}`);
  }
}

function trueCalculateArea(shape: ShapeType, radiusOrSide: number): number {
  return getAreaByShape(shape, radiusOrSide);
}

console.log('trueCalculateArea', trueCalculateArea(ShapeType.Circle, 5).toFixed(2)); // Output: 78.54
