package com.example.backend

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController
/*

val connectionString = "mongodb+srv://admin:1234@cluster0.uipjrwa.mongodb.net/"
val databaseName = "Project"
val collectionName = "Account"

val settings = MongoClientSettings.builder()
    .applyConnectionString(ConnectionString(connectionString))
    .codecRegistry(
        CodecRegistries.fromRegistries(
            CodecRegistries.fromProviders(PojoCodecProvider.builder().automatic(true).build()),
            MongoClientSettings.getDefaultCodecRegistry()
        )
    )
    .build()

val client = MongoClients.create(settings)
val database = client.getDatabase(databaseName)
val collection = database.getCollection(collectionName)
*/

@RestController
class CreateInfoController(@Autowired val repo: Repo) {

 /*   @GetMapping("/CreateInfo")
    fun getCount(): Int {
        println(repo.findAll().count());
        return repo.findAll().count()
    }*/
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
            // MongoDB에 data 객체를 삽입
            //val account = Document.parse(data.toString())
            repo.save(data)

            // 삽입된 데이터 조회
            // val result = collection.find().first()
            // println(result)
            //collection.insertOne(data)
            return ResponseEntity.ok("{\"message\": \"test ok\"}")
        } catch (e: Exception) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"message\": \"Failed to create account\"}")
        }
    }
}

