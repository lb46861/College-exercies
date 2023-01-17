package com.example.exercise4android;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.example.exercise4android.Model.Course;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class UpdateCourse extends AppCompatActivity {


    private List<Course> courseList;
    private Integer position;

    private FirebaseDatabase mDatabase;
    private DatabaseReference mReferenceCourse;

    private EditText godina;
    private EditText predavac;
    private Button btnSave;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_update_course);


        godina = (EditText) findViewById(R.id.courseYear);
        predavac = (EditText) findViewById(R.id.courseProfessor);
        btnSave = (Button) findViewById(R.id.save);

        courseList = new ArrayList<>();

        btnSave.setOnClickListener(v -> setData());

        Intent intent = getIntent();
        position = intent.getIntExtra("position", 0);

        mDatabase = FirebaseDatabase.getInstance("your instance");
        mReferenceCourse = mDatabase.getReference("predmeti");

        mReferenceCourse.addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot snapshot) {
                for(DataSnapshot ds:snapshot.getChildren()){
                    Course data=ds.getValue(Course.class);
                    courseList.add(data);
                }

                Course target = courseList.get(position);
                godina.setText(target.getGodina().toString(), TextView.BufferType.EDITABLE);
                predavac.setText(target.getPredavac(),TextView.BufferType.EDITABLE);
            }

            @Override
            public void onCancelled(@NonNull DatabaseError error) {
            }
        });
    }

    private void setData() {
        Intent intent = new Intent(this, MainActivity.class);
        HashMap Course = new HashMap();
        Course.put("godina", Integer.parseInt(godina.getText().toString()));
        Course.put("predavac", predavac.getText().toString());
        mReferenceCourse.child(position.toString()).updateChildren(Course).addOnCompleteListener(new OnCompleteListener() {
            @Override
            public void onComplete(@NonNull Task task) {

                if (task.isSuccessful()) {
                    startActivity(intent);
                }
            }
        });

    }

}