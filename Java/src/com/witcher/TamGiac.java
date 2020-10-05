package com.witcher;

import java.util.Scanner;

public class TamGiac {
    Position a = new Position();
    Position b = new Position();
    Position c = new Position();

    private Scanner scanner = new Scanner(System.in);

    public TamGiac(){}

    public void setA() {
        System.out.println("Nhập tọa độ đỉnh A");
        this.a.x = scanner.nextDouble();
        this.a.y = scanner.nextDouble();
    }

    public void setB() {
        System.out.println("Nhập tọa độ đỉnh B");
        this.b.x = scanner.nextDouble();
        this.b.y = scanner.nextDouble();
    }

    public void setC() {
        System.out.println("Nhập tọa độ đỉnh c");
        this.c.x = scanner.nextDouble();
        this.c.y = scanner.nextDouble();
    }

    public Position timTrongTam(){
        Position g = new Position();
        g.x = (a.x+b.x+c.x)/3;
        g.y = (a.y+b.y+c.y)/3;
        return g;
    }

}

class Position {
    public double x;
    public double y;

    @Override
    public String toString() {
        return "Position{" +
                "x=" + x +
                ", y=" + y +
                '}';
    }
}

