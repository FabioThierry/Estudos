import java.sql.*;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

// import CadastroFornecedores.src.MontaTela;


public class apagarRegistro implements ActionListener {
    private MontaTela campos;
    private JTextArea saida;
    private Connection conecta;

    public apagarRegistro(Connection c, MontaTela f, JTextArea o ){
        conecta = c;
        campos = f;
        saida = o;

    }
    public void actionPerformed(ActionEvent e){
        try {
            Statement apagarSQL = conecta.createStatement();
            if (!campos.Codigo.getText().equals("")){
                String query = "DELETE FROM fornecedores WHERE Codigo =" + campos.Codigo.getText();
                int result = apagarSQL.executeUpdate(query);
                if (result == 1){
                    campos.Nome.setText("");
                    campos.Sobrenome.setText("");
                    campos.Cidade.setText("");
                    campos.Estado.setText("");
                    campos.Cep.setText("");
                    JOptionPane.showMessageDialog(null, "Deletado com Sucesso", "Atenção", JOptionPane.ERROR_MESSAGE);
                }  else{
                    JOptionPane.showMessageDialog(null, "Não deletado", "Atenção", JOptionPane.ERROR_MESSAGE);
                } 
                apagarSQL.close();
            } else {
                JOptionPane.showMessageDialog(null, "Consulte um registro", "Atenção", JOptionPane.ERROR_MESSAGE);
            }
        } catch (SQLException sqlex) {
            JOptionPane.showMessageDialog(null, "Ocorreu algum erro", "Atenção", JOptionPane.ERROR_MESSAGE);
            
        }
    }
}
