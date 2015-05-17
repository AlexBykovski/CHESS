chessApp.controller('RegisterCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.user = {};

    $scope.registerClick = function(){
        console.log($scope.user);
    }
}]);