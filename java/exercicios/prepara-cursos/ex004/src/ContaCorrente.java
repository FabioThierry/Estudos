public class ContaCorrente {

    class Programa {
        
        public static void main(String[] args) throws Exception {
            Conta minhaConta;
            minhaConta = new Conta();
            minhaConta.nome = "Duke";
            minhaConta.saldo = 1000.0;
            System.out.println("Saldo atual: " + minhaConta.saldo);
        }
        
    }
    
}
