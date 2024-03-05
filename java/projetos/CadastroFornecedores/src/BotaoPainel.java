import javax.swing.JPanel;
import java.sql.*;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class BotaoPainel extends JPanel{
    private JButton consultar, adicionar, alterar, limpar, apagar;
    public BotaoPainel(Connection c, MontaTela s, JTextArea t){
        setLayout(new GridLayout(1, 5));
        adicionar = new JButton("Adicionar");
        add(adicionar);
        consultar = new JButton("Consultar");
        add(consultar);
        alterar = new JButton("Alterar");
        add(alterar);
        apagar = new JButton("Apagar");
        add(apagar);
        limpar = new JButton("Limpar");
        add(limpar);
    }
}
