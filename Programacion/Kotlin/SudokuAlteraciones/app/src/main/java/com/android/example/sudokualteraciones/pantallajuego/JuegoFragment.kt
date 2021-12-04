package com.android.example.chesssudoku.pantallajuego

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.databinding.DataBindingUtil
import androidx.fragment.app.Fragment
import com.example.android.sudokualteraciones.R
import com.example.android.sudokualteraciones.databinding.FragmentJuegoBinding


class JuegoFragment: Fragment() {
    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?,
                              savedInstanceState: Bundle?): View? {
        val binding: FragmentJuegoBinding = DataBindingUtil.inflate(
            inflater, R.layout.fragment_juego, container, false)
        return binding.root
    }
}