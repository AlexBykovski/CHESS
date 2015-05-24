chessApp.factory('SessionService', [function () {
        var authUser = null;
        var currentGame = null;

        return {
            setUser: function(user) {
                authUser = user;
            },
            getUser: function() {
                return authUser;
            },
            isAuthorized: function() {
                return authUser && authUser._id;
            }
        }
    }]);