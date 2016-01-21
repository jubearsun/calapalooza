app.controller('nongreekCtrl', ['$scope', function($scope) {
    $scope.header = 'Professional Organizations';

    $scope.orgs = [
        {
            name: '180 Degrees Consulting',
            link: 'http://180dc.org/branch/berkeley/',
            description: '180 Degrees provides socially conscious organizations around the world with high quality, affordable consulting services.'
        },
        {
            name: 'American Advertising Federation (imagiCal)',
            link: 'http://www.calaaf.com/',
            description: 'imagiCal is a fully student-run advertising agency and creative consultancy'
        },
        {
            name: 'ASCEND',
            link: 'http://ascendberkeley.org/',
            description: 'Ascend is the premier business organization dedicated to enabling its members and the community to leverage the leadership and global business potential of its members.'
        },
        {
            name: 'Berkeley Business Society',
            link: 'http://www.berkeleybusinesssociety.com/#home',
            description: 'Our primary goal is to use our extensive network to help members access a bank of internships, mentorships, and networking opportunities while gaining real-world experience and building their professional skills.'
        },
        {
            name: 'Berkeley Consulting',
            link: 'http://bc.berkeley.edu/',
            description: 'Berkeley Consulting (BC) is an student-run nonprofit management consulting organization that provides innovative solutions to core business problems faced by its clients.'
        }
    ];
}]);
