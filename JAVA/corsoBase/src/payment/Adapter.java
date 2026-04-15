package payment;

public class Adapter implements PaymentProcessor {
 private PaymentSystem paymentSystem;

 public Adapter(PaymentSystem paymentSystem) {
     this.paymentSystem = paymentSystem;
 }

 @Override
 public void pay(double amount) {
     int cents = (int) (amount * 100);
     paymentSystem.makePayment(cents);
 }
}

class AdapterClass extends PaymentSystem implements PaymentProcessor {

 @Override
 public void pay(double amount) {
     int cents = (int) (amount * 100);
     makePayment(cents);
 }
}
