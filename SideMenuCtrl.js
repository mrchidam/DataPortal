(function () {
    'use strict';

    // Controller name is handy for logging
    var controllerId = 'SideMenuCtrl';

    // Define the controller on the module.
    // Inject the dependencies. 
    // Point to the controller definition function.
    angular.module('app').controller(controllerId,
        ['$scope', SideMenuCtrl]);

    function SideMenuCtrl($scope) {
        // Using 'Controller As' syntax, so we assign this to the vm variable (for viewmodel).
        var vm = this;

        // Bindable properties and functions are placed on vm.
        vm.activate = activate;
        vm.title = 'SideMenuCtrl';
        vm.showShortCut = function () {
            vm.shortCut = vm.shortCut === true ? false : true;
            console.log(vm.shortCut);
        };

        vm.toggleMenu = function(){
            vm.minifyMe = !vm.minifyMe;
            };

        vm.expandNav = function (item) {
          if (item !== vm.expandedItem) {
            vm.expandedItem = item;
          } else {
            vm.expandedItem = null;
          }
            
        };

        function activate() {
        }


        vm.menuItems = [
            { name: "wireless", menuClass: "fa fa-lg fa-fw fa-bar-chart-o", subMenus: [{ subName: "Voice analysis", url: "#" }, { subName: "Sms analysis", url: "#SMSAnalysis" }] },
            { name: "Wireline", menuClass: "fa fa-lg fa-fw fa-table",  subMenus: [{ subName: "drop call analysis", url: "#" }, { subName: "RCF analysis", url: "#RCFAnalysis" }] },
            { name: "long distance", menuClass: "fa fa-lg fa-fw fa-pencil-square-o", subMenus: [{ subName: "Call analysis", url: "#" }, { subName: "meg analysis", url: "#MEGAnalysis" }] }
            
        ];
        //#region Internal Methods        

        //#endregion
    }
})();

