// Helper Functions

function setBackgroundColor(doc, state) {
    var colors = {
        "blue": '#1B93C0',
        "green": '#66BB6A',
        "pink": '#C54F7D',
        "gold": '#E2C558',
    };

    var stateColors = {
        home: colors.blue,
        start: colors.green,
        hobby: colors.gold,
        active: colors.blue,
        activearts: colors.pink,
        sports: colors.gold,
        nonactive: colors.pink,
        career: colors.blue,
        nongvt: colors.gold,
        professional: colors.blue,
        greek: colors.pink,
        nongreek: colors.gold,
        publications: colors.pink
    };

    doc.body.style.backgroundColor = stateColors[state];
}

var app = angular.module('calapalooza', [
        'ui.router',
        'ngTouch',
        'ngAnimate'
    ]);

app.run([
    '$rootScope',
    '$state',
    '$stateParams',
    '$document',
    function ($rootScope, $state, $stateParams, $document) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams) {
            setBackgroundColor($document[0], toState.name);
        });
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
                },
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
            .state('activearts', {
                url: '/5',
                templateUrl: './views/activearts.html',
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
            })
            .state('nongvt', {
                url: '/8',
                templateUrl: './views/nongvt.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('professional', {
                url: '/9',
                templateUrl: './views/professional.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('greek', {
                url: '/10',
                templateUrl: './views/greek.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('nongreek', {
                url: '/11',
                templateUrl: './views/nongreek.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('publications', {
                url: '/12',
                templateUrl: './views/publications.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            });
    }
]);
