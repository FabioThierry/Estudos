import java.sql.*;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

// import CadastroFornecedores.src.MontaTela;


public class limparRegistro implements ActionListener {
    private MontaTela campos;

    public limparRegistro(MontaTela f){
        campos = f;
    }
    public void actionPerformed (ActionEvent e){
        campos.Nome.setText("");
        campos.Sobrenome.setText("");
        campos.Endereco.setText("");
        campos.Cidade.setText("");
        campos.Estado.setText("");
        campos.Cep.setText("");
    }

}
