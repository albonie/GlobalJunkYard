package com.app.globaljunkyardapp

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import com.app.globaljunkyardapp.offers.FetchData
import com.app.globaljunkyardapp.offers.OfferAdapter
import com.app.globaljunkyardapp.offers.OfferElement
import kotlinx.android.synthetic.main.activity_offers.*
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import org.json.JSONObject


class Offers : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_offers)

        if(supportActionBar!=null)
            this.supportActionBar?.hide()

        val testList = ArrayList<OfferElement>()


        val conn = FetchData()
        MainScope().launch {
            withContext(Dispatchers.Default) {

                val jsonOffers = conn.postOffers("/api/products/list").jsonArray
                for (i in 0 until jsonOffers.length()) {
                    val pointer: JSONObject = jsonOffers.getJSONObject(i)
                    testList.add(OfferElement(R.drawable.kanapa, pointer["name"].toString(), pointer["description"].toString()))
                }
            }
            val adapter = OfferAdapter(testList);
            test.adapter = adapter
            test.layoutManager = LinearLayoutManager(this@Offers)
            test.setHasFixedSize(true)
        }


    }
}
