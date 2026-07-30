from abc import ABC, abstractmethod


class Treino(ABC):
    def __init__(self, nome, duracao, nivel_intensidade):
        self.nome = nome
        self.duracao = duracao
        self.nivel_intensidade = nivel_intensidade

    @abstractmethod
    def descricao(self):
        pass


class TreinoCardio(Treino):
    def __init__(self, nome, duracao, nivel_intensidade, frequencia_cardiaca):
        super().__init__(nome, duracao, nivel_intensidade)
        self.frequencia_cardiaca = frequencia_cardiaca

    def descricao(self):
        return f"{self.nome} ({self.nivel_intensidade}) - {self.duracao}min | FC alvo: {self.frequencia_cardiaca}bpm"


class TreinoForca(Treino):
    def __init__(self, nome, duracao, nivel_intensidade, carga_kg):
        super().__init__(nome, duracao, nivel_intensidade)
        self.carga_kg = carga_kg

    def descricao(self):
        return f"{self.nome} ({self.nivel_intensidade}) - {self.duracao}min | Carga: {self.carga_kg}kg"


class TreinoFlexibilidade(Treino):
    def __init__(self, nome, duracao, nivel_intensidade, tipo_alongamento):
        super().__init__(nome, duracao, nivel_intensidade)
        self.tipo_alongamento = tipo_alongamento

    def descricao(self):
        return f"{self.nome} ({self.nivel_intensidade}) - {self.duracao}min | {self.tipo_alongamento}"


class Usuario:
    def __init__(self, nome, peso, altura):
        self.nome = nome
        self.peso = peso
        self.altura = altura
        self.treinos_realizados = []

    def calcular_imc(self):
        try:
            return self.peso / (self.altura ** 2)
        except ZeroDivisionError:
            print("Altura não pode ser zero.")
            return 0

    def classificar_imc(self):
        imc = self.calcular_imc()
        if imc < 18.5:
            return "Abaixo do peso"
        elif imc < 25:
            return "Peso normal"
        elif imc < 30:
            return "Sobrepeso"
        else:
            return "Obesidade"

    def registrar_treino(self, treino):
        self.treinos_realizados.append(treino)

    def resumo(self):
        print(f"\n--- Resumo de {self.nome} ---")
        print(f"IMC: {self.calcular_imc():.2f} ({self.classificar_imc()})")
        print(f"Treinos realizados: {len(self.treinos_realizados)}")
        for treino in self.treinos_realizados:
            print(f"  - {treino.descricao()}")


class Meta:
    def __init__(self, descricao, valor_alvo, valor_atual):
        self.descricao = descricao
        self.valor_alvo = valor_alvo
        self.valor_atual = valor_atual

    def progresso(self):
        try:
            return (self.valor_atual / self.valor_alvo) * 100
        except ZeroDivisionError:
            print("Valor alvo não pode ser zero.")
            return 0

    def concluida(self):
        return self.valor_atual >= self.valor_alvo


def pedir_numero(mensagem, tipo=float):
    while True:
        try:
            return tipo(input(mensagem))
        except ValueError:
            print("Valor inválido. Digite um número válido.")

def pedir_numero(mensagem, tipo=float):
    while True:
        try:
            entrada = input(mensagem).replace(",", ".")
            return tipo(entrada)
        except ValueError:
            print("Valor inválido. Digite um número válido.")


def pedir_numero_positivo(mensagem, tipo=float):
    while True:
        valor = pedir_numero(mensagem, tipo)  
        if valor > 0:
            return valor
        print("O valor deve ser maior que zero.")


def pedir_texto(mensagem):
    
    while True:
        texto = input(mensagem).strip()
        if texto:
            return texto
        print("Esse campo não pode ficar vazio.")


def pedir_opcao(mensagem, opcoes_validas):

    while True:
        escolha = input(mensagem).strip()
        if escolha in opcoes_validas:
            return escolha
        print(f"Opção inválida. Escolha entre: {', '.join(opcoes_validas)}")


def escolher_treino():
    print("\nTipos de treino: 1) Cardio  2) Força  3) Flexibilidade")
    tipo = pedir_opcao("Escolha o tipo (1/2/3): ", ["1", "2", "3"])

    nome = pedir_texto("Nome do treino: ")
    duracao = pedir_numero("Duração (min): ", tipo=int)
    nivel = pedir_texto("Nível de intensidade (Baixa/Media/Alta): ")

    if tipo == "1":
        fc = pedir_numero("Frequência cardíaca alvo (bpm): ", tipo=int)
        return TreinoCardio(nome, duracao, nivel, fc)
    elif tipo == "2":
        carga = pedir_numero("Carga (kg): ")
        return TreinoForca(nome, duracao, nivel, carga)
    else:
        alongamento = pedir_texto("Tipo de alongamento: ")
        return TreinoFlexibilidade(nome, duracao, nivel, alongamento)


if __name__ == "__main__":
    print("=== Cadastro de usuário para o Lira fit ===")
    nome = pedir_texto("Nome: ")
    peso = pedir_numero("Peso (kg): ")
    altura = pedir_numero("Altura (m): ")

    usuario = Usuario(nome, peso, altura)

    while True:
        usuario.registrar_treino(escolher_treino())
        continuar = pedir_opcao("\nAdicionar outro treino? (s/n): ", ["s", "n"])
        if continuar == "n":
            break

    usuario.resumo()

    print("\n=== Cadastro de meta ===")
    desc_meta = pedir_texto("Descrição da meta: ")
    valor_alvo = pedir_numero("Valor alvo: ")
    valor_atual = pedir_numero("Valor atual: ")

    meta = Meta(desc_meta, valor_alvo, valor_atual)
    print(f"\nMeta: {meta.descricao}")
    print(f"Progresso: {meta.progresso():.0f}%")
    print("Concluída!" if meta.concluida() else "Ainda em andamento")