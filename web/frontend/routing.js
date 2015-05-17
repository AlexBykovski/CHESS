chessApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        /*$locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });*/

        $routeProvider
            .when('/homepage', {
                templateUrl: 'frontend/main-page/main.html',
                controller: "AppCtrl"
            })
            .when('/game', {
                templateUrl: 'frontend/game-page/game-page.html',
                controller: "GameCtrl"
            })
            .when('/register', {
                templateUrl: 'frontend/register-page/register.html',
                controller: "RegisterCtrl"
            })
            .when('/login', {
                templateUrl: 'frontend/login-page/login.html',
                controller: "LoginCtrl"
            })
            .when('/rules', {
                templateUrl: 'frontend/rules-page/rules.html',
                controller: "RulesCtrl"
            })
            .when('/', {
                templateUrl: 'frontend/main-page/main.html',
                controller: "AppCtrl"
            })
            .otherwise(
            {
                templateUrl: 'frontend/404-page/404-page.html'
                //controller: "AppCtrl"
            });
    }]);