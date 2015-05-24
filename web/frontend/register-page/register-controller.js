chessApp.controller('RegisterCtrl', ['$scope', '$location', 'RegisterService', 'SessionService', '$rootScope',
    function ($scope, $location, RegisterService, SessionService, $rootScope) {
    $scope.user = {};

    $scope.registerClick = function(){
        delete $scope.user.passwordConfirm;
        $scope.user.elo = 2000;
        //currentUser().nickName + ' | ' + currentUser().elo
        RegisterService.setUser({user: $scope.user},
            function (data) {
                var tempUser = $scope.user;
                tempUser.id = data.id;
                SessionService.setUser(tempUser);
                $rootScope.isAuthorized = true;
            },
            function (error) {
                console.log(error);
            }
        );
        console.log($scope.user);
    };

}]);