public class Test {
    public static void fazerCarroAcelerar(AceleraCarro aceleracarro) {
        aceleracarro.acelerar();
        
    }
    public static void main(String[] args) throws Exception {
        Test t = new Test();
        t.fazerCarroAcelerar(new AceleraCarro());
        t.fazerCarroAcelerar(new Ferrari());
        t.fazerCarroAcelerar(new Fusca());
       
}
}