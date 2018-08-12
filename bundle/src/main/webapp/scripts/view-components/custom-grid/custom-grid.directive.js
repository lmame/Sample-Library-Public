(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.custom-grid')
        .directive('comExampleSamplelibraryCustomGrid', function (RX_RECORD_GRID,
                                                                  RX_RECORD_DEFINITION,
                                                                  rxDataPageResource,
                                                                  rxViewComponentEventManager) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/custom-grid/com-example-samplelibrary-custom-grid.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    var _config = $scope.rxConfiguration.propertiesByName,
                        eventManager = rxViewComponentEventManager.getInstance($scope);

                    $scope.title = _config.titleFilter;

                    // We need to configure the grid
                    // Some of the parameters are OOTB ui-grid (http://ui-grid.info/) some are BMC
                    $scope.gridConfiguration = {
                        enableFiltering: false,
                        enableRowSelection: RX_RECORD_GRID.selectionTypes.single,
                        pageSize: 20,
                        // Column list.
                        // fieldId is actually the fieldName coming from the datapagequery, here:
                        /*
                            {
                                "title": "Terminator II",
                                "price": "34$"
                            }
                        */
                        columns: [
                            {
                                fieldId: 'title',
                                title: 'Title'
                            },
                            {
                                fieldId: 'price',
                                title: 'Price'
                            }
                        ],
                        // getData will override how we get data, usually we just give a record definition name etc… Here we provide data from a custom datapage query.
                        // \bundle\src\main\java\com\example\datapage\DvdDataPageQuery.java
                        // com.example.datapage.DvdDataPageQuery
                        getData: function (pageSize, startIndex, queryParams, queryArgs) {
                            // For the filters we need to convert from fieldName to fieldIds as
                            // in the Java code we are querying a record definition.
                            // The filter is set in the text zone in the grid itself.
                            var customFilter = queryParams.queryExpression ? queryParams.queryExpression : '';

                            if (customFilter) {
                                customFilter = customFilter.replace('\'title\'', '\'10029002\'');
                                customFilter = customFilter.replace('\'price\'', '\'10029003\'');
                            }

                            return rxDataPageResource
                                .withType({dataPageType: _config.datapagequeryName})
                                .get(pageSize, startIndex, {
                                    title: $scope.title,
                                    customFilter: customFilter
                                });
                        },
                        // Field Type, once again the id is actually the fieldname coming from the datapagequery
                        getRecordDefinition: function () {
                            return {
                                fieldDefinitions: [
                                    {
                                        id: 'title',
                                        resourceType: RX_RECORD_DEFINITION.dataTypes.character.resourceType
                                    },
                                    {
                                        id: 'price',
                                        resourceType: RX_RECORD_DEFINITION.dataTypes.character.resourceType
                                    }
                                ]
                            };
                        },
                        // Here it’s advanced options, for example it’s to do something when the selection changes.
                        // Those methods are explained in ui-grid documentation.
                        uiGridOptions: {
                            // We disable select all functionality (ui-grid parameter)
                            enableSelectAll: false,

                            onRegisterApi: function (api) {
                                // Grabbing ui-grid api object
                                $scope.gridApi = api;

                                function onRowSelectionChanged() {
                                    // Add your own code here.
                                    // This code will be triggered when a line is selected.

                                    // Here we output the selectedTitle
                                    var selectedDvds = api.selection.getSelectedRows(),
                                        selectedTitles = _.pluck(selectedDvds, 'title').join(', ');

                                    eventManager.propertyChanged({
                                        property: 'selectedTitle',
                                        oldValue: null,
                                        newValue: selectedTitles
                                    });
                                }

                                // We plug those ui-grid events and tell them to execute method onRowSelectionChanged.
                                api.selection.on.rowSelectionChanged(null, onRowSelectionChanged);
                                api.selection.on.rowSelectionChangedBatch(null, onRowSelectionChanged);
                            }
                        }
                    };

                    var init = function () {
                        $scope.title = _config.titleFilter;
                    };

                    $scope.$watch('rxConfiguration.propertiesByName.titleFilter', init);
                }
            };
        });
})();