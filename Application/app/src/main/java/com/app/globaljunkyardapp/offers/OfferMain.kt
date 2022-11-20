//package com.app.globaljunkyardapp.offers
//
//import android.os.Bundle
//import androidx.appcompat.app.AppCompatActivity
//import androidx.recyclerview.widget.LinearLayoutManager
//import com.app.globaljunkyardapp.R
//import kotlinx.android.synthetic.main.offers_main.*
//import kotlinx.coroutines.MainScope
//import kotlinx.coroutines.launch
//
//class OfferMain : AppCompatActivity() {
//    override fun onCreate(savedInstanceState: Bundle?) {
//        super.onCreate(savedInstanceState)
//        setContentView(R.layout.offers_main)
//
//
//        if(supportActionBar!=null)
//            this.supportActionBar?.hide()
//
//        val testList = ArrayList<OfferElement>()
//        for(i in 1..10) {
//            testList.add(OfferElement(R.drawable.kanapa, "Tytul oferty $i", "Opis oferty $i"))
//        }
//
//        val adapter = OfferAdapter(testList);
//        test.adapter = adapter
//        test.layoutManager = LinearLayoutManager(this@OfferMain)
//        test.setHasFixedSize(true)
//
//        val conn = FetchData()
//
//        MainScope().launch {
//            println(conn.getData("/api/types"))
//        }
//    }
//}
