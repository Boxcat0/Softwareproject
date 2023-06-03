package com.example.backend.controller

import com.example.backend.models.EventGym
import com.example.backend.models.Review
import com.example.backend.repository.EventGymRepo
import com.example.backend.repository.ReviewRepo
import jakarta.servlet.http.HttpSession
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*


@RestController
class ReviewController(@Autowired private var reviewRepository: ReviewRepo, @Autowired val eventGymRepo: EventGymRepo) {
    private var gym: String = ""

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
    // gymname을 키로 하는 데이터를 모두 출력
    @GetMapping("/ReviewPage")
    fun reviewView(): List<Review> {
        println(reviewRepository.findByGym(gym))
        return reviewRepository.findByGym(gym)

    }
    // gymname 변수에 받아온 데이터 저장
    @PostMapping("/map_click")
    fun findGymName(session: HttpSession, @RequestBody data: EventGym?)
    {
        gym = data?.gymname ?: "";

        println(gym)
    }

}



