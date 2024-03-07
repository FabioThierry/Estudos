package classes;

import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;

public class Jogo extends JFrame {

  private static final long serialVersionUID = 1L;
  private final int TEMPO = 1;

  // num é um número aleatório entre um e 3
  int num;
  // as Três imagens
  ImageIcon copo = new ImageIcon("C:\\Users\\ffabi\\Git\\Estudos\\java\\projetos\\ JogoSimples\\src\\classes\\imagens\\trump.gif"); // Copo abaixado
  ImageIcon copoe = new ImageIcon("C:\\Users\\ffabi\\Git\\Estudos\\java\\projetos\\ JogoSimples\\src\\classes\\imagens\\wrong.gif"); // Copo levantado sem o gato
  ImageIcon copoc = new ImageIcon("C:\\Users\\ffabi\\Git\\Estudos\\java\\projetos\\ JogoSimples\\src\\classes\\imagens\\correct.gif"); // Copo levantado com o gato

  JButton btn1;
  JButton btn2;
  JButton btn3;

  public Jogo() {
    // Cria os botões
    super("Encontre o Donald Trump");
    setTitle("Encontre o Donald Trump Correto!");
    setSize(1000, 600);
    // Quando fechar saia do sistema
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    // Mudando a cor de fundo do painel
    getContentPane().setBackground(Color.WHITE);

    // Layout é nulo, significa que temos que configurar a posição e o tamanho de cada elemento que estiver nesse frame
    setLayout(null);

    // Label com o título do jogo
    JLabel lbl = new JLabel("Escolha o Donald Trump Certo!");
    // Uma fonte chamativa
    lbl.setFont(new Font("Comic Sans Ms", Font.BOLD, 50));
    // Posição e tamanho do Label
    lbl.setBounds(100, 1, 3000, 100);
    add(lbl);
    
    // Um botão que inicia o jogo
    JButton btnIniciar = new JButton("Iniciar");
    btnIniciar.setBounds(400, 100, 100, 30);
    btnIniciar.setBackground(Color.RED);
    btnIniciar.setForeground(Color.WHITE);
    // Adicionamos um listener "anonimo"
    btnIniciar.addActionListener(
      new ActionListener() {
        /**
         * Este método é executado quando o botão Iniciar é clicado.
         * Quando isso acontece, inicia o jogo.
         * 
         * @param arg0 O evento de click do botão
         */
        @Override
        public void actionPerformed(ActionEvent arg0) {
          iniciaJogo(); // Inicia o jogo
        }
      }
    );
    // Adicionando o botão
    add(btnIniciar);

    // Botão 1 de 3
    btn1 = new JButton("Copo 1");
    btn1.setBackground(getContentPane().getBackground());
    btn1.addActionListener(new Action_button1());
    btn1.setBounds(100, 200, 250, 258);
    add(btn1);

    // Botão 2 de 3
    btn2 = new JButton("Copo 2");
    btn2.setBackground(getContentPane().getBackground());
    btn2.addActionListener(new Action_button2());
    btn2.setBounds(350, 200, 250, 258);
    add(btn2);

    // Botão 3 de 3
    btn3 = new JButton("Copo 3");
    btn3.setBackground(getContentPane().getBackground());
    btn3.addActionListener(new Action_button3());
    btn3.setBounds(600, 200, 250, 258);
    add(btn3);

    // Que comece a partida!
    iniciaJogo();
  }

  // Método main, aqui instaciamos a nossa classe, para testar!
  public static void main(String[] args) {
    // new Jogo();
    new Jogo().setVisible(true);;
    
    
    
  }


  // Classe interna que implementa Action Listener
  public class Action_button1 implements ActionListener {

    public void actionPerformed(ActionEvent e) {
      if (num == 1) {
        // Se este for o botão certo: Exibe mensagem e...
        Temporizador.exibirMensagem(
          TEMPO,
          "Você Acertou!",
          JOptionPane.INFORMATION_MESSAGE
        );
        // ... Muda o Icone do Botão
        ((JButton) e.getSource()).setIcon(copoc);
      } else {
        // Se este for o botão errado: Exibe mensagem e...
        Temporizador.exibirMensagem(
          TEMPO,
          "Voce errou!",
          JOptionPane.INFORMATION_MESSAGE
        );
        // ... Muda o Icone do Botão
        ((JButton) e.getSource()).setIcon(copoe);
      }
    }
  }

  public class Action_button2 implements ActionListener {

    public void actionPerformed(ActionEvent e) {
      if (num == 2) {
        // Se este for o botão certo: Exibe mensagem e...
        Temporizador.exibirMensagem(
          TEMPO,
          "Você Acertou!",
          JOptionPane.INFORMATION_MESSAGE
        );
        // ... Muda o Icone do Botão
        ((JButton) e.getSource()).setIcon(copoc);
      } else {
        // Se este for o botão errado: Exibe mensagem e...
        Temporizador.exibirMensagem(
          TEMPO,
          "Você errou!",
          JOptionPane.INFORMATION_MESSAGE
        );
        // ... Muda o Icone do Botão
        ((JButton) e.getSource()).setIcon(copoe);
      }
    }
  }

  public class Action_button3 implements ActionListener {

    public void actionPerformed(ActionEvent e) {
      if (num == 3) {
        // Se este for o botão certo: Exibe mensagem e...
        Temporizador.exibirMensagem(
          TEMPO,
          "Você Acertou!",
          JOptionPane.INFORMATION_MESSAGE
        );
        // ... Muda o Icone do Botão
        ((JButton) e.getSource()).setIcon(copoc);
      } else {
        // Se este for o botão errado: Exibe mensagem e...
        Temporizador.exibirMensagem(
          TEMPO,
          "Voce errou!",
          JOptionPane.INFORMATION_MESSAGE
        );
        // ... Muda o Icone do Botão
        ((JButton) e.getSource()).setIcon(copoe);
      }}
  }

  // Inicia o jogo
  public void iniciaJogo() {
      // Icone Default
      btn1.setIcon(copo);
      btn2.setIcon(copo);
      btn3.setIcon(copo);
      // Gera um número aleatório entre 1 e 3
      num = (int) (Math.random() * 3) + 1;
  }
}
