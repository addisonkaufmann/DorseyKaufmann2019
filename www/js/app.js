var app = angular.module('app', ['ui.router', 'chart.js']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================

        .state('home', {
            url: '/home',
            templateUrl: 'templates/partial-home.html',
            controller: 'homeController'
        });
        // .state('sonic-data', {
        //     url: '/sonic-data',
        //     templateUrl: 'templates/partial-sonic-data.html',
        //     controller: 'homeController'
        // })

        // .state('detail', {
        //     url: '/detail/:county/:contaminant', 
        //     templateUrl: 'templates/detail.html', 
        //     controller: 'detailController', 
        //     resolve: {
        //         GilaData: function($http, $stateParams){
        //             var path = "assets/data/Gila/Gila" + $stateParams.contaminant + ".json";

        //             return $http.get(path).then(function onSuccess(response){
        //                 return response.data;
        //             })
        //             .catch(function onError(response){
        //                 return 0;
        //             });
        //         },
        //         YavapaiData: function($http, $stateParams){
        //             var path = "assets/data/Yavapai/Yavapai" + $stateParams.contaminant + ".json";

        //             return $http.get(path).then(function onSuccess(response){
        //                 return response.data;
        //             })
        //             .catch(function onError(response){
        //                 return 0;
        //             });
        //         },
        //         PimaData: function($http, $stateParams){
        //             var path = "assets/data/Pima/Pima" + $stateParams.contaminant + ".json";

        //             return $http.get(path).then(function onSuccess(response){
        //                 return response.data;
        //             })
        //             .catch(function onError(response){
        //                 return 0;
        //             });
        //         },
        //     }
        // })
       
});


