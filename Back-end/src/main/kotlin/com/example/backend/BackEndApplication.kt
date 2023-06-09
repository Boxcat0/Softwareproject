package com.example.backend

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.RestController


@SpringBootApplication
@RestController
class BackEndApplication {
}

    fun main(args: Array<String>) {
    runApplication<BackEndApplication>(*args)
}
