package br.com.fiap.main;

import br.com.fiap.bean.*;
import javax.swing.JOptionPane;

/**
 * LiraFitApp
 * ----------
 * Classe principal: conecta TODAS as classes do pacote bean.
 * Fluxo de dependências (quem usa quem):
 *   Treinavel (interface)
 *        ↑ implements
 *      Treino (abstrata)
 *        ↑ extends
 *   TreinoForca / TreinoCardio / TreinoFlexibilidade
 *        ↑ usados dentro de
 *      Usuario (guarda uma lista de Treino)
 *        ↑ usado junto com
 *      Meta (acompanha o progresso de calorias do Usuario)
 * O LiraFitApp é quem "junta" tudo isso e dá vida ao sistema.
 */
public class LiraFitApp {

    static Usuario usuario;
    static Meta metaSemanal;

    public static void main(String[] args) {

        JOptionPane.showMessageDialog(null, "===== Bem-vindo(a) ao LiraFit! =====");

        criarUsuario();
        criarMeta();

        int opcao;
        do {
            opcao = exibirMenu();

            switch (opcao) {
                case 0 -> adicionarTreino();
                case 1 -> exibirResumo();
                case 2 -> exibirProgressoMeta();
                case 3 -> JOptionPane.showMessageDialog(null,
                        "Até a próxima, " + usuario.getNome() + "!");
                default -> opcao = 3; // fechou a janela (X) -> sai
            }

        } while (opcao != 3);
    }

    // ================= CRIAÇÃO DO USUÁRIO =================
    // Usa: Usuario
    private static void criarUsuario() {
        String nome = JOptionPane.showInputDialog("Digite seu nome:");
        double peso = lerDouble("Digite seu peso (kg):");
        double altura = lerDouble("Digite sua altura (m), ex: 1.65");

        usuario = new Usuario(nome, peso, altura);

        JOptionPane.showMessageDialog(null,
                String.format("Usuário criado!%nIMC atual: %.2f", usuario.calcularIMC()));
    }

    // ================= CRIAÇÃO DA META =================
    // Usa: Meta
    private static void criarMeta() {
        double alvo = lerDouble("Quantas calorias você quer gastar essa semana? (meta)");
        String descricao = "Gastar " + (int) alvo + " kcal essa semana";
        metaSemanal = new Meta(descricao, alvo);

        JOptionPane.showMessageDialog(null, "Meta criada: " + descricao);
    }

    // ================= MENU PRINCIPAL =================
    private static int exibirMenu() {
        String[] opcoes = {
                "Adicionar treino",
                "Ver resumo de treinos",
                "Ver progresso da meta",
                "Sair"
        };
        return JOptionPane.showOptionDialog(
                null,
                "O que você quer fazer, " + usuario.getNome() + "?",
                "Menu LiraFit",
                JOptionPane.DEFAULT_OPTION,
                JOptionPane.QUESTION_MESSAGE,
                null,
                opcoes,
                opcoes[0]
        );
    }

