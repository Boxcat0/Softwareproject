package com.example.backend.repository
import com.example.backend.models.Member
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories
import org.springframework.stereotype.Repository
@EnableMongoRepositories
@Repository
interface Repo : MongoRepository<Member, String> {

    /*fun findByid(id: String): Account?*/
}
