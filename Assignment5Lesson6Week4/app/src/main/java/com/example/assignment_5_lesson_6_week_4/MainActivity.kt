package com.example.assignment_5_lesson_6_week_4

import android.R.attr.bottom
import android.R.attr.left
import android.R.attr.right
import android.R.attr.top
import android.annotation.SuppressLint
import android.os.Bundle
import android.widget.Button
import android.widget.CheckBox
import android.widget.LinearLayout
import android.widget.RadioButton
import android.widget.RadioGroup
import android.widget.Space
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.children


class MainActivity : AppCompatActivity() {

    private lateinit var mainLayout: LinearLayout
    private lateinit var submitButton: Button
    private lateinit var resetButton: Button

    @SuppressLint("MissingInflatedId", "ResourceType")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        mainLayout = findViewById(R.id.main_layout)
        submitButton = findViewById(R.id.submit_button)
        resetButton = findViewById(R.id.reset_button)

        // Initialize the quiz questions
        val questions = listOf(
            Question(
                "What is the difference between a class and an object?",
                listOf(
                    "A class is a blueprint for creating objects",
                    "An object is an instance of a class",
                    "Both A and B",
                    "None of the above"
                ),
                QuestionType.RADIO,
                1
            ),
            Question(
                "What is a function?",
                listOf(
                    "A function is a block of code that performs a specific task",
                    "A function can take input parameters and return an output value",
                    "Both A and B",
                    "None of the above"
                ),
                QuestionType.CHECKBOX,
                3
            ),
            Question(
                "What is the difference between a class and an object?",
                listOf(
                    "A class is a blueprint for creating objects",
                    "An object is an instance of a class",
                    "Both A and B",
                    "None of the above"
                ),
                QuestionType.RADIO,
                0
            ),
            Question(
                "What is a function?",
                listOf(
                    "A function is a block of code that performs a specific task",
                    "A function can take input parameters and return an output value",
                    "Both A and B",
                    "None of the above"
                ),
                QuestionType.CHECKBOX,
                3
            ),
        )

        for ((index,question) in questions.withIndex()) {
            val textView = TextView(this);
            textView.text = question.question;
            mainLayout.addView(textView);

            if(question.questionType === QuestionType.RADIO){
                val questionsOptions = RadioGroup(this);
                questionsOptions.id = index;
                for (option in question.options) {
                    val radioButton = RadioButton(this)
                    radioButton.text = option
                    questionsOptions.addView(radioButton)
                }
                mainLayout.addView(questionsOptions)
            }
            if(question.questionType === QuestionType.CHECKBOX){
                for (option in question.options) {
                    val checkbox = CheckBox(this)
                    checkbox.id = index;
                    checkbox.text = option
                    mainLayout.addView(checkbox)
                }
            }
        }


        // Set the submit button click listener
        submitButton.setOnClickListener {
            // Check the user's answers
            var score = 0.0;

            for (r in mainLayout.children) {
                if(r is RadioGroup) {
                    val selectedRadioButtonId = r.checkedRadioButtonId;
                    if (r.checkedRadioButtonId != -1) {
                        val selectedRadioButton =
                            r.findViewById<RadioButton>(selectedRadioButtonId)
                        if (selectedRadioButton.text == questions[r.id].correctAnswer) {
                            score++
                        }
                    }
                }
                if(r is CheckBox){
                    if (r.isChecked && r.text === questions[r.id].correctAnswer) {
                        score++
                    }
                }
            }

             val alertDialog = AlertDialog.Builder(this)
                .setTitle("Quiz Results")
                .setMessage("You scored ${score/questions.size * 100}% on the quiz.")
                .setPositiveButton("OK", null)
                .create()
            alertDialog.show()
        }

        // Set the reset button click listener
        resetButton.setOnClickListener {
            // Clear the selected choices
            for (item in mainLayout.children) {
                if (item is CheckBox)
                    item.isChecked = false
                if(item is RadioGroup)
                    item.clearCheck();
            }
        }
    }
}

data class Question(
    val question: String,
    val options: List<String>,
    val questionType: QuestionType,
    val correctAnswerIdx:Int
) {
    val correctAnswer=options[correctAnswerIdx]
}


enum class QuestionType {
    RADIO,CHECKBOX
}