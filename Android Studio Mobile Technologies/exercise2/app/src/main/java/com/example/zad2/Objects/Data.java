package com.example.zad2.Objects;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import java.util.List;

public class Data {


    @SerializedName("total_count")
    @Expose
    private Integer totalCount;

    @SerializedName("items")
    @Expose
    private List<Item> items = null;

    public Integer getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(Integer totalCount) {
        this.totalCount = totalCount;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    @Override
    public String toString() {
        return "totalcount: '" + this.items + "', Items: '" + this.items;
    }
}