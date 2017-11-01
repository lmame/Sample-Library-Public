(function () {
    'use strict';
    angular.module('com.example.samplelibrary.viewport').controller('ViewportController', function ($scope, rxBodyState, rxAuthorization, rxShellConfigResource) {
        $scope.$on('$stateChangeSuccess', function(event, toState){
        	$scope.themeUrl = "/api/rx/application/theme/theme.css?" + new Date().getTime();
        	$scope.navigationBarItems = [];

        	$scope.$on('$stateChangeSuccess', function(event, toState){
                var stateData = toState.data || {};

                rxBodyState.setContentState(stateData.content);
            });

        	rxShellConfigResource.get().then(function(shellConfig) {
                var items = shellConfig.navigationBarItems;

                _.each(items, function (item) {
                    if (item.state) {
                        if (rxAuthorization.isStateAuthorized(item.state)) {
                            $scope.navigationBarItems.push(item);
                        }
                    }
                    else {
                        $scope.navigationBarItems.push(item);
                    }
                });
            });
        });
    });
})();
