package com.example.RestAPIUseCase.repository;

import com.example.RestAPIUseCase.Model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student,Integer>{

}
