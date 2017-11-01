(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.custom-label')
        .filter('comExampleSamplelibraryMyFilter', function () {
            return function (labelText) {
                return 'Label parameter value is: ' + labelText;
            };
        });
})();