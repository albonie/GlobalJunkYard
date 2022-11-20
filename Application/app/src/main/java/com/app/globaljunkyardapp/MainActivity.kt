package com.app.globaljunkyardapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.app.globaljunkyardapp.offers.FetchData
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

//        val conn = FetchData()
//
//        MainScope().launch {
//            withContext(Dispatchers.Default) {
//
//            println(conn.getData("/api/types"))
//            }
//        }
        val intent = Intent(this, Offers::class.java)
        startActivity(intent)

    }
}
