package com.example.backend

import com.mongodb.ConnectionString
import com.mongodb.MongoClientSettings
import com.mongodb.reactivestreams.client.MongoClient
import com.mongodb.reactivestreams.client.MongoClients
import org.bson.BsonReader
import org.bson.BsonWriter
import org.bson.codecs.Codec
import org.bson.codecs.DecoderContext
import org.bson.codecs.EncoderContext
import org.bson.codecs.configuration.CodecProvider
import org.bson.codecs.configuration.CodecRegistries
import org.bson.codecs.configuration.CodecRegistry
import org.bson.codecs.pojo.PojoCodecProvider
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.*
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@SpringBootApplication
@EnableMongoRepositories(basePackages = ["com.example.backend"])
@RestController
class BackEndApplication {
    data class Account(val name: String, val age:Int)
    @GetMapping("/hello")
    fun hello(): String {
        return "Hello World!"
    }
    @Configuration
    class MongoConfig {

        @Bean
        fun mongoClient(): MongoClient {
            val uri = "mongodb+srv://admin:1234@cluster0.uipjrwa.mongodb.net/"
            val settings = MongoClientSettings.builder()
                .applyConnectionString(ConnectionString(uri))
                .codecRegistry(codecRegistry())
                .build()
            return MongoClients.create(settings)
        }

        @Bean
        fun codecRegistry(): CodecRegistry {
            return CodecRegistries.fromRegistries(
                CodecRegistries.fromProviders(MyCodecProvider()),
                MongoClientSettings.getDefaultCodecRegistry(),
                CodecRegistries.fromCodecs(AccountCodec()),
                CodecRegistries.fromProviders(PojoCodecProvider.builder().automatic(true).build())
            )
        }

    }
    class MyCodecProvider : CodecProvider {
        override fun <T : Any> get(clazz: Class<T>, registry: CodecRegistry): Codec<T>? {
            if (clazz == Account::class.java) {
                @Suppress("UNCHECKED_CAST")
                return AccountCodec() as Codec<T>
            }
            return null
        }
    }

    class AccountCodec : Codec<Account> {
        override fun encode(writer: BsonWriter, value: Account, encoderContext: EncoderContext) {
            writer.writeStartDocument()
            writer.writeString("name", value.name)
            writer.writeInt32("age", value.age)
            writer.writeEndDocument()
        }

        override fun decode(reader: BsonReader, decoderContext: DecoderContext): Account {
            reader.readStartDocument()
            val name = reader.readString("name")
            val age = reader.readInt32("age")
            reader.readEndDocument()
            return Account(name, age)
        }

        override fun getEncoderClass(): Class<Account> {
            return Account::class.java
        }
    }
    @Bean
    fun servletWebServerFactory(): ConfigurableServletWebServerFactory {
        return TomcatServletWebServerFactory()
    }

}

fun main(args: Array<String>) {
    runApplication<BackEndApplication>(*args)
}
