# Datapalooza Node.js starter

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/ibm-datapalooza/nodejs-starter.git)

## Instructions
1) Click the Deploy to Bluemix button to deploy this application into your Bluemix environment. If you do not have a Bluemix account, you can signup whilst deploying the application. Choose a name for the application which will form the basis of your application URL. Whilst the application is deploying, complete step 2.  

2) Register for [Transport API](https://developer.transportapi.com/signup) and create an application. Note down your `APP_ID` and `APP_KEY`.  

3) When the application has finished deploying into Bluemix, navigate to the application itself. Your screen should look similar to the following:  

![Bluemix Dashboard](/docs/dash.png)

4) Click "Edit Code" in the top right hand corner. This loads your application into jazz hub and will allow you to edit the code in the browser.  

5) Open the .env file and enter in your TransportAPI `APP_ID` and `APP_KEY` into the fields as shown:  

![API Keys](/docs/keys.png)

6) Save the file and click the Git logo on the left hand side  

![Git Jazz Hub](/docs/git.png)

7) Enter a commit message, click "Commit" then "Push" your changes. This will automatically trigger the Build and Deploy pipeline and update your application in Bluemix.  

8) Click "Build & Deploy" to see the status of the deployment. Once this stage has completed, your app should be updated on the Bluemix URL.  

9) Your app has now been loaded with your Transport API keys. You can experiment with the application, running queries for nearby train stations, Tfl journey planning, 10 day and 24 hour weather forecasting as well as viewing the OS Map.  


## API Documentation

Transport API: http://docs.transportapi.com/index.html?raml=http://transportapi.com/v3/raml/transportapi.raml  
TheWeatherChannel: https://www.ng.bluemix.net/docs/services/Weather/index.html  
Ordnance Survey: https://apidocs.os.uk/docs/introduction  

## Other data
Wimbledon Tennis Data (2014/15) and weather data for Wimbledon (2014/15): https://github.com/ibm-datapalooza/wimbledon-datasets