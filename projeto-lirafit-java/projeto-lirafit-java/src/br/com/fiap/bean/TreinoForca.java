package br.com.fiap.bean;

/**
 * TreinoForca (musculação)
 * ------------------------
 * HERANÇA: estende Treino, reaproveitando nome, duração, intensidade etc.
 * POLIMORFISMO: implementa calcularCaloriasGastas() do seu próprio jeito.
 */
public class TreinoForca extends Treino {

    private int cargaTotalKg; // carga usada no treino (soma dos pesos)

    public TreinoForca(String nome, int duracaoMinutos, NivelIntensidade intensidade, int cargaTotalKg) {
        super(nome, duracaoMinutos, intensidade); // chama o construtor da classe pai
        this.cargaTotalKg = cargaTotalKg;
    }

    @Override
    public double calcularCaloriasGastas() {
        // fórmula fictícia: duração * fator da intensidade + bônus por carga
        return (getDuracaoMinutos() * getIntensidade().getFatorCalorico())
                + (cargaTotalKg * 0.05);
    }

    public int getCargaTotalKg() {
        return cargaTotalKg;
    }

    public void setCargaTotalKg(int cargaTotalKg) {
        this.cargaTotalKg = cargaTotalKg;
    }
}