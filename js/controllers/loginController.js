/**
 * Created by tina on 7/4/16.
 */
app.controller( 'loginController', function($scope,$http,$location) {

    $scope.loginData = null;
    $http.get( 'data/login.json' )
        .success( function( data ) {
            $scope.loginData = data;
        })

    $scope.login = function(user) {
        var flag = 0;
        for(var i = 0; i < $scope.loginData.length; i++) {
            var obj = $scope.loginData[i];
            if(user.name === obj.username && user.passwd === obj.pass) {
                //$location.path( "/success" );
                //window.location.href="success.html";
                $('#loginModal').modal('hide');
                $('#purchaseModal').modal('show');
                break;
            } else {
                flag = 1;
            }
        }

        if ( flag == 1 ) {
            alert( "Wrong password or username. Try again");
        }
    }

});