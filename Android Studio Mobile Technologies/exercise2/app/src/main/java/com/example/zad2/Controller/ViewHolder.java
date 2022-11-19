package com.example.zad2.Controller;

import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.zad2.R;


public class ViewHolder extends RecyclerView.ViewHolder {
    private TextView name, stars;
    private ImageView imageView;
    public ViewHolder(@NonNull View itemView) {
        super(itemView);
        name = (TextView) itemView.findViewById(R.id.repositoryName);
        stars = (TextView) itemView.findViewById(R.id.starsCount);
        imageView = (ImageView) itemView.findViewById(R.id.imageView);
    }

    public TextView getName(){
        return name;
    }

    public TextView getStars(){
        return stars;
    }

    public ImageView getImageView() {
        return imageView;
    }
}
