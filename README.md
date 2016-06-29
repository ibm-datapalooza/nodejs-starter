# Datapalooza Node.js starter

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/ibm-datapalooza/nodejs-starter.git)

## Instructions
1) Click the Deploy to Bluemix button to deploy this application into your Bluemix environment. If you do not have a Bluemix account, you can signup whilst deploying the application. Choose a name for the application which will form the basis of your application URL. Whilst the application is deploying, complete step 2.  

2) Register for [Transport API](https://developer.transportapi.com/signup) and create an application. Note down your `APP_ID` and `APP_KEY`. These can be accessed by clicking "Dashboard" and then "Applications" from your TransportAPI account.  

3) When the application has finished deploying into Bluemix, it will prompt you to view the app or edit the code. Click "Edit Code" to add your TransportAPI keys.  

![Edit code](/docs/editcode.png)

4) Open the .env file and enter in your TransportAPI `APP_ID` and `APP_KEY` into the fields as shown:  

![API Keys](/docs/keys.png)

5) Save the file and click the Git logo on the left hand side  

![Git Jazz Hub](/docs/git.png)

6) Check that the `.env` file is included in the commit, enter a commit message, click "Commit" and "Push" your changes. This will automatically trigger the Build and Deploy pipeline and update your application in Bluemix.  

7) Click "Build & Deploy" to see the status of the deployment. Once this stage has completed, your app will be updated. Navigate to your Bluemix dashboard by clicking the "Dashboard" link in the header. Note that if you have signed up to the London region and you get the following message when clicking "Dashboard" you will need to change the URL to `console.eu-gb.bluemix.net` instead of `console.ng.bluemix.net`.  

![region issue](/docs/region.jpg)

8) You should then see your application in your Bluemix dashboard. You can then click the application to get the URL.  

9) Your app has now been loaded with your Transport API keys. You can experiment with the application, running queries for nearby train stations, Tfl journey planning, 10 day and 24 hour weather forecasting as well as viewing the OS Map.  

10) If you haven't managed to complete the above steps, the application is available at http://dan-datapalooza-demo.mybluemix.net/


## API Documentation

Transport API: http://docs.transportapi.com/index.html?raml=http://transportapi.com/v3/raml/transportapi.raml  
TheWeatherChannel: https://www.ng.bluemix.net/docs/services/Weather/index.html  
Ordnance Survey: https://apidocs.os.uk/docs/introduction  

## Other data
Wimbledon Tennis Data (2014/15) and weather data for Wimbledon (2014/15): https://github.com/ibm-datapalooza/wimbledon-datasets