app.controller('homeController', ['$scope', '$window', '$sce', '$state', '$stateParams', '$timeout', function($scope, $window, $sce, $state, $stateParams, $timeout){
    console.log("home");
}]);

app.controller('detailController', ['$scope', '$window', '$sce', '$state', '$stateParams', '$timeout', function($scope, $window, $sce, $state, $stateParams, $timeout){
    $scope.links = $stateParams.navLinks;
    $scope.id = $stateParams.id;
    $scope.stateName = $state.current.name;
}]);

