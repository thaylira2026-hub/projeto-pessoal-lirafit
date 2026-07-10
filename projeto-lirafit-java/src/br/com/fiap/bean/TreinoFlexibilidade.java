package br.com.fiap.bean;

/**
 * TreinoFlexibilidade (alongamento, yoga, etc.)
 * ----------------------------------------------
 * Terceira variação da família Treino -> reforça o polimorfismo:
 * três classes filhas, três comportamentos diferentes para o mesmo método.
 */
public class TreinoFlexibilidade extends Treino {

    private int quantidadePoses;

    public TreinoFlexibilidade(String nome, int duracaoMinutos, NivelIntensidade intensidade, int quantidadePoses) {
        super(nome, duracaoMinutos, intensidade);
        this.quantidadePoses = quantidadePoses;
    }

    @Override
    public double calcularCaloriasGastas() {
        // gasto calórico mais baixo, com pequeno bônus por quantidade de poses
        return (getDuracaoMinutos() * getIntensidade().getFatorCalorico() * 0.6)
                + (quantidadePoses * 1.5);
    }

    public int getQuantidadePoses() {
        return quantidadePoses;
    }

    public void setQuantidadePoses(int quantidadePoses) {
        this.quantidadePoses = quantidadePoses;
    }
}