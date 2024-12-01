
/**
 * Можно вынести получение tenthRate и tenthsWorked в отдельную функцию getPayInfo
 * const { tenthRate, tenthsWorked } = getPayInfo()
 * 
 * Можно и получение overtimeRate вынести в отдельную функцию getOvertimeRate
 * const overTimePay = Math.round(overTime * getOvertimeRate(overtime, tenthRate));
*/ 
function calculateWeeklyPay(overtime: boolean): number {
  const tenthRate: number = getTenthRate();
  const tenthsWorked: number = getTenthsWorked();
  const straightTime: number = Math.min(400, tenthsWorked);
  const overTime: number = Math.max(0, tenthsWorked - straightTime);
  const straightPay: number = straightTime * tenthRate;
  const overtimeRate: number = overtime ? 1.5 : 1.0 * tenthRate;
  const overtimePay: number = Math.round(overTime * overtimeRate);
  return straightPay + overtimePay;
}

