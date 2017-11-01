(function () {
    'use strict';
    angular.module('com.example.samplelibrary.viewport').config(function ($stateProvider, RX_BODY_STATE) {
        var viewDefinitionState = {
                url: '/view/{viewDefinitionName:nonURIEncoded}?param',
                views: {
                    content: {
                        templateUrl: 'scripts/view/runtime/runtime-view.view.html',
                        controller: 'RuntimeViewController'
                    }
                },
                params: {
                    param: {
                        array: true
                    }
                },
                data: {
                    header: RX_BODY_STATE.header.autoHide,
                    content: RX_BODY_STATE.content.noPadding
                }
            };

            var gridViewDefinitionState = angular.merge(_.cloneDeep(viewDefinitionState), {
                url: '/grid-view/{viewDefinitionName:nonURIEncoded}?param',
                data: {
                    header: ""
                }
            });

            $stateProvider
                .state('bx', {
                    abstract: true,
                    url: '/bx',
                    templateUrl: 'scripts/viewport/viewport.view.html',
                    controller: 'ViewportController',
                    resolve: {
                        session: function (rxAuthentication) {
                            return rxAuthentication.initSession();
                        }
                    }
                })
                .state('bx.search', {
                    url: '/search',
                    views: {
                        content: {
                            templateUrl: 'scripts/search/search-content.html',
                            controller: 'SearchController'
                        }
                    }
                })
                .state('bx.view', viewDefinitionState)
                .state('bx.grid-view', gridViewDefinitionState)
                .state('bx.administration-settings', {
                    url: '/settings/:type/:workspace/:compName/:node/:bundleName',
                    views: {
                        'content': {
                            templateUrl: 'scripts/administration/settings/administration-settings.view.html',
                            controller: 'AdministrationSettingsController'
                        }
                    },
                    params: {
                        bundleName: '',
                        compName: 'home',
                        node: 'root',
                        type:'application',
                        workspace: 'local'
                   }
                });
        });
})();
