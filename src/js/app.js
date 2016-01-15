var app = angular.module('calapalooza', [
        'ui.router',
        'ngTouch'
    ]);

app.run([
    '$rootScope',
    '$state',
    '$stateParams',
    function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
]);

app.config(['$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/home.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('start', {
                url: '/1',
                templateUrl: './views/start.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('hobby', {
                url: '/2',
                templateUrl: './views/hobby.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('active', {
                url: '/3',
                templateUrl: './views/active.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('nonactive', {
                url: '/4',
                templateUrl: './views/nonactive.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('active-arts', {
                url: '/5',
                templateUrl: './views/active-arts.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('sports', {
                url: '/6',
                templateUrl: './views/sports.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('career', {
                url: '/7',
                templateUrl: './views/career.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            });
    }
]);
