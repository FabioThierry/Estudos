

import java.sql.*;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.ScrollPaneLayout;
import java.sql.Connection;
import java.sql.DriverManager;
import java.awt.event.*;


public class Fornecedores extends JFrame{
    private JTextArea saida;
    private JScrollPane painelTexto;
    private BotaoPainel controles;
    private Connection conecta;
    private MontaTela mostraTela;
    private String url;

public Fornecedores(){
    setTitle("Cadrastro de Fornecedores");
    Container tela = getContentPane();
    mostraTela = new MontaTela();
    saida = new JTextArea();
    tela.setLayout(new BorderLayout());
    tela.add(new JScrollPane(mostraTela), BorderLayout.CENTER);
    painelTexto = new JScrollPane(saida);
    tela.add(painelTexto, BorderLayout.SOUTH);

    controles = new BotaoPainel(conecta, mostraTela, saida);
    tela.add(controles, BorderLayout.NORTH);
    setSize(550, 350);
    try{
        url = "jdbc:odbc:fornecedores";
        // Class.forName("sun.jdbc.odbc.jdcodbcdriver");
        conecta = DriverManager.getConnection(url);
        saida.append("Conexão Efetuada");
    }
    catch(ClassCastException e){
        saida.append("Não foi possível efetuar");
    }
    catch(SQLException d){
        saida.append("Não foi possível conectar no Banco de Dados");
    }

    addWindowListener(new WindowAdapter() {
        public void windowClosing(WindowEvent e){
            System.exit(0);
        }
    });
}
    public static void main (String args[]){
    new Fornecedores().setVisible(true);
}
};