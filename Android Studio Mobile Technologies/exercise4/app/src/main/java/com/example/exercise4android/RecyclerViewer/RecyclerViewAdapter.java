package com.example.exercise4android.RecyclerViewer;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.recyclerview.widget.RecyclerView;

import com.example.exercise4android.Model.Course;
import com.example.exercise4android.R;
import com.example.exercise4android.UpdateCourse;

import java.util.List;

public class RecyclerViewAdapter extends RecyclerView.Adapter {
    List<Course> courseList;
    Context context;

    public class MyViewHolder extends RecyclerView.ViewHolder {
        TextView imeTxt;
        ConstraintLayout layout;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            imeTxt = itemView.findViewById(R.id.courseName);
            layout = itemView.findViewById(R.id.recycleItemLayout);
        }
    }

    public RecyclerViewAdapter(List<Course> courseList) {
        this.courseList = courseList;
    }

    @NonNull
    @Override
    public RecyclerView.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        context = parent.getContext();
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.recycler_view_holder, parent, false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull RecyclerView.ViewHolder holder, int position) {
        MyViewHolder viewHolder = (MyViewHolder)holder;
        Course course = courseList.get(position);

        viewHolder.imeTxt.setText(course.getIme());
        viewHolder.layout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(context, UpdateCourse.class);
                intent.putExtra("position", position);
                context.startActivity(intent);
            }
        });
    }

    @Override
    public int getItemCount() {
        return courseList.size();
    }
}