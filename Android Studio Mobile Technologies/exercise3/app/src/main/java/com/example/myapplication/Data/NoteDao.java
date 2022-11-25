package com.example.myapplication.Data;

import androidx.room.Dao;
import androidx.room.Delete;
import androidx.room.Insert;
import androidx.room.Query;

import java.util.List;

@Dao
public interface NoteDao {
    @Query("SELECT * FROM note")
    List<Note> getAll();

    @Query("SELECT * FROM note WHERE uid IN (:noteIds)")
    List<Note> loadAllByIds(int[] noteIds);


    @Query("SELECT * FROM note WHERE heading LIKE :heading LIMIT 1")
    Note findByHeading(String heading);

    @Insert
    void insertAll(Note... notes);

    @Delete
    void delete(Note note);
}