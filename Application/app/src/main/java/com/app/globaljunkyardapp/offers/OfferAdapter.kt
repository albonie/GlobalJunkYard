package com.app.globaljunkyardapp.offers

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.app.globaljunkyardapp.R
import kotlinx.android.synthetic.main.offer_element.view.*

data class OfferElement(val offerIcon: Int, val offerTitle: String, val offerDescribe: String)
class OfferAdapter (private val offerList: List<OfferElement>) : RecyclerView.Adapter<OfferAdapter.OfferViewHolder>(){
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int) : OfferViewHolder {
        val itemView = LayoutInflater.from(parent.context).inflate(R.layout.offer_element, parent, false)
        return OfferViewHolder(itemView)
    }

    override fun onBindViewHolder(holder: OfferViewHolder, position: Int) {
        val currentItem = offerList[position]

        holder.offerIcon.setImageResource(currentItem.offerIcon)
        holder.offerDescription.text = currentItem.offerDescribe
        holder.offerTitle.text = currentItem.offerTitle
    }

    override fun getItemCount() = offerList.size

    class OfferViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val offerIcon: ImageView = itemView.offerIcon
        val offerTitle: TextView = itemView.offerTitle
        val offerDescription: TextView = itemView.offerDescription


    }
}
