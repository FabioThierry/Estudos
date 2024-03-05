import java.sql.*;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

// import CadastroFornecedores.src.MontaTela;

public class ConsultaRegistro implements ActionListener {
    private MontaTela campos;
    private JTextArea saida;
    private Connection conecta;
    private JButton limpa;

    public ConsultaRegistro (Connection c, MontaTela f, JTextArea o){
        conecta = c;
        campos = f;
        saida = o;

    }
    public void actionPerformed (ActionEvent e){
        try {
            if (!campos.Sobrenome.getText().equals("")){
                Statement consultaSQL = conecta.createStatement();
                String query = "SELECT * FROM fornecedores WHERE Sobrenome = " + campos.Sobrenome.getText()+"";

            } else {
                JOptionPane.showMessageDialog(null, "DIGITE O SOBRENOME", "ATENÇÃO", JOptionPane.ERROR_MESSAGE);
            }
        } catch (SQLException sqlex) {
            sqlex.printStackTrace();
            saida.append(sqlex.toString());
            
        }
    }
    public void display (ResultSet rs){
        try {
            rs.next();
            int registroNumero = rs.getInt(1);
            if(registroNumero !=0){
                campos.Codigo.setText(String.valueOf(registroNumero));
                campos.Nome.setText(rs.getString(2));
                campos.Sobrenome.setText(rs.getString(3));
                campos.Endereco.setText(rs.getString(4));
                campos.Cidade.setText(rs.getString(5));
                campos.Estado.setText(rs.getString(6));
                campos.Cep.setText(rs.getString(7));

            }else{
                saida.append("REGISTRO NÃO LOCALIZADO");
            }
        } catch (SQLException sqlex) {
            JOptionPane.showMessageDialog(null, "REGISTRO NÃO ENCONTRADO", "ATENÇÃO", JOptionPane.ERROR_MESSAGE);
            
        }
    }
}
