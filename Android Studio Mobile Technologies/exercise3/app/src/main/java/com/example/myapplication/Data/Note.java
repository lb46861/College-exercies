package com.example.myapplication.Data;


import androidx.room.ColumnInfo;
import androidx.room.Entity;
import androidx.room.PrimaryKey;

@Entity
public class Note {

    public Note(String heading, String description){
        this.heading = heading;
        this.description = description;
    }

    @PrimaryKey(autoGenerate = true)
    public int uid;

    @ColumnInfo(name = "heading")
    public String heading;

    @ColumnInfo(name = "description")
    public String description;

}
