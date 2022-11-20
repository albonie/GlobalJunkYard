package com.app.globaljunkyardapp.offers

import java.net.URL
import khttp.*
import khttp.responses.Response


class FetchData () {
    private val url = "http://10.250.161.224:3001"
    fun getData(endpoint: String) : Response {
        return get(url + endpoint)
    }

    fun postOffers(endpoint: String) : Response {
        return post(url + endpoint, data = mapOf("skip" to "2", "limit" to "5"))
    }
}
