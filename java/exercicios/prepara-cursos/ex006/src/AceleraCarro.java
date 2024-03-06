public class AceleraCarro {

    public void acelerar() {
        System.out.println("Acelerando...");
    }

}
class Ferrari extends AceleraCarro {
    public void acelerar() {
        System.out.println("Ferrari Acelerando muito...");
    }
}

class Fusca extends AceleraCarro {
    public void acelerar() {
        System.out.println("Fusca Tentando Acelerar...");
    }
}

// class Test{
//     public static void fazerCarroAcelerar(AceleraCarro aceleracarro) {
//         aceleracarro.acelerar();
        
//     }

// public static void main(String[] args) throws Exception {
//     Test t = new Test();
//     t.fazerCarroAcelerar(new AceleraCarro());
//     t.fazerCarroAcelerar(new Ferrari());
//     t.fazerCarroAcelerar(new Fusca());
   
// }
// }