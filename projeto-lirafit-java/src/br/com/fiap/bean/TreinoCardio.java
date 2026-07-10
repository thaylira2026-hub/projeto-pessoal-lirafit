package br.com.fiap.bean;

/**
 * TreinoCardio (corrida, bike, etc.)
 * ----------------------------------
 * HERANÇA + POLIMORFISMO: mesma "família" de Treino, cálculo de calorias diferente.
 */
public class TreinoCardio extends Treino {

    private double distanciaKm;

    public TreinoCardio(String nome, int duracaoMinutos, NivelIntensidade intensidade, double distanciaKm) {
        super(nome, duracaoMinutos, intensidade);
        this.distanciaKm = distanciaKm;
    }

    @Override
    public double calcularCaloriasGastas() {
        // cardio gasta mais calorias por minuto + bônus por distância percorrida
        return (getDuracaoMinutos() * getIntensidade().getFatorCalorico() * 1.2)
                + (distanciaKm * 10);
    }

    public double getDistanciaKm() {
        return distanciaKm;
    }

    public void setDistanciaKm(double distanciaKm) {
        this.distanciaKm = distanciaKm;
    }
}