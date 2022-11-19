package com.example.zad2.Controller;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.example.zad2.Objects.Item;
import com.example.zad2.R;
import com.squareup.picasso.Picasso;

import java.util.ArrayList;
import java.util.List;

public class RecyclerAdapter extends RecyclerView.Adapter<ViewHolder> {

    private List<Item> itemSet;

    public RecyclerAdapter(List<Item> itemSet) {
        this.itemSet = itemSet;
    }

    public List<Item> getItemSet() {
        return itemSet;
    }

    public void setItemSet(List<Item> itemSet) {
        this.itemSet = itemSet;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.user_list, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        itemSet.get(position).getName();
        holder.getName().setText(itemSet.get(position).getName());
        holder.getStars().setText(String.valueOf(itemSet.get(position).getStargazersCount()));
        //Picasso.get().load(itemSet.get(position).getOwner().getAvatarUrl()).into(holder.getImageView());
        Glide.with(holder.getImageView()).load(itemSet.get(position).getOwner().getAvatarUrl()).circleCrop().into(holder.getImageView());


    }

    @Override
    public int getItemCount() {
        return itemSet.size();
    }
}
