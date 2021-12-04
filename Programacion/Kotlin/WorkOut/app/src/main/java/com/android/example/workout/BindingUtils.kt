package com.android.example.workout

import android.widget.TextView
import androidx.databinding.BindingAdapter
import com.android.example.workout.ejerciciodatabase.NewEjercicio

@BindingAdapter("nombreEjercicio")
fun TextView.setNombreEjercicio(item: NewEjercicio?){
    item?.let{
        text = item.nombreEjercicio
    }
}