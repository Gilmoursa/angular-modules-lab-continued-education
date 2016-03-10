function MainController($scope){
    $scope.name = 'Austin'
}

angular
    .module('app')
    .controller('MainController', MainController)