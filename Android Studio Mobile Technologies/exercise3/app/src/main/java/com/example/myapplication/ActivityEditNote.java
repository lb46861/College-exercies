package com.example.myapplication;

import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.widget.Button;
import android.widget.EditText;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.os.HandlerCompat;
import androidx.room.Room;

import com.example.myapplication.Data.AppDatabase;
import com.example.myapplication.Data.Note;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ActivityEditNote extends AppCompatActivity {
    private ExecutorService executorService = Executors.newSingleThreadExecutor();
    private Handler handler = HandlerCompat.createAsync(Looper.getMainLooper());

    Button saveButton, deleteButton;
    EditText heading, description;
    AppDatabase db;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //setContentView(R.layout.newLayout);

        db = Room.databaseBuilder(getApplicationContext(), AppDatabase.class, "my-notes").build();
        heading = findViewById(R.id.textViewHeading);
        description = findViewById(R.id.textViewDescription);
        //saveButton = findViewById(R.id.button2);
        //deleteButton = findViewById(R.id.button3);

        if (getIntent().hasExtra("myNote")) {
            Note note = getIntent().getParcelableExtra("myNote");
            heading.setText(note.heading);
            description.setText(note.description);
        }
    }
}
