(function () {
    'use strict';
    angular.module('com.example.samplelibrary').config(function (rxApplicationConfiguratorProvider) {
        rxApplicationConfiguratorProvider.configure({
            runtimeViewStateName: 'bx.view',
            searchResultsStateName: 'bx.search',
            administrationSettingsState: 'bx.administration-settings',
            translateLoaderParts: ['com.example.samplelibrary']
        });
    });
})();