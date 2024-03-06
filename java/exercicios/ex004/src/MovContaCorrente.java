public class MovContaCorrente {
    public static void main(String[] args) {
        Conta c1 = new Conta();
        Conta c2 = new Conta();
        c1.deposita = 200;
        c2.deposita = 100;
        System.err.println(c1.deposita);
        System.err.println(c2.deposita);
    }

}
