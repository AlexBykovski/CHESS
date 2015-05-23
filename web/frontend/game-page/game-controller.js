chessApp.controller('GameCtrl', ['$scope', '$log', '$window', '$rootScope', function ($scope, $log, $window,
                                                                                      $rootScope) {
    $scope.messageChessArea = "";

    var parseNameFigureForTextarea = function(type){
        switch(type){
            case "wP":
                return "white Pawn";
            case "bP":
                return "black Pawn";
            case "wR":
                return "white Rook";
            case "bR":
                return "black Rook";
            case "wB":
                return "white Bishop";
            case "bB":
                return "black Bishop";
            case "wN":
                return "white Knight";
            case "bN":
                return "black Knight";
            case "wQ":
                return "white Queen";
            case "bQ":
                return "black Queen";
            case "wK":
                return "white King";
            case "bK":
                return "black King";
        }
    };

    $window.chessMaps = [];

    document.addEventListener('chessStep', function (e) {
        $scope.messageChessArea += "Moved " +
        parseNameFigureForTextarea($window.chessMaps[$window.chessMaps.length - 1].figure) +
        " from " + $window.chessMaps[$window.chessMaps.length - 1].start + " to " +
        $window.chessMaps[$window.chessMaps.length - 1].end + "\n";
    }, false);

    $rootScope.$on("done.chess", function() {
        window.isIIStep = true;
        $scope.messageChessArea += "Moved " +
        parseNameFigureForTextarea($window.chessMaps[$window.chessMaps.length - 1].figure) +
        " from " + $window.chessMaps[$window.chessMaps.length - 1].start + " to " +
        $window.chessMaps[$window.chessMaps.length - 1].end + "\n";
    });
}]);