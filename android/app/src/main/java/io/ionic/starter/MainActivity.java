package io.ionic.starter;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
  //@Override
  public void  onCreate(Bundle saveInstanceState){

        super.onCreate(saveInstanceState);
        registerPlugin(com.getcapacitor.community.admob.AdMob.class);
    }
}

