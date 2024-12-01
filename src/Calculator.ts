
/**
 * Создать интерфейс ICalculator, в котором будут определены все методы калькулятора.
 * class Calculator implements ICalculator 
 * Добавить проверку деления на 0 в методе divide
*/
class Calculator {
  public add(a: number, b: number): number {
    return a + b;
  }
  public subtract(a: number, b: number): number {
    return a - b;
  }
  public multiply(a: number, b: number): number {
    return a * b;
  }
  public divide(a: number, b: number): number {
    return a / b;
  }
}
