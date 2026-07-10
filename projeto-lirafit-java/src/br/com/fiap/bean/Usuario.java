package br.com.fiap.bean;

import java.util.ArrayList;
import java.util.List;

/**
 * Classe Usuario
 * --------------
 * Representa a pessoa usando o LiraFit. Guarda uma lista de treinos (Treino),
 * o que permite trabalhar com qualquer subtipo (Força, Cardio, Flexibilidade)
 * de forma polimórfica dentro da mesma lista.
 * Conceito de ADS aplicado: ENCAPSULAMENTO + COMPOSIÇÃO (Usuario "tem" Treinos)
 */
public class Usuario {

    private String nome;
    private double pesoKg;
    private double alturaM;
    private List<Treino> treinos;

    public Usuario(String nome, double pesoKg, double alturaM) {
        this.nome = nome;
        this.pesoKg = pesoKg;
        this.alturaM = alturaM;
        this.treinos = new ArrayList<>();
    }

    public void adicionarTreino(Treino treino) {
        treinos.add(treino);
    }

    public double calcularIMC() {
        return pesoKg / (alturaM * alturaM);
    }

    // Soma o gasto calórico de TODOS os treinos, chamando o método polimórfico
    // calcularCaloriasGastas() de cada um, sem precisar saber o tipo exato.
    public double calcularTotalCaloriasGastas() {
        double total = 0;
        for (Treino t : treinos) {
            total += t.calcularCaloriasGastas();
        }
        return total;
    }

    public List<Treino> getTreinos() {
        return treinos;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getPesoKg() {
        return pesoKg;
    }

    public void setPesoKg(double pesoKg) {
        if (pesoKg <= 0) throw new IllegalArgumentException("Peso inválido.");
        this.pesoKg = pesoKg;
    }

    public double getAlturaM() {
        return alturaM;
    }

    public void setAlturaM(double alturaM) {
        if (alturaM <= 0) throw new IllegalArgumentException("Altura inválida.");
        this.alturaM = alturaM;
    }
}
