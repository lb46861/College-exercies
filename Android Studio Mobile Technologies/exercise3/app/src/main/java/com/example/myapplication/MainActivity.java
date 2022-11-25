package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.os.HandlerCompat;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.room.Room;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.widget.EditText;

import com.example.myapplication.Data.AppDatabase;
import com.example.myapplication.Data.Note;
import com.example.myapplication.Data.NoteDao;
import com.example.myapplication.RecycleViewer.CustomAdapter;
import com.example.myapplication.RecycleViewer.RecyclerViewInterface;
import com.google.android.material.floatingactionbutton.FloatingActionButton;

import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class MainActivity extends AppCompatActivity implements RecyclerViewInterface {
    private ExecutorService executorService = Executors.newSingleThreadExecutor();
    private Handler handler = HandlerCompat.createAsync(Looper.getMainLooper());
    CustomAdapter adapter;
    AppDatabase db;
    RecyclerView recyclerView;
    FloatingActionButton buttonAdd;
    List<Note> notes;

    @Override
    protected void onCreate(Bundle savedInstanceState) {


        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        recyclerView = findViewById(R.id.recView);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));


        db = Room.databaseBuilder(getApplicationContext(),
                AppDatabase.class, "my-notes").build();

        NoteDao notedao = db.noteDao();
        buttonAdd = findViewById(R.id.floatingActionButton);


        executorService.execute(new Runnable() {
            @Override
            public void run() {
                notes = db.noteDao().getAll();
                handler.post(new Runnable() {
                    @Override
                    public void run() {
                        adapter = new CustomAdapter(notes, MainActivity.this::onNoteClick);
                        recyclerView.setAdapter(adapter);
                    }
                });
            }
        });

        buttonAdd.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                addNewNote();
            }
        });

    }

    public void addNewNote(){
        Intent intent = new Intent(MainActivity.this, ActivityNewNote.class);
        startActivity(intent);
    }

    @Override
    public void onNoteClick(int position) {
        Intent intent = new Intent(MainActivity.this, ActivityEditNote.class);
        intent.putExtra("myNote", notes.get(position)); // Implement serializable in Note class before passing object by Intent
        startActivity(intent);

    }
}