package com.example.zad2;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import com.example.zad2.Controller.RequestController;


public class MainActivity extends AppCompatActivity {
    RecyclerView recyclerView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        recyclerView = (RecyclerView) findViewById(R.id.rView);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        RequestController.doRequest(this, recyclerView);
    }

}