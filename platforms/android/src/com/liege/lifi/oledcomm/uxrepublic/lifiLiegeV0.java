/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.liege.lifi.oledcomm.uxrepublic;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import android.content.Context;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

//	YCA LIFI
import oledcomm.android.lifi.GeoAudioAnalysis;
import oledcomm.android.lifi.JackStatus;
import oledcomm.android.lifi.LiFiLocation;
//	End of YCA LIFI 

import org.apache.cordova.*;

public class lifiLiegeV0 extends CordovaActivity {
	//	YCA LIFI
	GeoAudioAnalysis location;
	String lifiID;
	//	END OF YCA LIFI
		
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.init();
        // Set by <content src="index.html" /> in config.xml
        super.loadUrl(Config.getStartUrl());
        //super.loadUrl("file:///android_asset/www/index.html")
        // YCA LIFI
        
      //  appView.addJavascriptInterface(myJSInterface, "JSInterface");
        
        location = new GeoAudioAnalysis(jack_status, getApplicationContext());
        //create a new GeoAudioAnalysis object
        location.watchPosition(position);
        //start to watch the position changes
        // END OF YCA LIFI

        
    }
    
    // YCA LIFI
	
	LiFiLocation position = new LiFiLocation(){

		@Override
		public void onLocationSuccess(String value) {
			// TODO Auto-generated method stub
			lifiID = value;
			//the tag ID and current light intensity are received in this value, perform your UI operations based on this
			
			
			appView.loadUrl("javascript:gettingLampNumber('"+value+"')");
			
/*			
			try {
				File myFile = new File("/sdcard/lifiID.txt");
				
				//File myFile = new File("/lifiID.txt");
				
				
				
				
				myFile.createNewFile();
				FileOutputStream fOut = new FileOutputStream(myFile);
				OutputStreamWriter myOutWriter = new OutputStreamWriter(fOut);
				myOutWriter.write(value,0,value.length());
				myOutWriter.close();
				fOut.close();
				//Toast.makeText(getBaseContext(),
				//		"Done writing SD 'mysdfile.txt'",
				//		Toast.LENGTH_SHORT).show();
			} catch (Exception e) {
				Toast.makeText(getBaseContext(), e.getMessage(),
						Toast.LENGTH_SHORT).show();
			}
*/			
		}

		@Override
		public void onLocationError(int error) {
			// TODO Auto-generated method stub

			//instead of getting a valid ID, the errors are received, also useful for your UI operations
			if(error==LiFiLocation.ERROR_NO_TAG){
			}
			else if(error==LiFiLocation.ERROR_WRONG_FORMAT){
			}
		}
	};
	
	JackStatus jack_status = new JackStatus(){

		@Override
		public void onJackEvent(int Event) {
			// TODO Auto-generated method stub
			//you can write your reactions when different JACK sensor status is present
			switch(Event){
				case JACK_PLUGGED: 
					Toast.makeText(getApplicationContext(), "LiFi sensor plugged", Toast.LENGTH_SHORT).show();
					break;
				case JACK_UNPLUGGED:
					Toast.makeText(getApplicationContext(), "LiFi sensor unplugged", Toast.LENGTH_SHORT).show();
					break;
				case JACK_ABSENCE:
					Toast.makeText(getApplicationContext(), "LiFi sensor absence", Toast.LENGTH_SHORT).show();
					break;
			}
		}
	};
	
	public void onDestroy() {
		super.onDestroy();
		location.clearPosition();
		//When the activity is destroyed, the position must be cleared.
	}

	// 	END OF YCA LIFI	

}





