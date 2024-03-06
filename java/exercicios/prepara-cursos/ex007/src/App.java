import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class App extends JFrame {
    private JDesktopPane desktop;
    
    public App(){
        super("Testando JInternalFrame contina em " + "uma JDesktopPane");
        
        JMenuBar barra = new JMenuBar();
        JMenu arquivo = new JMenu("Arquivo");
        JMenuItem novo = new JMenuItem("Novo");

        JMenuItem sair = new JMenuItem("Sair");
        arquivo.add(novo);
        arquivo.add(sair);
        barra.add(arquivo);
        setJMenuBar(barra);

        //configura desktop
        desktop = new JDesktopPane();
        desktop.setBackground(Color.LIGHT_GRAY);
        desktop.setToolTipText("Eu sou uma JDesktopPane,"+ "você pode utilizar o meu menu.");
        this.getContentPane().add(desktop);
        // configura ouvinte para o item de menu "novo"
        novo.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                JInternalFrame frame = new JInternalFrame("Janela Interna", true, true, true, true);
                Container container = frame.getContentPane();
                JanelaInterna interna = new JanelaInterna();
                container.add(interna, BorderLayout.CENTER);
                frame.pack();
                desktop.add(frame);
                frame.setVisible(true);
            }
        });
        sair.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent evento) {
                System.exit(0);
            }
        });
        setSize(1000,800);
        setVisible(true);
    }

    public static void main(String[] args) {
        App app = new App();
        app.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}

class JanelaInterna extends JPanel{
   private JTextArea areaTexto;

   public JanelaInterna(){
       areaTexto = new JTextArea(50, 50);
       areaTexto.setLineWrap(true);
       areaTexto.setWrapStyleWord(true);
       areaTexto.setText("Olá, mundo!" + "\n" + "Este é um texto de teste." + "\n" + "Você pode escrever o que quiser.");
       this.add(new JScrollPane(areaTexto))	;
       add(areaTexto);
   }
}
