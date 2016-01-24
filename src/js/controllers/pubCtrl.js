app.controller('pubCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.buttonColor = {
        color: $rootScope.buttonColor
    };

    $scope.header = 'Student Publications';

    $scope.subheader = 'Whatever you are passionate about, there are many publications you can join based on your interests.  Even if writing isn\'t your strong suit, check out what other teams these publications have to offer.';

    $scope.publications = [
        {
            name: 'Al-Bayan (Al-B)',
            link: 'http://www.albayanmag.org/join',
            blurb: 'Al-Bayan is a publication at the University of California, Berkeley whose mission is to offer insight and clarity on issues pertinent to the Muslim community.'
        },
        {
            name: 'BARE Magazine (BARE)',
            link: 'http://www.baremagazine.org/apply',
            blurb: 'BARE Magazine is UC Berkeley\'s premier arts, fashion, and lifestyle publication.'
        },
        {
            name: 'Berkeley Fiction Review (BFR)',
            link: 'http://berkeleyfictionreview.com/',
            blurb: 'UC Berkeley\'s oldest prose journal, proudly publishing fiction since 1981.'
        },
        {
            name: 'Berkeley Political Review (BPR)',
            link: 'http://bpr.berkeley.edu/apply/',
            blurb: 'UC Berkeley\'s only non-partisan political magazine.'
        },
        {
            name: 'B-Side (bside)',
            link: 'http://berkeleybside.com/join-our-team/',
            blurb: 'The B-Side connects campus and community music networks with the local, national, and global scene by discovering, curating, sharing, documenting, and embracing the culture of sound.'
        },
        {
            name: 'Caliber Magazine',
            link: 'http://calibermag.org/join/',
            blurb: 'Caliber is UC Berkeley\'s \'Everything Magazine,\' a lifestyle and entertainment powerhouse that encompasses virtually all fields of interest to Berkeleyans.'
        },
        {
            name: 'Comparative Literature Undergraduate Journal (CLUJ)',
            link: 'http://ucb-cluj.org/join/',
            blurb: 'CLUJ provides undergraduates around the world the opportunity to share their research internationally.'
        },
        {
            name: 'GA Berkeley Business Law Journal (GA BBLJ)',
            link: 'http://www.baremagazine.org/apply',
            blurb: 'BBLJ is the number one commercial law journal in the country and the only student organization at Berkeley Law focused on business law.'
        },
        {
            name: 'The Heuristic Squelch (Squelch)',
            link: 'http://squelched.com/about-the-squelch/',
            blurb: 'UC Berkeley\'s only intentionally funny publication.'
        },
        {
            name: 'Morning Sign Out (MSO)',
            link: 'http://morningsignout.com/recruitment/',
            blurb: 'We update you with the latest news from the world of medicine via online publication. We focus on bridging the gap between medicine and the general public.'
        },
        {
            name: 'Spoon University at Berkeley (Cal Spoon)',
            link: 'http://cal.spoonuniversity.com/',
            blurb: 'Spoon University at Berkeley is an on-campus online publication that creates weekly food articles and host several food-related events throughout the semester.'
        },
        {
            name: 'The Daily Cal',
            link: 'http://apply.dailycal.org/',
            blurb: 'The Daily Californian is a student-run newspaper that has served as Berkeley’s paper of record for more than 140 years and trains students in areas of journalism, business and other professional industries.'
        },
        {
            name: 'The Folio: English Academic Journal (TF)',
            link: 'https://sites.google.com/site/thefolioucb/join-1',
            blurb: '"The Folio" is a student-run academic journal of the English Undergraduate Association. It publishes short undergraduate student-written literary analysis essays.'
        },
        {
            name: 'To An Unknown God',
            link: 'https://unknowngodjournal.wordpress.com/',
            blurb: 'To An Unknown God is UC Berkeley\’s first student-run Christian journal.'
        }
    ];

}]);
