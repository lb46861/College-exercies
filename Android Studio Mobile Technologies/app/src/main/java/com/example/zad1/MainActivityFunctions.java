package com.example.zad1;

import android.content.Context;
import android.content.Intent;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivityFunctions extends AppCompatActivity {

    public static Number getResult(int num1, int num2, String operation, Context context, int duration) {
        if(operation.equals("/") && num2 == 0) {
            Toast.makeText(context, "Cannot divide with 0!", duration).show();
        } else if(operation.equals("/")){
            Float rez = new Float(num1) / new Float(num2);
            return rez;
        }else if(operation.equals("*")){
            return num1 * num2;
        }else if(operation.equals("-")){
            return num1 - num2;
        }else if(operation.equals("+")){
            return num1 + num2;
        }
        return null;
    }

    public static boolean isEmpty(EditText etText) {
        if (etText.getText().toString().trim().length() > 0)
            return false;
        return true;
    }

    public static void proceedMessage(Context context,String msg, Object myClass){
        Intent intent = new Intent(context, myClass.getClass());
        String message = msg;
        intent.putExtra("result", message);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(intent);

    }

}
