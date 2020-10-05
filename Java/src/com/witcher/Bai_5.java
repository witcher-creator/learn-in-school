package com.witcher;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class Bai_5 {
    private int rows;
    private int cols;
    private double[][] matrix;

    public Bai_5(int rows, int cols){
        this.rows = rows;
        this.cols = cols;
        matrix = new double[this.rows][this.cols];
    }

    public void setMatrix() {
        Scanner scanner = new Scanner(System.in);
        for (int i =0; i<rows ; i++){
            for(int j=0; j<cols; j++){
                System.out.print("["+i+"]["+j+"]=");
                matrix[i][j] = scanner.nextDouble();
            }
        }
    }

    public void printMatrix() {
        for(int i=0; i<rows; i++){
            for(int j=0; j<cols; j++){
                System.out.println(matrix[i][j]+ ",");
            }
            System.out.println("\n");
        }
    }

    public double sumPrime(){
        double result = 0;
        for(int i=0; i<rows; i++){
            for(int j=0; j< cols;j++){
                if(isPrime(matrix[i][j]))
                    result+=matrix[i][j];
            }
        }
        return result;
    }

    private boolean isPrime(double tmp){
        if(tmp <=1)
            return false;
        for(int i=2;i<=Math.sqrt(tmp);i++){
            if(tmp % i==0)
                return false;
        }
        return true;
    }

    public boolean isSquare(){
        return rows==cols;
    }

    // tổng các phần tử nằm trên đường chéo chính
    public double getTrace(){
        double result = 0;
        if (isSquare()){
            for(int i=0; i<rows; i++) {
                result += matrix[i][i];
            }
        }
        else{
            System.out.println("ma trận không phải là ma trận vuông nên không có đường chéo");
        }
        return result;
    }
}
