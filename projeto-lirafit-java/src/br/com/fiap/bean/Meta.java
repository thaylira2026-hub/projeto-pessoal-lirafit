package br.com.fiap.bean;

/**
 * Classe Meta
 * Representa uma meta do usuário no LiraFit (ex: "gastar 2000 kcal essa semana").
 */
public class Meta {

    private String descricao;
    private double caloriasAlvo;
    private double caloriasAtuais;

    public Meta(String descricao, double caloriasAlvo) {
        this.descricao = descricao;
        this.caloriasAlvo = caloriasAlvo;
        this.caloriasAtuais = 0;
    }

    public void registrarProgresso(double calorias) {
        this.caloriasAtuais += calorias;
    }

    public boolean isConcluida() {
        return caloriasAtuais >= caloriasAlvo;
    }

    public double getPercentualConcluido() {
        return Math.min(100.0, (caloriasAtuais / caloriasAlvo) * 100);
    }

    public String getDescricao() {
        return descricao;
    }

    public double getCaloriasAlvo() {
        return caloriasAlvo;
    }

    public double getCaloriasAtuais() {
        return caloriasAtuais;
    }
}
