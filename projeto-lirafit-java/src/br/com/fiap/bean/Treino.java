package br.com.fiap.bean;

/**
 * Classe abstrata Treino
 * ----------------------
 * Representa o "molde" comum a todo treino do LiraFit (Home, Dashboard, Workouts
 * no front-end viram objetos Treino aqui no back-end).
 *
 * Conceitos de ADS aplicados:
 * - ABSTRAÇÃO: classe abstrata não pode ser instanciada diretamente
 * - ENCAPSULAMENTO: atributos private + getters/setters com validação
 * - HERANÇA: TreinoForca, TreinoCardio e TreinoFlexibilidade herdam daqui
 * - IMPLEMENTS: implementa a interface Treinavel (contrato)
 */
public abstract class Treino implements Treinavel {

    // ---- atributos encapsulados (private) ----
    private String nome;
    private int duracaoMinutos;
    private NivelIntensidade intensidade;
    private boolean concluido;

    // Construtor
    public Treino(String nome, int duracaoMinutos, NivelIntensidade intensidade) {
        this.nome = nome;
        this.setDuracaoMinutos(duracaoMinutos); // usa o setter pra já validar
        this.intensidade = intensidade;
        this.concluido = false;
    }

    // ---- Métodos concretos (implementação comum a todos os treinos) ----

    @Override
    public void iniciarTreino() {
        this.concluido = false;
        System.out.println("Treino \"" + nome + "\" iniciado! Foco total, Thay ");
    }

    @Override
    public void finalizarTreino() {
        this.concluido = true;
        System.out.println("Treino \"" + nome + "\" finalizado! Calorias gastas: "
                + String.format("%.1f", calcularCaloriasGastas()) + " kcal");
    }

    // Método abstrato: cada subclasse é OBRIGADA a implementar o cálculo dela
    // Isso é polimorfismo: o mesmo método se comporta diferente em cada filho
    @Override
    public abstract double calcularCaloriasGastas();

    // ---- Getters e Setters (encapsulamento) ----

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getDuracaoMinutos() {
        return duracaoMinutos;
    }

    public void setDuracaoMinutos(int duracaoMinutos) {
        if (duracaoMinutos <= 0) {
            throw new IllegalArgumentException("Duração deve ser maior que zero.");
        }
        this.duracaoMinutos = duracaoMinutos;
    }

    public NivelIntensidade getIntensidade() {
        return intensidade;
    }

    public void setIntensidade(NivelIntensidade intensidade) {
        this.intensidade = intensidade;
    }

    public boolean isConcluido() {
        return concluido;
    }

    @Override
    public String toString() {
        return String.format("%s [%s] - %d min - intensidade %s - %s",
                getClass().getSimpleName(), nome, duracaoMinutos, intensidade,
                concluido ? "concluído" : "pendente");
    }
}