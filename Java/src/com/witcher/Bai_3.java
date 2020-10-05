package com.witcher;

public class Bai_3 {
    private double a;
    private double b;

    public Bai_3(double a, double b){
        this.a = a;
        this.b = b;
    }

    public String toString(){
        return a+"x + " + b + "=0";
    }

    public double giaiPT(){
        return -b/a;
    }
}
