package com.example.backend.controller

import com.example.backend.models.EventGym
import com.example.backend.models.Review
import com.example.backend.repository.EventGymRepo
import com.example.backend.repository.ReviewRepository
import jakarta.servlet.http.HttpSession
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*


@RestController
class ReviewController(@Autowired private var reviewRepository: ReviewRepository,@Autowired val eventGymRepo: EventGymRepo) {

    @PostMapping("/Review")
    fun reviewSave(review: Review, @RequestHeader("userId") userId: String?, session: HttpSession): ResponseEntity<String> {
        try {
            if (userId != null) {
                review.userId = userId
            } else {
                // 세션에서 userId 가져오기 String변환
                val sessionUserId = session.getAttribute("userId") as? String
                if (sessionUserId != null) {
                    review.userId = sessionUserId
                }
            }
            reviewRepository.save(review)
            return ResponseEntity.ok("success.")
        } catch (e: Exception) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed")
        }
    }
    @GetMapping("/ReviewPage")
    fun reviewView(session : HttpSession, data : EventGym)
    {
    }
    @PostMapping("/map_click")
    fun asdasdf(session: HttpSession,@RequestBody data: Any?)
    {
        println(data)
    }
}



