package com.example.zad1;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import java.util.Arrays;
import java.util.List;


public class MainActivity extends AppCompatActivity {


    Button button;
    EditText num1;
    EditText num2;
    EditText operation;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_zad2a);
        button = (Button)findViewById(R.id.button);
        num1 = (EditText) findViewById(R.id.num1);
        num2 = (EditText) findViewById(R.id.num2);
        operation = (EditText) findViewById(R.id.operation);


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

        List<String> operators = (Arrays.asList("+", "-", "*", "/"));
        MainActivityResult myClass = new MainActivityResult();

        if (MainActivityFunctions.isEmpty(num1) || MainActivityFunctions.isEmpty((num2)) || MainActivityFunctions.isEmpty((operation))) {
            Toast.makeText(context, msg1, duration).show();
        } else if (!operators.contains(operation.getText().toString())){
            Toast.makeText(context, msg2, duration).show();
        } else {
            int num1Int = Integer.parseInt(num1.getText().toString());
            int num2Int = Integer.parseInt(num2.getText().toString());
            Number k = MainActivityFunctions.getResult(num1Int, num2Int, operation.getText().toString(), context, duration);
            if(k instanceof Float){
                MainActivityFunctions.proceedMessage(context, Float.toString((Float) k), myClass);
            }else if(k instanceof Integer){
                MainActivityFunctions.proceedMessage(context, k.toString(), myClass);
            }
        }

    }
}