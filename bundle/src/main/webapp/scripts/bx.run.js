(function () {
    'use strict';
    angular.module('com.example.samplelibrary').run(function (rxApplicationConfigurator, BX) {
        rxApplicationConfigurator.runApplicationConfig({
            bundleId: BX.bundleId
        });
    });
})();

