import java.sql.*;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;


public class adicionaRegistro implements ActionListener {
    private MontaTela campos;
    private JTextArea saida;
    private Connection conecta;
    
    public adicionaRegistro(Connection c, MontaTela f, JTextArea o){
        conecta = c;
        campos = f;
        saida = o;
    }
    public void actionPerformed(ActionEvent e){
        try{

        
        Statement executaSQL = conecta.createStatement();
        if(!campos.Sobrenome.getText().equals("") && !campos.Nome.getText().equals("")){
            String query = "INSERT INTO fornecedores (Nome, SobreNome, Endereco, Cidade, Estado, Cep)" + "VALUES (" + campos.Nome.getText() + "," + campos.Sobrenome.getText() + "," + campos.Endereco.getText() + "," + campos.Cidade.getText() + "," + campos.Estado.getText() + "," + campos.Cep.getText() + ")"; 
            int result = executaSQL.executeUpdate(query);

            if (result == 1) {
                saida.append("INSERIDO COM SUCESSO");
                campos.Nome.setText("");
                campos.Sobrenome.setText("");
                campos.Endereco.setText("");
                campos.Cidade.setText("");
                campos.Estado.setText("");
                campos.Cep.setText("");
            } else {
                saida.append("ERRO NA INCLUSÃO");
                campos.Nome.setText("");
                campos.Sobrenome.setText("");
                campos.Endereco.setText("");
                campos.Cidade.setText("");
                campos.Estado.setText("");
                campos.Cep.setText("");
            } 

            } else { 
                JOptionPane.showMessageDialog(null, "PREENCHA OS CAMPOS", "ATENÇÃO", JOptionPane.ERROR_MESSAGE);
                executaSQL.close();
        }
    }  
    catch(SQLException sqlex){
        sqlex.printStackTrace();
        saida.append(sqlex.toString());

}
    }
}
