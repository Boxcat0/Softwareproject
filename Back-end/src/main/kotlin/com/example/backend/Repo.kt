package com.example.backend
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository

interface Repo : MongoRepository<Restaurant, String> {

    fun findByRestaurantId(restaurantId: String): Restaurant?
}
