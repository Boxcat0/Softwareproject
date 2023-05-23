package com.example.backend.models

import org.springframework.data.mongodb.core.mapping.Document
import java.util.*

@Document("Member")
data class Member(
    val name: String = "",
    val id: String = "",
    var password: String = "",
    val place: String = "",
)


