package com.witcher;

public class Bai_2 {

    private int n;

    public Bai_2(int n){
        this.n = n;
    }

    public double giaiPT(){
        double result = 0;
        for(int i =1;i<=n;i++){
            result = Math.sqrt(result + i);
        }
        return result;
    }
}
