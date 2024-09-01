package com.example.RestAPIUseCase.service.impl;

import com.example.RestAPIUseCase.Model.Student;
import com.example.RestAPIUseCase.exception.StudentNotFoundException;
import com.example.RestAPIUseCase.repository.StudentRepository;
import com.example.RestAPIUseCase.service.StudentService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    StudentRepository studentRepository;


    public StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public String createStudent(Student student) {
        studentRepository.save(student);
        return "Data Saved";
    }

    @Override
    public String updateStudent(Student student) {
        studentRepository.save(student);
        return "Data Updated";
    }

    @Override
    public String deleteStudent(int studentId) {
        studentRepository.deleteById(studentId);
        return "Deleted";
    }

    @Override
    public Student getStudentById(int studentId) {
        if(studentRepository.findById(studentId).isEmpty()){
            throw new StudentNotFoundException("The requested student is not exits");
        }
        else {
            return studentRepository.findById(studentId).get();
        }
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
}
