var app = angular.module('app', ['ui.router', 'chart.js']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================

        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'homeController'
        })

        .state('art', {
            url: '/art/:id',
            templateUrl: 'templates/detail.html',
            controller: 'detailController',
            params: {
                id: 'thesis',
                navLinks: [
                    {id: 'thesis', name: 'Thesis'},
                    {id: 'ripple-effect', name: 'Ripple Effect'},
                    {id: 'apply-flux', name: 'Apply Flux to Exclude Oxygen'},
                    {id: 'body-without-organs', name: 'The Body without Organs'},
                    {id: 'lost-in-translation', name: 'Lost in Translation'},
                    {id: 'animus', name: 'Animus'},
                    {id: 'speak', name: 'SPEAK'},
                    {id: 'cryptic', name: 'Cryptic, Embedded'},
                    {id: 'change-skins', name: 'I Want to Change Skins'},
                ]
            }
        })

        .state('social-practice', {
            url: '/social-practice/:id',
            templateUrl: 'templates/detail.html',
            controller: 'detailController',
            params: {
                id: 'project-harvest',
                navLinks: [
                    {id: 'project-harvest', name: 'Project Harvest'},
                    {id: 'solar-commons', name: 'Solar Commons'},
                    {id: 'gardenroots', name: 'Gardenroots'},
                    {id: 'activism', name: 'Activism'},
                    {id: 'design', name: 'Design'},
                    {id: 'video', name: 'Video'},
                ]
            }
        })

        .state('bio', {
            url: '/bio/:id',
            templateUrl: 'templates/detail.html',
            controller: 'detailController',
            params: {
                id: 'bio',
                navLinks: [
                    {id: 'bio', name: 'Bio'},
                    {id: 'cv', name: 'C. V.'},
                    {id: 'contact', name: 'Contact'},
                ]
            }
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



