package com.example.zad1;

import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;


public class MainActivityResult extends AppCompatActivity {

    TextView textView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_zad2_result);

        textView = (TextView) findViewById(R.id.result);
        Intent intent = getIntent();
        textView.setText(intent.getStringExtra("result"));

    }
}