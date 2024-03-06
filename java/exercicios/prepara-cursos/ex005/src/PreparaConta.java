public class PreparaConta {
    public float x, y;

    public PreparaConta(float ax, float ay) { // Sempre omita o valor de retorno
        this.x = ax;
        this.y = ay;

    }

    public void move(float dx, float dy) {
        this.x += dx;
        this.y += dy;

    }

    public void mostra() {
        System.err.println("(" + this.x + "," + this.y + ")");
    }

    class Principal {
        public static void main(String[] args) throws Exception {
            PreparaConta ap;
            ap = new PreparaConta((float) 2.3, (float) 4.5);
            ap.move(4, 1);
            ap.mostra();
        }

    }
}
