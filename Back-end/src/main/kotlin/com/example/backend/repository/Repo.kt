package com.example.backend.repository
import com.example.backend.models.Gym
import com.example.backend.models.Member
import com.example.backend.models.Trainer
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories
import org.springframework.stereotype.Repository
@EnableMongoRepositories
@Repository
interface MemberRepo : MongoRepository<Member, String> {

    /*fun findByid(id: String): Account?*/
}
interface GymRepo : MongoRepository<Gym, String>
{

}
interface TrainerRepo : MongoRepository<Trainer, String>
{

}

