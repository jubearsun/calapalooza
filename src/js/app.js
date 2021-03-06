// Helper Functions

function setBackgroundColor(doc, state, rootScope) {
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
        publications: colors.pink,
        asuc: colors.pink,
        spirit: colors.blue,
        dance: colors.gold,
        clubsports: colors.pink,
        perform: colors.gold,
        visual: colors.blue,
        volunteer: colors.green
    };

    doc.body.style.backgroundColor = stateColors[state];
    rootScope.buttonColor = stateColors[state];
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
            setBackgroundColor($document[0], toState.name, $rootScope);
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
                url: '/',
                templateUrl: './views/start.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                },
            })
            .state('hobby', {
                url: '/',
                templateUrl: './views/hobby.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('active', {
                url: '/',
                templateUrl: './views/active.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('nonactive', {
                url: '/',
                templateUrl: './views/nonactive.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('activearts', {
                url: '/',
                templateUrl: './views/activearts.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('sports', {
                url: '/sports',
                templateUrl: './views/sports.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('career', {
                url: '/',
                templateUrl: './views/career.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('nongvt', {
                url: '/',
                templateUrl: './views/nongvt.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('professional', {
                url: '/',
                templateUrl: './views/professional.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('greek', {
                url: '/greek',
                templateUrl: './views/greek.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('nongreek', {
                url: '/nongreek',
                templateUrl: './views/nongreek.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('publications', {
                url: '/pub',
                templateUrl: './views/publications.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('asuc', {
                url: '/asuc',
                templateUrl: './views/asuc.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('spirit', {
                url: '/spirit',
                templateUrl: './views/spirit.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('dance', {
                url: '/dance',
                templateUrl: './views/dance.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('perform', {
                url: '/perform',
                templateUrl: './views/perform.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('visual', {
                url: '/visual',
                templateUrl: './views/visual.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            })
            .state('volunteer', {
                url: '/volunteer',
                templateUrl: './views/volunteer.html',
                data: {
                    pageTitle: 'Calapalooza Roadmap'
                }
            });
    }
]);
