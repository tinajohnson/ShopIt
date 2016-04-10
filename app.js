/**
 * Created by tina on 7/4/16.
 */

var shopApp = angular.module('shopApp', ['ngRoute']);

// configure our routes
shopApp.config(function($routeProvider, $locationProvider) {
    $routeProvider

        // route for the home page
        .when('/success', {
            templateUrl : 'partial/success.html',
            controller  : 'loginController'
        })

});







