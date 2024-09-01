package com.example.RestAPIUseCase.service;

import com.example.RestAPIUseCase.Model.Student;

import java.util.List;

public interface StudentService {
    public String createStudent(Student student);
    public String updateStudent(Student student);
    public String deleteStudent(int studentId);
    public Student getStudentById(int studentId);
    public List<Student> getAllStudents();
}
