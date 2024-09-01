package com.example.RestAPIUseCase.exception;

import jakarta.persistence.Entity;
import org.springframework.http.HttpStatus;

public class StudentException {

//   this is for message
    private final String message;
//    This is for cause
    private final Throwable throwable;
//    This is for http status
    private final HttpStatus httpStatus;

    public StudentException(String message, Throwable throwable, HttpStatus httpStatus) {
        this.message = message;
        this.throwable = throwable;
        this.httpStatus = httpStatus;
    }

    public String getMessage() {
        return message;
    }

    public Throwable getThrowable() {
        return throwable;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }
}
