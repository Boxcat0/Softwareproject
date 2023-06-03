package com.example.backend.models

import org.springframework.data.annotation.Id
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
    val comments: List<Reply> = emptyList()
)
@Document("Reply")
data class Reply(
    @Id
    val id: String? = null,
    val content: String,
    val userId: String,
    val commentId: String
)
// 중고거래
@Document("UsedItem")
data class UsedItem(
    @Id
    val id: String? = null,
    val itemName: String,
    val itemPrice: Int = 0,
    val date: LocalDate = LocalDate.now()
)
// 구인구직
@Document("Job")
data class Job(
    @Id
    val id: String? = null,
    val jobName: String,
    val isPersonal: Boolean?, // 개인이면 True, 헬스장 소속이면 False
    val gymmname: String?, // isPersonal이 false이면 입력
    val date: LocalDate = LocalDate.now()
)