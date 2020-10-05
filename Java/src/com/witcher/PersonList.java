package com.witcher;

import java.util.ArrayList;
import java.util.List;

public class PersonList {
    private int soLuong;
    private List<Person> personList = new ArrayList<Person>();
    private int soSV_LamLuanVan;
    private int soSV_ThiTotNghiep;
    private int soSV_ThiLai;

    public PersonList(int soLuong){
        this.soLuong = soLuong;
    }

    public void setPersonList(){
        for(int i =0;i<soLuong;i++){
            personList.add(new Person());
        }
    }

    public void kiemTra(){
       this.personList.forEach((person -> {
           if(person.kiemTraMonDuoi5()){
               soSV_ThiLai++;
           }else if(person.tinhDiemTB()<7 && !person.kiemTraMonDuoi5()){
               soSV_ThiTotNghiep++;
           }else{
               soSV_LamLuanVan++;
           }
       }));
    }

    public int getSoSV_LamLuanVan() {
        return soSV_LamLuanVan;
    }

    public int getSoSV_ThiLai() {
        return soSV_ThiLai;
    }

    public int getSoSV_ThiTotNghiep() {
        return soSV_ThiTotNghiep;
    }

    @Override
    public String toString() {
        return "PersonList{" +
                "soLuong=" + soLuong +
                ", personList=" + personList +
                "\n, soSV_LamLuanVan=" + soSV_LamLuanVan +
                "\n, soSV_ThiTotNghiep=" + soSV_ThiTotNghiep +
                "\n, soSV_ThiLai=" + soSV_ThiLai +
                '}';
    }
}
