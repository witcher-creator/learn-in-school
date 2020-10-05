package com.witcher;

import java.util.Scanner;

public class Employee {
    private String hoTen;
    private String cmnd;
    private String ngaySinh;
    private String diaChi;
    private int loai; //1: sx, 2: cn, 3: ql

    private Scanner scanner;
    public Employee(Scanner scanner){
        this.scanner = scanner;
        this.setHoTen();
        this.setCmnd();
    }

    public void setHoTen(){
        System.out.println("nhap ten");
        this.hoTen = scanner.nextLine();
    }

    public void setCmnd() {
        System.out.println("nhap CMND");
        this.cmnd = scanner.nextLine();
    }

    public void setNgaySinh() {
        System.out.println("nhap ngay sinh");
       this.ngaySinh = scanner.nextLine();
    }

    public void setDiaChi() {
        System.out.println("nhap dia chi");
        this.diaChi = scanner.nextLine();
    }

    public void setLoai(){
        System.out.println("Loại nhân viên nào, 1 : sản xuất, 2: công nhật, 3: quản lý");
        do {
            this.loai = scanner.nextByte();
        }while (this.loai < 1 || this.loai >3);
    }

    @Override
    public String toString() {
        return "Employee{" +
                "hoTen='" + hoTen + '\'' +
                ", cmnd='" + cmnd + '\'' +
                '}';
    }
}
