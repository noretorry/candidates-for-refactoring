
// rcCode?: number;
type TPayment = {
  amount: number;
  rcCode: number;
};

type TGatewayService = {
  sendAuth: (payment: TPayment) => number;
};

// Вернуть новый объект, содержащий все свойства payment, но с новым rcCode
const auth = (payment: TPayment, gateway: TGatewayService) => {
  const rcCode = gateway.sendAuth(payment);

  payment.rcCode = rcCode;
};
