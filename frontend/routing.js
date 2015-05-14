chessApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $routeProvider
            .when('/homepage', {
                templateUrl: '/main-page/main.html',
                controller: "AppCtrl"
            })
            .otherwise(
            {
                template: 'Hello page'
            });
    }]);