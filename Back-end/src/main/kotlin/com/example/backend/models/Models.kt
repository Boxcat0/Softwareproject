package com.example.backend.models

import org.springframework.data.mongodb.core.mapping.Document
import java.time.LocalDate
import java.util.*

@Document("Member")
data class Member(
    val name: String = "",
    val id: String = "",
    var password: String = "",
    val address: String = "",
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

@Document("Review")
data class Review(
    var userId: String = "",
    val gym: String = "",
    var star: Int = 0,
    val reviews: String = "",
    val date: LocalDate = LocalDate.now(),
)
@Document("EventGym")
data class EventGym(
    val gymname: String =  "",
)

@Document("Reservation")
data class Reservation(
    val name: String = "",
    val id: String = "",
    val gymname: String = "",
    val fee: Int = 0,
    val say: String = "",
)
@Document ("FreeBoard")
data class FreeBoard(
    val number: Int = 0,
    val writtenDate: Date,
    val viewCounts: Int = 0,
    val contents: String = "",
    val comments: Arrays
)
