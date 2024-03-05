import java.sql.*;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

// import CadastroFornecedores.src.MontaTela;

public class alteraRegistro implements ActionListener {
    private MontaTela campos;
    private JTextArea saida;
    private Connection conecta;

    public alteraRegistro(Connection c, MontaTela f, JTextArea o){
        conecta = c;
        campos = f;
        saida = o;

    }

    public void actionPerformed (ActionEvent e){
        try {
            Statement alteraSQL = conecta.createStatement();
            if(!campos.Codigo.getText().equals("")){
                String query = "UPDATE fornecedores SET Nome = " + campos.Nome.getText() + ", Sobrenome=" + campos.Sobrenome.getText() + ", Endereço=" + campos.Endereco.getText() + ", Cep=" + campos.Cep.getText() + ", WHERE Codigo=" + campos.Codigo.getText();
                int result = alteraSQL.executeUpdate(query);
                if (result == 1) {
                    JOptionPane.showMessageDialog(null, "Alterado com Sucesso","Atenção", JOptionPane.ERROR_MESSAGE);
                } else {
                    JOptionPane.showMessageDialog(null, "Não Alterado", "Atenção", JOptionPane.ERROR_MESSAGE);
                    campos.Nome.setText("");
                    campos.Sobrenome.setText("");
                    campos.Endereco.setText("");
                    campos.Cidade.setText("");
                    campos.Estado.setText("");
                    campos.Cep.setText("");
                }
                alteraSQL.close();
                JOptionPane.showMessageDialog(null, "Clique em Consultar", "Atenção", JOptionPane.ERROR_MESSAGE);

            }
        } catch (SQLException sqlex) {
            sqlex.printStackTrace();
            saida.append(sqlex.toString());
            
        }
    }

}
