type TMutableList<T> = T[];

enum WarningType {
  LEGACY_CODE_DEPENDENCY,
}

type TWarning = {
  type: WarningType;
};

const Warning = (type: WarningType): TWarning => {
  return {
    type,
  };
};

const addError = (errors: TMutableList<TWarning>) => {
  errors.push(Warning(WarningType.LEGACY_CODE_DEPENDENCY));
};

// Мы не должны изменять оригинальный массив, вместо этого возвращаем новый.
// Это делает функцию чистой и предсказуемой.
// Мы также избегаем сайд эффектов.
// Это также более функциональный способ программирования.
const createWarning = (type: WarningType): TWarning => ({ type });
const addWarning = (errors: TMutableList<TWarning>) => [...errors, Warning(WarningType.LEGACY_CODE_DEPENDENCY)];