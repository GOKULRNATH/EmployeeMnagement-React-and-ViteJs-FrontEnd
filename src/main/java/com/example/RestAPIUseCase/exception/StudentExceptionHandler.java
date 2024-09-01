package com.example.RestAPIUseCase.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

//Handle multiple exception globally
@ControllerAdvice
public class StudentExceptionHandler {

    @ExceptionHandler(value = {StudentNotFoundException.class})
    public ResponseEntity<Object> handleStudentNotFoundException(StudentNotFoundException studentNotFoundException) {

        //Create the payload which will be return back in terms for ResponseEntity and This error message given back to client
        StudentException studentExceptionObj = new StudentException(
                studentNotFoundException.getMessage(),
                studentNotFoundException.getCause(),
                HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(studentExceptionObj,HttpStatus.NOT_FOUND);
    }

}
