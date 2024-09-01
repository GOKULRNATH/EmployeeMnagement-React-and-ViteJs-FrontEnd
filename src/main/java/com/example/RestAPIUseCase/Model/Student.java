package com.example.RestAPIUseCase.Model;

import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "student_table")
public class Student {
    @Id
    private int Id;
    private String Name;
    private String Address;
    private long Phone;

    public Student() {
    }

    public Student(int id, String name, String address, long phone) {
        Id = id;
        Name = name;
        Address = address;
        Phone = phone;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public long getPhone() {
        return Phone;
    }

    public void setPhone(long phone) {
        Phone = phone;
    }
}
