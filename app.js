(function () {
    'use strict';

    // Module name is handy for logging
    var id = 'app';

    // Create the module and define its dependencies.
    var app = angular.module('app', [
        // Angular modules 

        
    ]);

    // Execute bootstrapping code and any dependencies.
    app.run(['$q', '$rootScope',
        function ($q, $rootScope) {

        }]);

    app.directive('sideNav', function() {
            return {
                restrict: "A",
                replace: true,
                templateUrl: '/app/controllers/dashboard/sideMenu.html'
            };
        })
        .directive('shortCut', function() {
            return {
                restrict: "A",
                replace: true,
                templateUrl: '/app/controllers/dashboard/shortCut.html'
            };
        });
})();
