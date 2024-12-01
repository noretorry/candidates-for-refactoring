class Car2 {
  public static readonly COLORS = ['red', 'blue', 'green'];

  public static isColorAvailable(color: string): boolean {
    return this.COLORS.includes(color);
  }
}

/**
 *  Enum-ы лучше использовать для таких констант, так как тип лучше передает намерение, 
 *  и позволяет ts помогать с типами
*/ 
enum ECarColor {
  red = 'red',
  blue = 'blue',
  green = 'green',
}

class Car2_2 {
  /**
   *  Переносим константу цветов в enum для лучшей читаемости и удобства использования
  */ 
  public static readonly COLORS = Object.values(ECarColor);

  public static isColorAvailable(color: ECarColor): boolean {
    return this.COLORS.includes(color);
  }
}

