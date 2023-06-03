package com.example.backend.controller

import com.example.backend.models.Reservation
import com.example.backend.repository.ReservationRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController


@RestController
class ReservationController(@Autowired var reservationRepository: ReservationRepository) {
    @PostMapping("/Reservation")
    fun saveReservation(@RequestBody reservation: Reservation): ResponseEntity<String> {
        reservationRepository.save(reservation)
        return ResponseEntity.ok("success.")
    }
}