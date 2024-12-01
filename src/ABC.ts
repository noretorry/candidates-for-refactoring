class A {
  // ...
  getB() {
    return new B();
  }
}

class B {
  // ...
  getC() {
    return new C();
  }
}

class C {
  // ...
  doSomething() {
    // Логика
  }
}

// Использование транзитивного обращения
const a = new A();
a.getB().getC().doSomething();

// Использование композиции
const composite = (classA: A) => classA.getB().getC();
const compositeInstance = composite(new A());
compositeInstance.doSomething();

