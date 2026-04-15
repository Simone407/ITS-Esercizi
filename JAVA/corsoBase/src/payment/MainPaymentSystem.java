package payment;

public class MainPaymentSystem {
    public static void main(String[] args) {

        PaymentProcessor adapterObj = new Adapter(new PaymentSystem());
        adapterObj.pay(15.75); 

        PaymentProcessor adapterClass = new AdapterClass();
        adapterClass.pay(9.99);
    }
}
