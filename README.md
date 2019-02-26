# Sample-Library-Public
History:
* Version:
* 1.2, 2019/02/26, Converting the project to 19.2.0. This project uses now the new SDK archetype structure as well and openJDK 11, please check the SDK upgrade instructions (https://docs.bmc.com/docs/helixplatform/upgrading-bmc-helix-platform-sdk-to-19-2-0-851083022.html?src=search) and development environment upgrade (https://docs.bmc.com/docs/helixplatform/setting-up-your-ide-and-installing-bmc-helix-platform-sdk-851871275.html?src=search).
* 1.1, 2018/12/22, Converting the project to 18-11.1. This project uses now the new SDK archetype structure as well as new nodeJS / Yarn versions (https://docs.bmc.com/docs/display/innovationsuite/Upgrading+BMC+Helix+Innovation+Suite+SDK+to+18.11.01:+Patch+01). It also fixes a problem using grunt and latest BMC SSL certificate. If you cannot export or deploy your application / library due to this error "PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target" please check this thread (https://communities.bmc.com/message/801070#801070).
* 1.0, 2018/11/10, Converting the project to 18-8.1. WARNING! You still need nodeJs 6.11.2 and Yarn 0.27.5. Instructions on BMC Documentation are not totally correct for now so keep those versions to build this example for now...
* 0.9, 2018/09/18, Converting the project to 18-8.
* 0.8, 2018/08/18, adding two new examples (https://github.com/lmame/Sample-Library-Public/commit/b6cb60467f896cf69f77b12519eef57d056c30d7),
* 0.7, 2018/08/12, adding one new example (https://github.com/lmame/Sample-Library-Public/commit/2116f63828f635b2ba02b58fe4595370fdb2f00c),
* 0.6, 2018/08/11, Converting the project to 18-5.1 and adding new examples (https://github.com/lmame/Sample-Library-Public/commit/5776c28d9f56cfc28f04a6209fc0aaeba3b356e9).
* 0.5, 2018/06/18, Converting the project to 18-5.
* 0.4, 2018/04/28, Converting the project to 18-2.
* 0.3, 2018/03/21, Adding a new view component to access grid native apis and changing moment.js version.
* 0.2, 2017/12/08, Converting the project to 17-11.
* 0.1, 2017/10/31, Initial release.
* Author: Laurent Matheo.


# What is this? :)
This repository hosts several source code example for Innovation Suite.
You can request a free of charge development environment on the BMC Developer Portal (https://developers.bmc.com/site/global/home/index.gsp).


# Videos...
Most if not all examples are explained in videos available on my Youtube channel:
* https://www.youtube.com/watch?v=iaOsmuxdXTE&list=PLKhrzlPY29F8_omqn1kFEsmcVduBFmZA6
It also contains some tips and tricks that might be useful.


# Content:
Javascript View Components:
* Custom Label (how to pass information to a View Component. The component is updated each time the value changes),
* Display Associated data using Javascript framework,
* Display data using Javascript framework,
* Display a picture that is stored in an attachment of a record instance,
* List of icons you can use for your view component (it is a view component with search capability),
* Priority and VAT calculators. This one shows how to pass data to a view component as well data back from a view component each time a value changes,
* Star System: Show how to pass and get information from a view component as well as showing how to display complex information in View * Designer (slider to select the number of stars, color picker, showing the stars in the canvas etc...),
* Show how to use the "Refresh" Action to call a method in a View Component and insert the View Component into a record editor,
* Calling a Custom Command and Custom Rest API using BMC OOTB resources objects,
* Calling a Javascript Action from Javascript Code using "rxAction" method.
* Accessing a grid native apis (ui-grid).
* Accessing a grid object
* Get user session information on javascript and backend
* Use class objects and list of objects to / from get and post rest apis
* Trigger an action bouton through javascript
* Trigger specific process activity through Java / Javascript
* Use BMC grid rx-record-grid object  to display custom data (datapagequery), also shows how to query data from backend,
* Create Admin Settings for your application and get the values in Java and Javascript,


Javascript Actions:
* Calling a javascript custom Action and using rxNotification to display messages popups,
* Calling a Custom Java command using $http to get result from it,
* Confirm window. How actions can be chained and how to "break" the chain if needed. We show also how to synchronous custom javascript actions.
* Downloading a file, can be used to download a file from a grid for example,


Java Service:
* Custom Java service that returns an Object that can be used in Rule or Process designers,


Java Rest API:
* Custom Rest API,


Java Commands:
* Custom Java commands delivered as examples,


Tips & tricks
* How to pass custom objects in a process and access its properties (list of strings, object, list of objects)


Apis description:
* How to use rxNotificationMessage in UI to display notification, modify the Ttl and display the message as Html (bonus, using picture),


# Installation (using the zip file):
You can Just deploy the file "com.example.samplelibrary-1.0-SNAPSHOT.zip" on your development environment.
https://docs.bmc.com/docs/innovationsuite/cloud/importing-the-export-packages-to-deploy-tailoring-changes-of-applications-747679337.html


# Build and installation using the source code:
Please follow those steps:
* Create your developer environment:
* https://docs.bmc.com/docs/innovationsuite/cloud/setting-up-your-ide-and-installing-innovation-sdk-679716356.html
* You will need nodeJs, maven, Yarn and Java.

To deploy:
* https://docs.bmc.com/docs/innovationsuite/cloud/creating-a-project-using-maven-and-the-archetype-679717111.html
* https://docs.bmc.com/docs/innovationsuite/cloud/deploying-your-digital-service-application-for-the-first-time-to-start-working-in-innovation-studio-679716363.html

Here are the steps:
* Clone this repository,
* Change the content of the parent "pom.xml" file to insert your credentials:
```xml
    <!-- START: Bundle specific configuration. Verify and Change as per environment -->
    <developerUserName>developer</developerUserName>
    <developerPassword>password</developerPassword>
    <!-- Server name with Jetty port. -->
    <webUrl>https://developerXXXX.innovate.bmc.com</webUrl>
    <!-- END: Bundle specific configuration.-->
```
* Run the command "mvn clean install -Pdeploy" to deploy the application on your developer environment,


# Disclaimer:
These samples are released by Laurent Matheo and are released "as is" as code samples. There is no warranty, liability or support on those examples.


# Support:
Please find support on the Developer BMC Community if you have any questions or feel gree to use this git repo features (bug report etc...).


# Credits:
With the invaluable help from Dave Sulcer and Ranjit :)


# Links:
* BMC Innovation Youtube channel (https://www.youtube.com/bmcdigitalinnovator),
* BMC Developer portal (https://developers.bmc.com/site/global/home/index.gsp),
* BMC Developer Community (https://communities.bmc.com/community/developer/content?filterID=contentstatus%5Bpublished%5D~objecttype~objecttype%5Bthread%5D),
* BMC Documentation for Innovation Suite (https://docs.bmc.com/docs/innovationsuite/cloud/home-679716249.html),


# Most important:
I hope it helps :)
