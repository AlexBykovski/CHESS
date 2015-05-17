chessApp.controller('RegisterCtrl', ['$scope', '$location', 'RegisterService', function ($scope, $location,
                                                                                         RegisterService) {
    $scope.user = {};

    $scope.registerClick = function(){
        delete $scope.user.passwordConfirm;
        RegisterService.setUser({user: $scope.user},
            function (data) {
                console.log(data);
            },
            function (error) {
                console.log(error);
            }
        );
        console.log($scope.user);
    };

}]);