app.controller('spiritCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.buttonColor = {
        color: $rootScope.buttonColor
    };

    $scope.header = 'Cal Spirit Groups';

    $scope.subheader = 'Got spirit?  Wear it proudly!  Show off your school spirit by joining a Cal spirit group.';

    $scope.teams = [
        {
            name: 'Cal Cheerleading',
            link: 'http://calspirit.berkeley.edu/cheer/',
            description: 'Cal Cheerleading is a group of men and women who support Cal athletics through traditional collegiate cheerleading'
        },
        {
            name: 'Cal Dance Team',
            link: 'http://calspirit.berkeley.edu/dance/index.php',
            description: 'The Cal Dance Team is composed of 14 dancers who perform at various sporting events, including but not limited to: Football, Basketball, and Volleyball.'
        },
        {
            name: 'UC Rally Committee',
            link: 'http://ucrc.berkeley.edu/',
            description: 'As guardians of all Cal Spirit and Traditions, the UC Rally Committee is entrusted with continuing time-honored traditions and protecting the University’s most precious symbols.'
        },
        {
            name: 'Cal Mic Men',
            link: 'http://calspirit.berkeley.edu/micmen/index.php',
            description: 'The Mic Men are an elite group of the Cal Spirit Squad whose sole charge is to make sure that California Pride is always present.'
        },
        {
            name: 'Cal Band',
            link: 'http://calband.berkeley.edu/',
            description: 'Cal Band entertains Cal fans with a brand new halftime show at each home football game.'
        }
    ];

}]);
