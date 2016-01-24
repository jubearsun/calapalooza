app.controller('sportsCtrl', ['$scope', function($scope) {

    $scope.header = 'Sports Teams/Clubs';

    $scope.sports = [
        {
            name: 'Cal Aquatic Masters Swim Team',
            link: 'http://recsports.berkeley.edu/sports/aquatic-masters-swim-team/',
            description: 'The Cal Aquatic Masters swim team at UC Berkeley is a registered club with United States Masters Swimming.  The program is open to all adult swimmers (fitness, triathlete, competitive, non-competitive) who are dedicated to improving their fitness through swimming.'
        },
        {
            name: 'Martial Arts',
            link: 'http://recsports.berkeley.edu/sports/martial-arts/',
            description: 'The UC Martial Arts Program is dedicated to providing outstanding martial arts instruction to the UC Berkeley campus and surrounding community. The program is a world renowned leader in the promotion, development, and overall growth of the martial arts, and is a model for other universities.'
        },
        {
            name: 'Cal Dragon Boat',
            link: 'https://caldragonboat.wordpress.com/',
            description: 'Cal Dragon Boat is a student-run organization at UC Berkeley that competes as a recreational dragon boat team amongst other college and adult dragon boat teams.'
        }
    ];

}]);
