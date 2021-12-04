package com.android.example.workout.rutinadatabase

import androidx.room.TypeConverter
import com.android.example.workout.ejerciciodatabase.EjercicioDatabaseDao
import com.android.example.workout.ejerciciodatabase.NewEjercicio

@TypeConverter
suspend fun stringToList(string:String, dao:EjercicioDatabaseDao):List<NewEjercicio>?{
    var listaString = string.split(" ")
    var listaEjercicios = mutableListOf<NewEjercicio>()
    for (str in listaString){
        var newEjercicio:NewEjercicio? = null
        try {
            newEjercicio = dao.get(str.toLong())
        }
        finally{
        }
        newEjercicio?.let{
            listaEjercicios.add(newEjercicio)
        }
    }
    return listaEjercicios
}