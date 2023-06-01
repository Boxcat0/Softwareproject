package com.example.backend.repository
import com.example.backend.models.*
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories
import org.springframework.stereotype.Repository
@EnableMongoRepositories
@Repository
interface MemberRepo : MongoRepository<Member, String> {

    /*fun findByid(id: String): Account?*/
}
@EnableMongoRepositories
@Repository
interface GymRepo : MongoRepository<Gym, String>
{

}
@EnableMongoRepositories
@Repository
interface TrainerRepo : MongoRepository<Trainer, String>
{

}
@EnableMongoRepositories
@Repository
interface EventGymRepo : MongoRepository<EventGym, String>


@EnableMongoRepositories
@Repository
interface ReviewRepo : MongoRepository<Review, String>