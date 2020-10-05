package com.witcher;

public class Bai_1 {
    private double x;
    private int n;
    private double result = 0;

    public Bai_1(int n, double x){
        this.x = x;
        this.n = n;
    }

    public double giaiPT(){
        for(int i = 1;i<=this.n;i++) {
            result += (power(this.x, i)) / factorials(i);
        }
        return result;
    }

    private double factorials(int tmp){
        if(tmp == 1)
            return 1;
        return tmp*factorials(tmp-1);
    }

    // Sử dụng công thức truy hồi
    /*
        x^n = (x^(n/2))^2 khi n chẳn
    và
        x^n = x(x^((n-1)/2))^2 khi n lẽ
    */
    private double sqr(double x){
        return x*x;
    }

    private double power(double x, int i){
        if(i==0) return 1;
        else{
            if(i%2==0)
                return sqr(power(x, i/2));
            else
                return x*(sqr(power(x,i/2)));
        }
    }
}
