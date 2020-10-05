package com.witcher;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class EmployeeList {

    private int soluong;
    private List<Employee> list = new ArrayList<Employee>();
    private Scanner scanner;

    public EmployeeList(int soluong, Scanner scanner){
        this.soluong = soluong;
        this.scanner = scanner;
    }

    public void setList() {
        for(int i=0;i<soluong;i++){
            list.add(new Employee(scanner));
        }
    }

    @Override
    public String toString() {
        return "EmployeeList{" +
                "soluong=" + soluong +
                ", list=" + list +
                '}';
    }
}
