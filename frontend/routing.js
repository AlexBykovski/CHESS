chessApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        /*$locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });*/

        $routeProvider
            .when('/homepage', {
                templateUrl: 'game-page/game-page.html',
                controller: "AppCtrl"
            })
            .otherwise(
            {
                controller: "AppCtrl"
            });
    }]);