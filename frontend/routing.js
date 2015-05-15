chessApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        /*$locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });*/

        $routeProvider
            .when('/homepage', {
                templateUrl: 'main-page/main.html',
                controller: "AppCtrl"
            })
            .when('/game', {
                templateUrl: 'game-page/game-page.html',
                controller: "GameCtrl"
            })
            .when('/register', {
                templateUrl: 'register-page/register.html',
                controller: "RegisterCtrl"
            })
            .when('/login', {
                templateUrl: 'login-page/login.html',
                controller: "LoginCtrl"
            })
            .when('/rules', {
                templateUrl: 'rules-page/rules.html',
                controller: "RulesCtrl"
            })
            .when('/', {
                templateUrl: 'main-page/main.html',
                controller: "AppCtrl"
            })
            .otherwise(
            {
                templateUrl: '404-page/404-page.html'
                //controller: "AppCtrl"
            });
    }]);