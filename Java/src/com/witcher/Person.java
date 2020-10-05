package com.witcher;

import java.util.Arrays;
import java.util.Scanner;

public class Person {

    Scanner scanner = new Scanner(System.in);
    private String hoTen;
    private String namSinh;
    private double []diem = new double[9];

    public Person(){
        setHoTen();
        setNamSinh();
        setDiem();
    }

    public double[] getDiem() {
        return diem;
    }

    public void setHoTen() {
        System.out.println("Nhập tên sv");
        this.hoTen = scanner.nextLine();
    }

    public void setNamSinh() {
        System.out.println("Nhập năm sinh sv");
        this.namSinh = scanner.nextLine();
    }

    public void setDiem() {
        for(int i=0; i<9; i++){
            System.out.println("Nhập điểm môn thứ "+ (i+1)+": ");
            diem[i] = scanner.nextDouble();
        }
    }

    public double tinhDiemTB(){
        double sum = 0;
        for(int i=0; i<9;i++){
            sum+=diem[i];
        }
        return sum/9;
    }

    public boolean kiemTraMonDuoi5(){
        for(int i =0;i<9;i++){
            if(diem[i] < 5)
                return true;
        }
        return false;
    }

    @Override
    public String toString() {
        return "Person{" +
                "hoTen='" + hoTen + '\'' +
                ", namSinh='" + namSinh + '\'' +
                ", diem=" + Arrays.toString(diem) +
                '}';
    }
}
