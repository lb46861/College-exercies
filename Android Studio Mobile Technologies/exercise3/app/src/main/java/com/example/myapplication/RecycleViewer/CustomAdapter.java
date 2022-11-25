package com.example.myapplication.RecycleViewer;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.myapplication.Data.Note;
import com.example.myapplication.R;

import java.util.List;

public class CustomAdapter extends RecyclerView.Adapter<CustomAdapter.CustomViewHolder>{

    private final RecyclerViewInterface recyclerViewInterface;
    List<Note> notes;

    public CustomAdapter(List<Note> notes, RecyclerViewInterface recyclerViewInterface){
        this.notes = notes;
        this.recyclerViewInterface = recyclerViewInterface;
    }


    @NonNull
    @Override
    public CustomViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.recycle_view_holder,parent,false);
        return new CustomViewHolder(view, recyclerViewInterface);
    }

    @Override
    public void onBindViewHolder(@NonNull CustomViewHolder holder, int position) {
        holder.heading.setText(notes.get(position).heading);
    }

    @Override
    public int getItemCount() {
        return notes.size();
    }



    public static class CustomViewHolder extends RecyclerView.ViewHolder {
        public TextView heading;

        public CustomViewHolder(@NonNull View itemView, RecyclerViewInterface recyclerViewInterface) {
            super(itemView);
            this.heading = (TextView)itemView.findViewById(R.id.headingViewHolder);
            itemView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    if(recyclerViewInterface != null){
                        int position = getAdapterPosition();
                        if(position != RecyclerView.NO_POSITION){
                            recyclerViewInterface.onNoteClick(position);
                        }
                    }
                }
            });
        }
    }
}
