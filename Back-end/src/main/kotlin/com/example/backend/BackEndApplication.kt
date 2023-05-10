package com.example.backend

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController


@SpringBootApplication
@RestController
class BackEndApplication

@RestController
class HelloController {
    @GetMapping("hello")
    fun Hello(): List<String> {
        return mutableListOf("서버 포트는 8080", "리액트 포트는 3000")
    }
}
fun main(args: Array<String>) {
    runApplication<BackEndApplication>(*args)
}
