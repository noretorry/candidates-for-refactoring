class DaoCacheConfigProperties {
  alive: number; // alive cache time in days
  elements: number; // maximum elements in cache
}


// НадА сделать Data Access Object? 
class Da_DaoCacheConfigProperties {
  // Используем паттерн инкапсуляции, чтобы защитить данные от прямого доступа 
  private _alive: number; 
  private _elements: number;
  // #alive #elements

  constructor(alive: number, elements: number) {
    this._alive = alive;
    this._elements = elements;
  }

  // Геттеры и сеттеры предоставляют контролируемый доступ к полям
  get alive(): number {
    return this._alive;
  }

  set alive(value: number) {
    if (value < 0) throw new Error('Alive time must be non-negative');
    this._alive = value;
  }

  get elements(): number {
    return this._elements;
  }

  set elements(value: number) {
    if (value < 0) throw new Error('Elements must be non-negative');
    this._elements = value;
  }
}

