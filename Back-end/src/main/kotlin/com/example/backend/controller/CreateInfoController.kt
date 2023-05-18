package com.example.backend.controller

import com.example.backend.models.Account
import com.example.backend.repository.Repo
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpSession
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class CreateInfoController(@Autowired val repo: Repo,
                           private val session: HttpSession,
                           private val passwordEncoder: PasswordEncoder) {
    @PostMapping("/CreateInfo")
    fun createAccount(data: Account): ResponseEntity<String> {
        val name = data.name
        val id = data.id
        val password = data.password
        val place = data.place

        // data 객체의 validation 수행
        if (name.isNullOrEmpty() || id.isNullOrEmpty() || password.isNullOrEmpty() || place.isNullOrEmpty()) {
            return ResponseEntity.badRequest().body("{\"message\": \"Invalid request data\"}")
        }

        try {
            val encryptedPassword = passwordEncoder.encode(password)
            data.password = encryptedPassword
            repo.save(data)
            return ResponseEntity.ok("{\"message\": \"test ok\"}")
        } catch (e: Exception) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"message\": \"Failed to create account\"}")
        }
    }

    @PostMapping("/loginPage")
    fun login(data: Account, HttpSession: HttpServletRequest): ResponseEntity<String>  {
        val id = data.id
        val password = data.password


        if (id.isNullOrEmpty() || password.isNullOrEmpty()) {
            return ResponseEntity.badRequest().body("{\"message\": \"잘못된 로그인 정보입니다\"}")
        }

        val account = repo.findById(id).orElse(null)

        if (account != null && passwordEncoder.matches(password, account.password)) {
            session.setAttribute("userId", id);
            return ResponseEntity.ok("{\"message\": \"로그인 성공\"}")
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"message\": \"유효하지 않은 아이디 또는 비밀번호입니다\"}")
        }
    }

}

