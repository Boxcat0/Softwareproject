package com.example.backend.repository
import com.example.backend.models.Account
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories
import org.springframework.stereotype.Repository
@EnableMongoRepositories
@Repository
interface Repo : MongoRepository<Account, String> {

    /*fun findByid(id: String): Account?*/
}
