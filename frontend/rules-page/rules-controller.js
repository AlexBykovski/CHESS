chessApp.controller('RulesCtrl', ['$scope', function ($scope) {
    $scope.dropdownMenu = {
        general: {
            label: "Общие правила",
            isActive: true
        },
        castling: {
            label: "Рокировка",
            isActive: false
        },
        checkMate: {
            label: "Шах и мат",
            isActive: false
        },
        enPassant: {
            label: "Взятие на проходе",
            isActive: false
        },
        transformation: {
            label: "Превращение",
            isActive: false
        },
        king: {
            label: "Король",
            isActive: false
        },
        queen: {
            label: "Ферзь",
            isActive: false
        },
        bishop: {
            label: "Ладья",
            isActive: false
        },
        knight: {
            label: "Конь",
            isActive: false
        },
        rook: {
            label: "Слон",
            isActive: false
        },
        pawn: {
            label: "Пешка",
            isActive: false
        }
    };

    $scope.activeItem = $scope.dropdownMenu.general;

    $scope.setActiveItem = function(item){
        _.pick($scope.dropdownMenu, function(value, key, object) {
            if(value.label === $scope.activeItem.label){
                $scope.dropdownMenu[key].isActive = false;
                return true;
            }
        });
        $scope.dropdownMenu[item].isActive = true;
        $scope.activeItem = $scope.dropdownMenu[item];
    };

}]);