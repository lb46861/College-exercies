package com.example.zad2.Controller;


import android.content.Context;
import android.util.Log;

import androidx.recyclerview.widget.RecyclerView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.example.zad2.Objects.Data;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;


import org.json.JSONObject;

public class RequestController {


    private static Data data;


    public static void doRequest(Context obj, RecyclerView recyclerView){
        RequestQueue queue = Volley.newRequestQueue(obj);
        String url = "https://api.github.com/search/repositories?q=stars:%3E100000";
        data = new Data();

        StringRequest stringRequest = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                Gson gson = new GsonBuilder().create();
                data = gson.fromJson(response, Data.class);
                RecyclerAdapter adapter;
                adapter = new RecyclerAdapter(data.getItems());
                recyclerView.setAdapter(adapter);
//                if(data != null){
//                    for(Item item: data.getItems()){
//                        Log.d("myitem", "name: " + item.getName() + " - stars: " + item.getStargazersCount() + " - avatarURL:" + item.getOwner());
//                    }
//                }
//                Log.d("myusers", data.toString());
//                Log.d("myreturn", response);

            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Log.d("mytext", error.toString());
            }
        }
        );

        queue.add(stringRequest);

    }




}