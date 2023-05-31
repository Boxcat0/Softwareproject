package com.example.backend.controller

import com.example.backend.repository.MemberRepo
import jakarta.servlet.http.HttpSession
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class MyInfoController(@Autowired val memberRepo: MemberRepo,
                       private val session: HttpSession) {
    @GetMapping("/MyInfo")
    fun findMember(): Any {
        var id = session.getAttribute("userId").toString()
        println(memberRepo.findById(id).orElse(null))
        return memberRepo.findById(id).orElse(null)
    }
}