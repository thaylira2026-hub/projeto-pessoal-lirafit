import tkinter as tk
from tkinter import messagebox

# === LÓGICA DE PROGRAMAÇÃO (O CÉREBRO) ===

def calcular_evolucao():
    try:
        # Pega e converte os dados digitados na tela
        nome = entry_nome.get().strip()
        peso = float(entry_peso.get())
        objetivo = var_objetivo.get()
        
        supino = float(entry_supino.get())
        agachamento = float(entry_agachamento.get())
        leg = float(entry_leg.get())
        
        if not nome:
            messagebox.showwarning("Aviso", "Por favor, digite seu nome.")
            return

        # Condicionais (IF/ELIF) para as calorias
        if objetivo == "Ganhar Massa":
            calorias = peso * 35
        elif objetivo == "Emagrecer":
            calorias = peso * 25
        else:
            calorias = peso * 30

        # Criação do texto do relatório final
        relatorio = f"RELATÓRIO LIRA FIT - {nome.upper()}\n"
        relatorio += f"Meta Diária: {calorias:.0f} kcal\n"
        relatorio += "-" * 40 + "\n"
        relatorio += "PROJEÇÃO DE CARGAS (+10% ao mês):\n\n"

        # Dicionário e Loops (FOR) para calcular a progressão de 3 meses
        exercicios = {"Supino": supino, "Agachamento": agachamento, "Leg Press": leg}
        
        for ex, carga in exercicios.items():
            relatorio += f"{ex}:\n"
            carga_mes = carga
            for mes in range(1, 4):
                carga_mes = carga_mes * 1.10
                relatorio += f"  Mês {mes}: {carga_mes:.1f} kg\n"
            relatorio += "\n"

        # Limpa o campo de texto da tela e insere o relatório novo
        txt_resultado.delete("1.0", tk.END)
        txt_resultado.insert(tk.END, relatorio)

    except ValueError:
        messagebox.showerror("Erro", "Por favor, digite apenas números válidos nos campos de peso e cargas.")

# === INTERFACE GRÁFICA (O VISUAL DO APLICATIVO) ===

app = tk.Tk()
app.title("Lira Fit - Evolução de Cargas")
app.geometry("450x600")

# Campos de entrada de dados (Labels e Entrys)
tk.Label(app, text="Nome:", font=("Arial", 10, "bold")).pack(pady=2)
entry_nome = tk.Entry(app, font=("Arial", 10))
entry_nome.pack(pady=2)

tk.Label(app, text="Peso Atual (kg):", font=("Arial", 10, "bold")).pack(pady=2)
entry_peso = tk.Entry(app, font=("Arial", 10))
entry_peso.pack(pady=2)

tk.Label(app, text="Objetivo:", font=("Arial", 10, "bold")).pack(pady=2)
var_objetivo = tk.StringVar(value="Ganhar Massa")
tk.OptionMenu(app, var_objetivo, "Ganhar Massa", "Emagrecer", "Condicionamento").pack(pady=2)

# Seção de cargas
tk.Label(app, text="\n--- CARGAS ATUAIS (kg) ---", font=("Arial", 10, "bold")).pack()

tk.Label(app, text="Supino:").pack()
entry_supino = tk.Entry(app, font=("Arial", 10))
entry_supino.pack()

tk.Label(app, text="Agachamento:").pack()
entry_agachamento = tk.Entry(app, font=("Arial", 10))
entry_agachamento.pack()

tk.Label(app, text="Leg Press:").pack()
entry_leg = tk.Entry(app, font=("Arial", 10))
entry_leg.pack()

# Botão para disparar o cálculo
btn_calcular = tk.Button(app, text="CALCULAR PROGRESSÃO", command=calcular_evolucao, bg="#A020F0", fg="white", font=("Arial", 10, "bold"))
btn_calcular.pack(pady=15)

# Caixa de texto para exibir o resultado final estruturado
txt_resultado = tk.Text(app, height=12, width=50, font=("Courier", 10))
txt_resultado.pack(pady=10)

# Inicia a janela do aplicativo na tela
app.mainloop()