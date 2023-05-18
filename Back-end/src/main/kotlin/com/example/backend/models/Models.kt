package com.example.backend.models

import org.springframework.data.mongodb.core.mapping.Document
import java.util.*

@Document("Account")
data class Account(
    val name: String = "",
    val id: String = "",
    var password: String = "",
    val place: String = "",
)


