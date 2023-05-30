package com.example.backend.controller

import com.example.backend.models.Gym
import com.example.backend.models.Member
import com.example.backend.models.Trainer
import com.example.backend.repository.GymRepo
import com.example.backend.repository.MemberRepo
import com.example.backend.repository.TrainerRepo
import jakarta.servlet.http.HttpSession
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class CreateInfoController(@Autowired val memberRepo: MemberRepo,
                           @Autowired val gymRepo: GymRepo,
                           @Autowired val trainerRepo: TrainerRepo,
                           private val session: HttpSession,
                           private val passwordEncoder: PasswordEncoder) {
    @PostMapping("/CreateInfo")
    fun createMember(data: Member): ResponseEntity<String> {
        val name = data.name
        val id = data.id
        val password = data.password
        val place = data.address

        // data 객체의 validation 수행
        if (name.isNullOrEmpty() || id.isNullOrEmpty() || password.isNullOrEmpty() || place.isNullOrEmpty()) {
            return ResponseEntity.badRequest().body("{\"message\": \"Invalid request data\"}")
        }

        try {
            val encryptedPassword = passwordEncoder.encode(password)
            data.password = encryptedPassword
            memberRepo.save(data)
            return ResponseEntity.ok("{\"message\": \"test ok\"}")
        } catch (e: Exception) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("{\"message\": \"Failed to create account\"}")
        }
    }

    @PostMapping("/CreateInfo_G")
    fun createGym(data: Gym): ResponseEntity<String> {
        val name = data.name
        val id = data.id
        val password = data.password
        val gymname = data.gymname
        val place = data.place
        // data 객체의 validation 수행
        if (name.isNullOrEmpty() || id.isNullOrEmpty() || password.isNullOrEmpty() || gymname.isNullOrEmpty() || place.isNullOrEmpty()) {
            return ResponseEntity.badRequest().body("{\"message\": \"Invalid request data\"}")
        }

        try {
            val encryptedPassword = passwordEncoder.encode(password)
            data.password = encryptedPassword
            gymRepo.save(data)
            return ResponseEntity.ok("{\"message\": \"test ok\"}")
        } catch (e: Exception) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("{\"message\": \"Failed to create account\"}")
        }
    }

    // 아래 createTrainer 부분 헬스장 소속/개인 나눠서 처리하는 로직 생각하기
    @PostMapping("/CreateInfo_T")
    fun createTrainer(data: Trainer): ResponseEntity<String> {
        val name = data.name
        val id = data.id
        val password = data.password
        val gymname = data.gymname
        val gymplace = data.gymplace

      // data 객체의 validation 수행
            if (name.isNullOrEmpty() || id.isNullOrEmpty() || password.isNullOrEmpty() || gymname.isNullOrEmpty() || gymplace.isNullOrEmpty()) {
                return ResponseEntity.badRequest().body("{\"message\": \"Invalid request data\"}")
            }



            try {
                val encryptedPassword = passwordEncoder.encode(password)
                data.password = encryptedPassword
                trainerRepo.save(data)
                return ResponseEntity.ok("{\"message\": \"test ok\"}")
            } catch (e: Exception) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("{\"message\": \"Failed to create account\"}")
            }

        }



        @PostMapping("/loginPage")
        fun login(data: Member): ResponseEntity<String> {
            val id = data.id
            val password = data.password


            if (id.isNullOrEmpty() || password.isNullOrEmpty()) {
                return ResponseEntity.badRequest().body("{\"message\": \"잘못된 로그인 정보입니다\"}")
            }

            val account = memberRepo.findById(id).orElse(null)

            if (account != null && passwordEncoder.matches(password, account.password)) {
                session.setAttribute("userId", id);
                return ResponseEntity.ok("{\"message\": \"로그인 성공\"}")
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"message\": \"유효하지 않은 아이디 또는 비밀번호입니다\"}")
            }
        }

    @PostMapping("/logout")
    fun logout(session: HttpSession): ResponseEntity<String?>? {
        // 세션 삭제
        session.invalidate()
        return ResponseEntity.ok("Logout success.")
    }
}
