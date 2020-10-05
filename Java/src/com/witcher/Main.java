package com.witcher;


import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
//        double x = 0;
//        int n = 0;
//        System.out.println("nhập x");
//        x = scanner.nextDouble();
//        System.out.println("Nhập số phần tử n");
//        n = scanner.nextByte();
//        Bai_1 bai_1 = new Bai_1(n, x);
//        System.out.println(bai_1.giaiPT());

        // bài 2

//        int n = scanner.nextByte();
//        Bai_2 bai_2 = new Bai_2(n);
//        System.out.println(bai_2.giaiPT());

        // Bài 3

//        double a,b;
//        System.out.println("Nhập tham số a");
//        a = scanner.nextDouble();
//        System.out.println("Nhập tham số b");
//        b = scanner.nextDouble();
//
//        Bai_3 bai_3 = new Bai_3(a,b);
//        System.out.println(bai_3.toString());
//        System.out.println("Kết quả: "+ bai_3.giaiPT());

        // Bài 4

//        double a,b,c;
//        System.out.println("Nhập tham số a");
//        a = scanner.nextDouble();
//        System.out.println("Nhập tham số b");
//        b = scanner.nextDouble();
//        System.out.println("Nhập tham số c");
//        c = scanner.nextDouble();
//        Bai_4 bai_4 = new Bai_4(a,b,c);
//        System.out.println(bai_4.toString());
//        bai_4.giaiPT();

        // Bài 5
//        int rows,cols;
//        System.out.println("Nhập số hàng");
//        rows = scanner.nextByte();
//        System.out.println("Nhập số cột");
//        cols = scanner.nextByte();
//
//        Bai_5 bai_5 = new Bai_5(rows, cols);
//        bai_5.setMatrix();
//        bai_5.printMatrix();
//        System.out.println(bai_5.sumPrime());
//        System.out.println("trace: "+bai_5.getTrace());

        // Bài 10
//        System.out.println("Nhập số sinh viên");
//        int soluong = scanner.nextByte();
//        PersonList personList = new PersonList(soluong);
//        personList.setPersonList();
//        personList.kiemTra();
//        System.out.println(personList.toString());

        // Bai 11
//        TamGiac tamGiac = new TamGiac();
//        tamGiac.setA();
//        tamGiac.setB();
//        tamGiac.setC();
//        System.out.println(tamGiac.timTrongTam().toString());

        // Bai 12
        EmployeeList employeeList = new EmployeeList(2, scanner);
        employeeList.setList();
        System.out.println(employeeList.toString());
    }
}
