/**
 * Created by tina on 7/4/16.
 */

var app = angular.module('shopApp', ['ngRoute']);

// configure our routes
app.config(function($routeProvider, $locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'index.html',
            controller  : 'mainController'
        })
        .when('/success', {
            templateUrl : 'partials/success.html',
            controller  : 'loginController'
        })
        .otherwise({ redirectTo: '/' });

});







