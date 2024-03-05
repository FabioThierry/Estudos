

import java.sql.*;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class MontaTela extends JPanel {
    private JPanel telaPanel;
    private JLabel ICodigo, INome, ISobrenome, ICidade, IEndereco, IEstado, ICep, Mensagem;
    public JTextField Sobrenome, Nome, Codigo, Endereco, Cidade, Estado, Cep;
    public MontaTela(){
        setLayout(null);
        ICodigo = new JLabel("Código");
        ICodigo.setBounds(15, 10, 70, 20);
        add(ICodigo);
        Codigo = new JTextField();
        Codigo.setBounds(95 , 10, 30, 20);
        Codigo.setEditable(false);
        add(Codigo);
        
        
        INome = new JLabel("Nome");
        INome.setBounds(15, 40, 70, 20);
        add(INome);
        Nome = new JTextField();
        Nome.setBounds(95 , 40, 300, 20);
        add(Nome);
        
        ISobrenome = new JLabel("Sobrenome");
        ISobrenome.setBounds(15, 70, 70, 20);
        add(ISobrenome);
        Sobrenome = new JTextField();
        Sobrenome.setBounds(95 , 70, 250, 20);
        add(Sobrenome);
        
        IEndereco = new JLabel("Endereço");
        IEndereco.setBounds(15, 100, 70, 20);
        add(IEndereco);
        Endereco = new JTextField();
        Endereco.setBounds(95 , 100, 400, 20);
        add(Endereco);
        
        ICidade = new JLabel("Cidade");
        ICidade.setBounds(15, 130, 70, 20);
        add(ICidade);
        Cidade = new JTextField();
        Cidade.setBounds(95 , 130, 200, 20);
        add(Cidade);
        
        IEstado = new JLabel("Estado");
        IEstado.setBounds(15, 160, 70, 20);
        add(IEstado);
        Estado = new JTextField();
        Estado.setBounds(95 , 160, 23, 20);
        add(Estado);
        
        ICep = new JLabel("Cep");
        ICep.setBounds(15, 190, 70, 20);
        add(ICep);
        Cep = new JTextField();
        Cep.setBounds(95 , 190, 70, 20);
        add(Cep);

        Mensagem = new JLabel("Formato de Preenchimento do CEP: 99999999999");
        Mensagem.setBounds(200, 190, 300, 20);
        add(Mensagem);
    } 
}
