import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class TesteJButton extends JFrame {
    private JTextField campo1, campo2;
    private JLabel nome, sobrenome;

    public TesteJButton() {
        super("Testando Componente JButtons");
        
        Container container = getContentPane();
        container.setLayout(new FlowLayout());
        
        nome = new JLabel("Nome");
        nome.setToolTipText("Escreva seu nome no campo ao lado");
        container.add(nome);
        campo1 = new JTextField(15);
        container.add(campo1);
        
        sobrenome = new JLabel("Sobrenome");
        sobrenome.setToolTipText("Escreva seu sobrenome no campo ao lado");
        container.add(sobrenome);
        campo2 = new JTextField(15);
        container.add(campo2);
        
        JButton botao1 = new JButton("Adicionar");
        botao1.setMnemonic(KeyEvent.VK_A);
        botao1.setToolTipText("Une o nome e o sobrenome");
        container.add(botao1);
        
        Icon erase1 = new ImageIcon("erase.gif");
        Icon erase2 = new ImageIcon("erase.gif");
        
        JButton botao2 = new JButton("Apagar", erase1);
        botao2.setRolloverIcon(erase2);
        botao2.setMnemonic(KeyEvent.VK_P);
        botao2.setToolTipText("Limpa os campos nome e sobrenome");
        container.add(botao2);
        
        botao1.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent evento) {
                JOptionPane.showMessageDialog(null, "Seu nome completo é: " + campo1.getText() + " " + campo2.getText());
                
           }
        });
        botao2.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent evento) {
                campo1.setText("");
                campo2.setText("");
                repaint();
            }
        });
        setSize(500, 125);
        setVisible(true);}
        public static void main(String args[]) {
            TesteJButton aplicacao = new TesteJButton();
            aplicacao.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        }
}

