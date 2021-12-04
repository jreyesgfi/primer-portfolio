package com.android.example.workout.ejerciciodatabase

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.databinding.DataBindingUtil
import androidx.fragment.app.Fragment
import com.android.example.workout.R
import com.android.example.workout.databinding.FragmentEjercicioBinding
import com.android.example.workout.rutinadatabase.stringToList

class EjercicioFragment(var numeroEjercicio:Int?): Fragment() {
    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val binding: FragmentEjercicioBinding = DataBindingUtil.inflate(inflater,R.layout.fragment_ejercicio,container,false)
        if (numeroEjercicio == null){ numeroEjercicio = 1}
        //val ejercicio = stringToList("1 2 3",)
        //binding.ejercicio = ejercicio
        return binding.root
    }
}