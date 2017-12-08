angular.module('com.example.samplelibrary-ext', [
    // Actions,
    'com.example.samplelibrary.actions.show-alert',                     // Displaying an alert popup
    'com.example.samplelibrary.actions.use-rx-messages',                // Displaying a BMC message
    'com.example.samplelibrary.actions.run-java-command',               // Runnind a Java Command on the Server
    'com.example.samplelibrary.actions.test-action',
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
    'com.example.samplelibrary.view-components.call-action'                 // Calling a custom javascript action from javascript.
]);