import java.awt.*;
import java.awt.event.*;
import javax.swing.*;


public class TesteJRadioButton extends JFrame {
    private JTextField campo;
    private JRadioButton amarelo, vermelho, azul;
    private ButtonGroup onlyOne;
    public TesteJRadioButton(){
        super("Testando Componente JRadioButtons");
        Container container = getContentPane();
        container.setLayout(new FlowLayout());
        campo = new JTextField("Clique na cor desejada e veja o resultado", 25);
        campo.setFont(new Font("Serif", Font.PLAIN, 14));
        container.add(campo);

        amarelo = new JRadioButton("Amarelo");
        container.add(amarelo);
        
        vermelho = new JRadioButton("Vermelho");
        container.add(vermelho);
        
        azul = new JRadioButton("Azul");
        container.add(azul);

        onlyOne = new ButtonGroup();
        onlyOne.add(amarelo);
        onlyOne.add(vermelho);
        onlyOne.add(azul);

        TratadorRadioButton trat = new TratadorRadioButton();
        amarelo.addItemListener(trat);
        vermelho.addItemListener(trat);
        azul.addItemListener(trat);
        setSize(285,100);
        setVisible(true);

    }
    public static void main(String[] args) {
        TesteJRadioButton aplicacao = new TesteJRadioButton();
        aplicacao.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
    
    private class TratadorRadioButton implements ItemListener{
        private Color cor;
        public void itemStateChanged(ItemEvent evento){
            if(evento.getSource() == amarelo){
                cor = Color.YELLOW;
            }
            if(evento.getSource() == vermelho){
                cor = Color.RED;
            }   
            if(evento.getSource() == azul){
                cor = Color.BLUE;
                
            }
            campo.setBackground(cor);
        }
    }
}
  