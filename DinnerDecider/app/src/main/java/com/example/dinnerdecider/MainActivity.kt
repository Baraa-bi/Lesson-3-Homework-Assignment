package com.example.dinnerdecider

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import com.google.android.material.textfield.TextInputEditText
import com.google.android.material.textfield.TextInputLayout
import java.lang.Integer.parseInt

class MainActivity : AppCompatActivity() {
    private var foods =  arrayListOf<String>( "Hamburger", "Pizza",
        "Mexican", "American", "Chinese");
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        findViewById<Button>(R.id.button2)
            .setOnClickListener {
                findViewById<TextView>(R.id.textView).text=
                    foods[(Math.random()* foods.size).toInt()];
            }
        findViewById<Button>(R.id.button).setOnClickListener {
            var text = findViewById<TextInputEditText>(R.id.textInput).text.toString();
            this.foods.add(text);
            Toast.makeText(applicationContext, "$text Added to the list",Toast. LENGTH_SHORT).show();
        }
    }
}