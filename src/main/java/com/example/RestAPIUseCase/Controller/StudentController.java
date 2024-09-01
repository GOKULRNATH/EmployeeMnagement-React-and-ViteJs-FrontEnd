package com.example.RestAPIUseCase.Controller;

import com.example.RestAPIUseCase.Model.Student;
import com.example.RestAPIUseCase.service.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentController {

    StudentService studentService;
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    //Create Student Details
    @PostMapping()
    public String createStudent(@RequestBody Student student){
        studentService.createStudent(student);
        return "Student Data added";
    }

    //Read All Student
    @GetMapping()
    public List<Student> getAllStudent(){
        return  studentService.getAllStudents();
    }

    //Read Specific Student
    @GetMapping("{studentId}")
    public Student getStudentById(@PathVariable("studentId") int studentId){
        return  studentService.getStudentById(studentId);
    }

    //Update Student Details
    @PutMapping()
    public String updateStudentDetails(@RequestBody Student student){
        studentService.updateStudent(student);
        return "Student Details Updated";
    }

    //Delete the Student Details
    @DeleteMapping("{studentId}")
    public String deleteStudentDetails(@PathVariable("studentId") int studentId){
        studentService.deleteStudent(studentId);
        return "Student Details Updated";
    }



}
