package com.example.zad1;

import android.content.Context;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import java.util.Arrays;
import java.util.List;

public class MainActivityZad2b extends AppCompatActivity {


    Button button;
    EditText num1;
    EditText num2;
    Spinner operation;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_zad2b);
        button = (Button)findViewById(R.id.button2);
        num1 = (EditText) findViewById(R.id.number1);
        num2 = (EditText) findViewById(R.id.number2);
        operation = (Spinner) findViewById(R.id.planets_spinner);
        ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(this,
                R.array.planets_array, android.R.layout.simple_spinner_item);

        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        operation.setAdapter(adapter);



        button.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view){ calculate(); }
        });


    }


    public void calculate() {


        int duration = Toast.LENGTH_SHORT;
        Context context = getApplicationContext();
        CharSequence msg1 = "Insert all inputs!";
        CharSequence msg2 = "Wrong operation!";
        String oper = operation.getSelectedItem().toString();

        List<String> operators = (Arrays.asList("+", "-", "*", "/"));
        MainActivityResult myClass = new MainActivityResult();

        if (MainActivityFunctions.isEmpty(num1) || MainActivityFunctions.isEmpty((num2))) {
            Toast.makeText(context, msg1, duration).show();
        } else {
            int num1Int = Integer.parseInt(num1.getText().toString());
            int num2Int = Integer.parseInt(num2.getText().toString());
            Number k = MainActivityFunctions.getResult(num1Int, num2Int, oper, context, duration);

            if(k instanceof Float){
                MainActivityFunctions.proceedMessage(context, Float.toString((Float) k), myClass);
            }else if(k instanceof Integer){
                MainActivityFunctions.proceedMessage(context, k.toString(), myClass);
            }
        }

    }

}
