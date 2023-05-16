package com.example.backend

import org.springframework.data.mongodb.core.mapping.Document
import java.util.*

@Document("Account")
data class Account(
    val name: String = "",
    val id: String = "",
    val password: String = "",
    val place: String = "",
)


