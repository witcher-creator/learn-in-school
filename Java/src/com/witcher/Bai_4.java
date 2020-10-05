package com.witcher;

public class Bai_4 {

    private double a,b,c;

    public Bai_4(double a, double b, double c){
        this.a=a;
        this.b=b;
        this.c=c;
    }

    public String toString(){
        return a+"X^2 + "+b+"X +"+c+" = 0";
    }

    public void giaiPT(){
        double delta = b*b - 4*a*c;
        if(delta > 0){
            System.out.println("Phương trình có 2 nghiệm phân biệt");
            System.out.println("x_1 = " + (-b-Math.sqrt(delta))/(2*a));
            System.out.println("x_2 = " + (-b+Math.sqrt(delta))/(2*a));
        }else if(delta == 0){
            System.out.println("Phương trình có nghiệm kép");
            System.out.println("x_1 = x_2 =" + (-b-Math.sqrt(delta))/(2*a));
        }else {
            System.out.println("Phương trình vô nghiệm");
        }
    }
}
