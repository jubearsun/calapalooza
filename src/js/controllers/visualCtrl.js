app.controller('visualCtrl', ['$scope', function($scope) {

    $scope.header = 'Design and Arts Clubs';

    $scope.subheader = 'Got a feel for the arts but don\'t like to perform?  Don\'t worry, there are plenty of ~innovative~ clubs to keep you on your toes!';

    $scope.clubs = [
        {
            name: '3D Modeling Club',
            link: 'https://www.facebook.com/3dmodelingatberkeley',
            blurb: 'Interested in engineering parts, creating custom game assets, or winning design competitions? Then come check out 3DMC!'
        },
        {
            name: 'Berkeley Innovation (BI)',
            link: 'http://innovation.berkeley.edu/',
            blurb: 'Berkeley Innovation is the human-centered design group at UC Berkeley. Our members come from a wide range of disciplines, but share a love of design thinking and innovation.'
        },
        {
            name: 'Biological Artistic Design (BAD)',
            link: 'https://www.facebook.com/groups/biologicalartdesign/',
            blurb: 'Biological Artistic Design strives to integrate artistic vision with biological interests.'
        },
        {
            name: 'Blueprint',
            link: 'http://www.calblueprint.org/',
            blurb: 'Blueprint is a non-profit organization aimed at bringing technologies to local nonprofit organizations that are making social change.'
        },
        {
            name: 'Design for America',
            link: 'http://dfa.berkeley.edu/',
            blurb: 'DFA Berkeley is an interdisciplinary group of students working together using human-centered design to create local and social impact. We design products, programs, experiences, and innovative ways to tackle community problems.'
        },
        {
            name: 'EthiCal',
            link: 'http://ethicalapparel.org/',
            blurb: 'We design and screenprint custom t-shirts and apparel. Our profits are lent to underprivileged entrepreneurs so that they may start their own businesses and achieve a sustainable source of income.'
        },
        {
            name: 'Ink at Berkeley',
            link: 'https://www.facebook.com/ink.berkeley/',
            blurb: 'As a student-run art club at UC Berkeley, we aim at exploring and innovating new artistic expressions to combine the beauty of arts from East and West.'
        },
        {
            name: 'Innovative Design (InnoD)',
            link: 'https://www.facebook.com/InnovativeDesignUCB/',
            blurb: 'We are a student-led creative agency coming together to show off our beautiful campus and city the best way we know how: through great design.'
        }
    ];

}]);
