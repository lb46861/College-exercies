package com.example.exercise4android.Model;

public class Course {
    private Integer godina;
    private String ime;
    private String predavac;

    public Course() {
    }

    public Course(Integer godina, String ime, String predavac) {
        this.godina = godina;
        this.ime = ime;
        this.predavac = predavac;
    }

    public Integer getGodina() {
        return godina;
    }

    public void setGodina(Integer godina) {
        this.godina = godina;
    }

    public String getIme() {
        return ime;
    }

    public void setIme(String ime) {
        this.ime = ime;
    }

    public String getPredavac() {
        return predavac;
    }

    public void setPredavac(String predavac) {
        this.predavac = predavac;
    }
}
