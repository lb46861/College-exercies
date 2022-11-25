package com.example.myapplication;

import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.text.TextUtils;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.os.HandlerCompat;
import androidx.room.Room;

import com.example.myapplication.Data.AppDatabase;
import com.example.myapplication.Data.Note;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ActivityEditNote extends AppCompatActivity{
    private ExecutorService executorService = Executors.newSingleThreadExecutor();
    private Handler handler = HandlerCompat.createAsync(Looper.getMainLooper());
    Note note;

    Button saveButton, deleteButton;
    EditText heading, description;
    AppDatabase db;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_edit_note);

        db = Room.databaseBuilder(getApplicationContext(), AppDatabase.class, "my-notes").build();
        heading = findViewById(R.id.editHeading);
        description = findViewById(R.id.editDescription);
        saveButton = findViewById(R.id.saveNote);
        deleteButton = findViewById(R.id.deleteNote);

        if (getIntent().hasExtra("myNote")) {
            note = getIntent().getParcelableExtra("myNote");
            heading.setText(note.heading);
            description.setText(note.description);
        }

        saveButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String newHeading = heading.getText().toString();
                String newDescription = description.getText().toString();
                if(TextUtils.isEmpty(newHeading)) {
                    Toast.makeText(ActivityEditNote.this, "Note Heading is required!", Toast.LENGTH_LONG).show();
                } else {
                    executorService.execute(new Runnable() {
                        @Override
                        public void run() {
                            Note note = new Note(newHeading, newDescription);
                            db.noteDao().insertAll(note);
                            Intent intent = new Intent(ActivityEditNote.this, MainActivity.class);
                            startActivity(intent);
                        }
                    });
                }
            }
        });

        deleteButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                AlertDialog.Builder builder = new AlertDialog.Builder(ActivityEditNote.this);
                builder.setCancelable(true);
                builder.setTitle("Delete Note");
                builder.setMessage("Confirm deletion");
                builder.setPositiveButton("Confirm",
                        new DialogInterface.OnClickListener() {
                            @Override
                            public void onClick(DialogInterface dialog, int which) {
                                executorService.execute(new Runnable() {
                                    @Override
                                    public void run() {
                                        db.noteDao().delete(note);
                                        handler.post(new Runnable() {
                                            @Override
                                            public void run() {
                                                Intent intent = new Intent(ActivityEditNote.this, MainActivity.class);
                                                Toast.makeText(ActivityEditNote.this, "Note is deleted", Toast.LENGTH_SHORT).show();
                                                startActivity(intent);
                                            }
                                        });
                                    }
                                });
                            }
                        });
                builder.setNegativeButton(android.R.string.cancel, new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {}
                });
                AlertDialog dialog = builder.create();
                dialog.show();

            }
        });
    }


}
