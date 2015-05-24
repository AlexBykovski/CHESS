chessApp.controller('GameCtrl', ['$scope', '$log', '$window', '$rootScope', function ($scope, $log, $window,
                                                                                      $rootScope) {
    $scope.messageChessAreaWhite = "";
    $scope.messageChessAreaBlack = "";

    var parseNameFigureForTextarea = function(type){
        switch(type){
            case "wP":
            case "bP":
                return "";
            case "wR":
            case "bR":
                return "R ";
            case "wB":
            case "bB":
                return "B ";
            case "wN":
            case "bN":
                return "N ";
            case "wQ":
            case "bQ":
                return "Q ";
            case "wK":
            case "bK":
                return "K ";
        }
    };

    $window.chessMaps = [];

    var i = 1;
    document.addEventListener('chessStep', function (e) {
        $scope.messageChessAreaBlack = parseNameFigureForTextarea($window.chessMaps[$window.chessMaps.length - 1].figure) +
        $window.chessMaps[$window.chessMaps.length - 1].start + " -> " +
        $window.chessMaps[$window.chessMaps.length - 1].end + "\n" + $scope.messageChessAreaBlack;
    }, false);

    $rootScope.$on("done.chess", function() {
        window.isIIStep = true;
        $scope.messageChessAreaWhite = i + ') ' + parseNameFigureForTextarea($window.chessMaps[$window.chessMaps.length - 1].figure) +
        $window.chessMaps[$window.chessMaps.length - 1].start + " -> " +
        $window.chessMaps[$window.chessMaps.length - 1].end + "\n" + $scope.messageChessAreaWhite;
        i++;
    });
}]);