    // ================= ADICIONAR TREINO =================
    // Usa: Treino (abstrata), TreinoForca, TreinoCardio, TreinoFlexibilidade,
    //      NivelIntensidade (enum), Usuario, Meta
    private static void adicionarTreino() {
        String[] tipos = {"Força (musculação)", "Cardio", "Flexibilidade"};
        int tipo = JOptionPane.showOptionDialog(
                null, "Escolha o tipo de treino:", "Novo Treino",
                JOptionPane.DEFAULT_OPTION, JOptionPane.QUESTION_MESSAGE,
                null, tipos, tipos[0]
        );
        if (tipo == -1) return;

        String nomeTreino = JOptionPane.showInputDialog("Nome do treino:");
        int duracao = lerInteiro("Duração (minutos):");
        NivelIntensidade intensidade = lerIntensidade();

        // "Treino" é o tipo declarado (classe abstrata / classe-pai),
        // mas o objeto de verdade criado é sempre de uma subclasse concreta.
        // Isso é polimorfismo: a variável é genérica, o comportamento é específico.
        Treino treino;

        switch (tipo) {
            case 0 -> {
                int carga = lerInteiro("Carga total levantada (kg):");
                treino = new TreinoForca(nomeTreino, duracao, intensidade, carga);
            }
            case 1 -> {
                double distancia = lerDouble("Distância percorrida (km):");
                treino = new TreinoCardio(nomeTreino, duracao, intensidade, distancia);
            }
            case 2 -> {
                int poses = lerInteiro("Quantidade de poses/posições:");
                treino = new TreinoFlexibilidade(nomeTreino, duracao, intensidade, poses);
            }
            default -> {
                return;
            }
        }

        // Treinavel: os métodos abaixo vêm da interface, implementados em Treino
        treino.iniciarTreino();
        treino.finalizarTreino();

        // Usuario guarda o treino na lista
        usuario.adicionarTreino(treino);

        // Meta é atualizada automaticamente com as calorias desse treino
        metaSemanal.registrarProgresso(treino.calcularCaloriasGastas());

        JOptionPane.showMessageDialog(null,
                String.format("Treino \"%s\" registrado!%nCalorias gastas: %.1f kcal",
                        treino.getNome(), treino.calcularCaloriasGastas()));
    }

    // ================= RESUMO DE TREINOS =================
    // Usa: Usuario, Treino (polimorfismo no toString de cada subclasse)
    private static void exibirResumo() {
        StringBuilder sb = new StringBuilder();
        sb.append("===== Resumo de ").append(usuario.getNome()).append(" =====\n");
        sb.append(String.format("IMC atual: %.2f%n", usuario.calcularIMC()));
        sb.append("Treinos registrados: ").append(usuario.getTreinos().size()).append("\n\n");

        for (Treino t : usuario.getTreinos()) {
            sb.append("- ").append(t).append("\n"); // toString() sobrescrito em cada subclasse
        }

        sb.append(String.format("%nTotal de calorias gastas: %.1f kcal",
                usuario.calcularTotalCaloriasGastas()));

        JOptionPane.showMessageDialog(null, sb.toString());
    }

    // ================= PROGRESSO DA META =================
    // Usa: Meta
    private static void exibirProgressoMeta() {
        String status = metaSemanal.isConcluida() ? "atingida! " : "em andamento";

        String mensagem = String.format(
                "Meta: %s%nProgresso: %.1f / %.1f kcal (%.1f%%)%nStatus: %s",
                metaSemanal.getDescricao(),
                metaSemanal.getCaloriasAtuais(),
                metaSemanal.getCaloriasAlvo(),
                metaSemanal.getPercentualConcluido(),
                status
        );

        JOptionPane.showMessageDialog(null, mensagem);
    }

    // ================= HELPERS DE LEITURA COM VALIDAÇÃO =================

    private static int lerInteiro(String mensagem) {
        while (true) {
            String entrada = JOptionPane.showInputDialog(mensagem);
            try {
                return Integer.parseInt(entrada);
            } catch (NumberFormatException e) {
                JOptionPane.showMessageDialog(null, "Digite um número inteiro válido.");
            }
        }
    }

    private static double lerDouble(String mensagem) {
        while (true) {
            String entrada = JOptionPane.showInputDialog(mensagem);
            try {
                return Double.parseDouble(entrada.replace(",", "."));
            } catch (NumberFormatException e) {
                JOptionPane.showMessageDialog(null, "Digite um número válido (ex: 5.2).");
            }
        }
    }

    private static NivelIntensidade lerIntensidade() {
        String[] niveis = {"Leve", "Moderado", "Intenso"};
        int op = JOptionPane.showOptionDialog(
                null, "Escolha a intensidade:", "Intensidade",
                JOptionPane.DEFAULT_OPTION, JOptionPane.QUESTION_MESSAGE,
                null, niveis, niveis[0]
        );

        return switch (op) {
            case 0 -> NivelIntensidade.LEVE;
            case 1 -> NivelIntensidade.MODERADO;
            case 2 -> NivelIntensidade.INTENSO;
            default -> NivelIntensidade.LEVE;
        };
    }
}
