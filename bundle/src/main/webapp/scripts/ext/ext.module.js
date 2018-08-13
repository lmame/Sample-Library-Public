angular.module('com.example.samplelibrary-ext', [
    // Actions,
    'com.example.samplelibrary.actions.show-alert',                     // Displaying an alert popup
    'com.example.samplelibrary.actions.use-rx-messages',                // Displaying a BMC message
    'com.example.samplelibrary.actions.run-java-command',               // Running a Java Command on the Server
    'com.example.samplelibrary.actions.test-action',                    // Example of a confirm dialog and synchronous action return
    'com.example.samplelibrary.actions.download-file',                  // Download a file from an Action Button
    // View components
    'com.example.samplelibrary.view-components.custom-label',           // custom label.
    'com.example.samplelibrary.view-components.price-calculator',       // Price calculator.
    'com.example.samplelibrary.view-components.priority-calculator',    // Priority calculator
    'com.example.samplelibrary.view-components.star-rating',            // Star Rating
    'com.example.samplelibrary.view-components.star-click-rating',        // Star click rating
    'com.example.samplelibrary.view-components.display-associated-data',  // Getting Associated data in javascript
    'com.example.samplelibrary.view-components.display-data',              // Getting data in javascript
    'com.example.samplelibrary.view-components.display-pic-in-attachment',   // Displaying a picture stored in an attachment.
    'com.example.samplelibrary.view-components.bmc-css-icons',                // Displaying css icons we can use in Innovation Studio as icons for a view component.
    'com.example.samplelibrary.view-components.rest-command',                // Calling a Custom Java Rest API or Java Command
    'com.example.samplelibrary.view-components.get-date',                    // Handling Refresh Action and integration in a Record Editor.
    'com.example.samplelibrary.view-components.test-vc',                    // View Component used in a video on how to create a view component.
    'com.example.samplelibrary.view-components.call-action',                 // Calling a custom javascript action from javascript.
    'com.example.samplelibrary.view-components.access-grid',                 // Accessing grid core api object (ui-grid).
    'com.example.samplelibrary.view-components.user-infos',                  // Getting session user information from UI and backend.
    'com.example.samplelibrary.view-components.send-list',                   // Show how to get and send data (with a list of data) from a rest api, the data being a Java class.
    'com.example.samplelibrary.view-components.click-button',                 // Shows how to trigger an OOTB BMC button through javascript code.
    'com.example.samplelibrary.view-components.trigger-activity',              // Shows how to trigger a specific process activity and getting its result in Java and Javascript.
    'com.example.samplelibrary.view-components.custom-grid'                     // Shows how to use BMC grid object and inject a custom datapagequery as datasource.
]);