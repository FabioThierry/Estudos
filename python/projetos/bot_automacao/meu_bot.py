import pyautogui
import pandas
import time

# variaveis
link = "https://dlp.hashtagtreinamentos.com/python/intensivao/login"

pyautogui.press("win")
time.sleep(1) 
pyautogui.write("edge")
pyautogui.press("enter")
time.sleep(1) 
pyautogui.write(link)
time.sleep(1) 
pyautogui.press("enter")
time.sleep(1) 
pyautogui.press("tab")
pyautogui.write("pindola@pindola.com.br")
pyautogui.press("tab")
pyautogui.write("pindola")
pyautogui.press("enter")
time.sleep(1) 
pyautogui.press("tab")


# importar a base de dados do produto
tabela = pandas.read_csv("projetos\\bot_automacao\produtos.csv")
print(tabela)
for row in tabela.index:
    pyautogui.press("home")
    pyautogui.click(x=3166, y=239)
    pyautogui.write(str(tabela.loc[row, "codigo"]))
    pyautogui.press("tab")
    pyautogui.write(str(tabela.loc[row, "marca"]))
    pyautogui.press("tab")
    pyautogui.write(str(tabela.loc[row, "tipo"]))
    pyautogui.press("tab")
    pyautogui.write(str(tabela.loc[row, "categoria"]))
    pyautogui.press("tab")
    pyautogui.write(str(tabela.loc[row, "preco_unitario"]))
    pyautogui.press("tab")
    pyautogui.write(str(tabela.loc[row, "custo"]))
    pyautogui.press("tab")
    if not pandas.isna(tabela.loc[row, "obs"]):
        pyautogui.write(str(tabela.loc[row, "obs"]))
        
    pyautogui.press("tab")
    pyautogui.press("enter")
    print("Código: " + str(tabela.loc[row, "codigo"]) + " cadastrado com sucesso!")

