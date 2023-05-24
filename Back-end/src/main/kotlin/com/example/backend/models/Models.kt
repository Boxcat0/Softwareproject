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
@Document("Gym")
data class Gym(
    val name: String = "",
    val id: String = "",
    var password: String = "",
    val gymname: String = "",
    val place: String = "",
)
@Document("Trainer")
data class Trainer(
    val name: String = "",
    val id: String = "",
    var password: String = "",
    val gymname: String = "",
    val gymplace: String = "",
)

