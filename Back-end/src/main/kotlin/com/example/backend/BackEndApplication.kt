package com.example.backend
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.*
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@SpringBootApplication
@EnableMongoRepositories(basePackages = ["com.example.backend"])
@RestController
class BackEndApplication {
    @GetMapping("/hello")
    fun hello(): String {
        return "Hello World!"
    }
}

fun main(args: Array<String>) {
    runApplication<BackEndApplication>(*args)
}
