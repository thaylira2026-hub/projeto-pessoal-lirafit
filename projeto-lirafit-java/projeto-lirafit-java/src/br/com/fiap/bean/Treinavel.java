package br.com.fiap.bean;

/**
 * Interface Treinavel
 * ---------------------
 * Define o "contrato" que qualquer tipo de treino do LiraFit precisa seguir.
 * Toda classe que implementar essa interface é OBRIGADA a fornecer
 * uma implementação para esses métodos.
 *
 * Conceito de ADS aplicado: INTERFACE (contrato / abstração total)
 */
public interface Treinavel {

    void iniciarTreino();

    void finalizarTreino();

    // Cada tipo de treino calcula caloria de um jeito diferente -> polimorfismo
    double calcularCaloriasGastas();
}