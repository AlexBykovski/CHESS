chessApp.factory('RegisterService', ['$resource', function ($resource) {
    return $resource(
        ":url", {}, {
            query: {
                method: 'POST', url: "/api/counter/"
            },
            checkMail: {
                method: 'POST', url: "/checkmail"
            },
            setUser: {
                method: 'POST', url: "/api/user/create"
            }
        }
    );
}]);