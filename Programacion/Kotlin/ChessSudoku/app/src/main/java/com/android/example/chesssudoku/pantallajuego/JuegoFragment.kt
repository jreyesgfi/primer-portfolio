package com.android.example.chesssudoku.pantallajuego

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.databinding.DataBindingUtil
import androidx.fragment.app.Fragment
import com.android.example.chesssudoku.R
import com.android.example.chesssudoku.databinding.FragmentJuegoBinding


class JuegoFragment: Fragment() {
    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?,
                              savedInstanceState: Bundle?): View? {
        val binding: FragmentJuegoBinding = DataBindingUtil.inflate(
            inflater, R.layout.fragment_juego, container, false)
        return binding.root
    }
}