import pandas as pd
import plotly.express as px
import os 

diretorio_atual = os.path.dirname(os.path.abspath(__file__))
caminho_pasta = os.path.join(diretorio_atual, "plotagens")
if os.path.exists(caminho_pasta):
    print("A pasta plotagens já existe no seu diretório!!!!!!")
else:
    print("pasta criada")
    os.mkdir(caminho_pasta)
    
tabela = pd.read_csv("python\projetos\\bot_analise_cancelamentos\cancelamentos.csv")
tabela = tabela.drop("CustomerID", axis=1)
print(tabela)

print(tabela.info())
tabela = tabela.dropna()
print(tabela.info())

print(tabela["cancelou"].value_counts())
print(tabela["cancelou"].value_counts(normalize=True).map("{:.1%}".format))

print(tabela["duracao_contrato"].value_counts(normalize=True).map("{:.1%}".format))
print(tabela["duracao_contrato"].value_counts())

print(tabela.groupby("duracao_contrato").mean(numeric_only=True))

tabela = tabela[tabela["duracao_contrato"]!="Monthly"]
print(tabela)
print(tabela["cancelou"].value_counts())
print(tabela["cancelou"].value_counts(normalize=True).map("{:.1%}".format))

print(tabela["assinatura"].value_counts(normalize=True))
print(tabela.groupby("assinatura").mean(numeric_only=True))


for coluna in tabela.columns:
    caminho_arquivo = os.path.join(caminho_pasta, f"historiograma_{coluna}.html" )
    print(caminho_arquivo+ "!!!!!!!!")
    grafico = px.histogram(tabela, x=coluna, color="cancelou", width=600)
    grafico.write_html(caminho_arquivo)
    
    
tabela = tabela[tabela["ligacoes_callcenter"]<5]
tabela = tabela[tabela["dias_atraso"]<20]
print(tabela)
print(tabela["cancelou"].value_counts())
print(tabela["cancelou"].value_counts(normalize=True).map("{:.1%}".format))
    