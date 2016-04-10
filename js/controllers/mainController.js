/**
 * Created by tina on 6/4/16.
 */
var app = angular.module( 'shopApp', [] );
app.controller( 'mainController', function( $scope,$http ) {
    $scope.contents =  null;
    $scope.added = [];
    var Totprice = 0;

    $http.get( 'data/category.json' )
        .success( function( data ) {
            $scope.contents = data;
        })
    $scope.addToCart = function( name, price ) {
        var item= {
            name: name,
            price: price
        };
        Totprice = parseInt(Totprice) + parseInt(item.price);
        $scope.added.push( item );
        if($scope.added == null) {
            $('#checkoutModal').modal('hide');
        }

        $scope.tax = 0.10 * Totprice;
        $scope.total = $scope.tax + 300 + Totprice;
        window.onload = function() {
            localStorage.setItem("data", $scope.added);
        }
    }


});