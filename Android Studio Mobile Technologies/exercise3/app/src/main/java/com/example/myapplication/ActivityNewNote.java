package com.example.myapplication;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.text.TextUtils;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.os.HandlerCompat;
import androidx.room.Room;

import com.example.myapplication.Data.AppDatabase;
import com.example.myapplication.Data.Note;
import com.google.android.material.floatingactionbutton.FloatingActionButton;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ActivityNewNote extends AppCompatActivity {
    private ExecutorService executorService = Executors.newSingleThreadExecutor();
    private Handler handler = HandlerCompat.createAsync(Looper.getMainLooper());
    AppDatabase db;
    EditText heading, description;
    FloatingActionButton button;

    @Override
    protected void onCreate(Bundle savedInstanceBundle) {
        super.onCreate(savedInstanceBundle);
        setContentView(R.layout.activity_new_note);

        db = Room.databaseBuilder(getApplicationContext(), AppDatabase.class, "my-notes").build();

        heading = findViewById(R.id.textViewHeading);
        description = findViewById(R.id.textViewDescription);
        button = findViewById(R.id.floatingActionButton2);

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String noteHeading = heading.getText().toString();
                String noteDescription = description.getText().toString();

                if(TextUtils.isEmpty(noteHeading)){
                    Toast.makeText(ActivityNewNote.this, "Input heading for new note!", Toast.LENGTH_SHORT).show();
                } else{
                    executorService.execute(new Runnable() {
                        @Override
                        public void run() {
                            Note note = new Note(noteHeading, noteDescription);
                            db.noteDao().insertAll(note);
                            Intent intent = new Intent(ActivityNewNote.this, MainActivity.class);
                            startActivity(intent);
                        }
                    });
                }
            }
        });


    }
}
