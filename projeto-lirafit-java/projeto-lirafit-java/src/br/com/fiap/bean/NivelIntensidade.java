package br.com.fiap.bean;

/**
 * Enum NivelIntensidade
 * ---------------------
 * Representa os níveis possíveis de intensidade de um treino no LiraFit.
 * Usar enum em vez de String evita erro de digitação ("Leve", "leve", "LEVE"...)
 * e deixa o código mais seguro e legível.
 */
public enum NivelIntensidade {
    LEVE(4.0),
    MODERADO(7.0),
    INTENSO(10.0);

    // fator usado no cálculo de calorias (quanto maior, mais calorias por minuto)
    private final double fatorCalorico;

    NivelIntensidade(double fatorCalorico) {
        this.fatorCalorico = fatorCalorico;
    }

    public double getFatorCalorico() {
        return fatorCalorico;
    }
}