/**
 *  Применяем принцип инверсии зависимостей из SOLID: 
 *  HighLevelModule теперь зависит от интерфейса, а не от конкретной реализации
*/ 
interface ILowLevelModule {
  doSomething(): void;
}

class LowLevelModule implements ILowLevelModule {
  doSomething() {
    // реализация
  }
}

class HighLevelModule {
  private lowLevelModule: ILowLevelModule;

  constructor(lowLevelModule: ILowLevelModule) {
    this.lowLevelModule = lowLevelModule; // Внедрение зависимости через конструктор
  }

  doSomethingElse() {
    this.lowLevelModule.doSomething();    // использование зависимости через интерфейс
  }
}

// Теперь мы можем легко подменять реализации ILowLevelModule при тестировании или изменении логики
const lowLevelModule = new LowLevelModule();
const highLevelModule = new HighLevelModule(lowLevelModule);