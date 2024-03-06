import java.text.DecimalFormat;
import javax.swing.JOptionPane;

public class App {

  public static void main(String[] args) {
    int escolha;
    double notasLidas;
    double media;
    double total;
    double alunos;
    double valorNota;
    String quantidade;
    String nota;
    String continua;
    String exibir;

    escolha = 1;
    while (escolha != 0) {
      total = 0;
      notasLidas = 1;

      quantidade =
        JOptionPane.showInputDialog(
          "Qual o Número de Alunos? <entre com a número intreira>:"
        );
      alunos = Double.parseDouble(quantidade);
      while (notasLidas <= alunos) {
        nota = JOptionPane.showInputDialog("Digite a Nota:");
        valorNota = Double.parseDouble(nota);
        total = total + valorNota;
        notasLidas = notasLidas + 1;
      }
      media = total / alunos;
      DecimalFormat mostraDecimal = new DecimalFormat("0");
      exibir = ("A média da Classe é:") + mostraDecimal.format(media);
      JOptionPane.showMessageDialog(
        null,
        exibir,
        "Média da Classe",
        JOptionPane.INFORMATION_MESSAGE
      );
      continua =
        JOptionPane.showInputDialog(
          "Efetuar outro Cálculo?<0 = Sair / 1 = Continuar>"
        );
      escolha = Integer.parseInt(continua);
    }
    System.exit(0);
  }
}
