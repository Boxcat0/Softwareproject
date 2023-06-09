package com.example.backend.repository

import com.example.backend.models.Reservation
import com.example.backend.models.Review
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories
import org.springframework.stereotype.Repository

@EnableMongoRepositories
@Repository
interface ReservationRepository : MongoRepository<Reservation, String> {
}