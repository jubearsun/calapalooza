app.controller('volunteerCtrl', ['$scope', function($scope) {

    $scope.header = 'Volunteering';

    $scope.subheader = 'What better way to give back to the community than by volunteering?  Find your interest below!';

    $scope.clubs = [
        {
            name: 'The Berkeley Project (BP)',
            link: 'https://www.berkeleyproject.org/',
            blurb: 'The Berkeley Project is the largest student-run volunteer organization on campus. Every year, we host Berkeley Project Day in the fall and Berkeley Project Month in the spring, with over 2,000 volunteers at 70-80 sites in the City of Berkeley.'
        },
        {
            name: 'Cal Habitat for Humanity',
            link: 'http://habitat.berkeley.edu/',
            blurb: 'Dedicated to providing affordable housing for low-income families; we also provide other services to under-served populations in the Bay Area. We accomplish this through workdays, fundraisers and events planned by our committees.'
        },
        {
            name: 'Camp Kesem',
            link: 'http://campkesem.org/berkeley',
            blurb: 'Camp Kesem Berkeley is a student-run nonprofit organization on the UC Berkeley campus which provides a free week of summer camp for children whose parents have or have had cancer.'
        },
        {
            name: 'Circle K',
            link: 'https://www.ocf.berkeley.edu/~circlek/',
            blurb: 'Our mission is to develop college students into responsible citizens and leaders with a lifelong commitment to serving our community. Our club adheres to the tenets of service, leadership, and fellowship.'
        },
        {
            name: 'Coaching Corps',
            link: 'https://www.facebook.com/CoachingCorps/',
            blurb: 'We are a volunteer movement of thousands of college students and community members who passionately provide sports opportunities for low-income youth. Through the power of coaching, we help them experience the thrill and life lessons taught to a team.'
        },
        {
            name: 'Engineering For Kids (E4k)',
            link: 'https://e4k.berkeley.edu/',
            blurb: 'E4K is an annual one-day outreach event hosted by the UC Berkeley engineering community.  E4K hosts hundreds of students in grades 4-6 for a FREE one-day science and engineering education event on the UC Berkeley campus.'
        },
        {
            name: 'FeelGood (FG)',
            link: 'https://www.facebook.com/Feelgood-Berkeley-185959811475706/',
            blurb: 'FeelGood is a non-profit student-run deli working to eradicate hunger with grilled cheese sandwiches. We believe that in OUR lifetime, we can achieve a world free of extreme and chronic hunger. 100% of donations from food sales go to CHOICE Humanitarian.'
        },
        {
            name: 'Paws and Claws of Berkeley',
            link: 'https://www.facebook.com/pawsandclawsberkeley',
            blurb: 'Paws and Claws of Berkeley is a recently-founded club at UC Berkeley that provides opportunities for students to help animals in need.'
        },
        {
            name: 'Pioneers in Engineering',
            link: 'https://pioneers.berkeley.edu/home/',
            blurb: 'Pioneers in Engineering (PiE) is a student outreach organization based in UC Berkeley. It was founded in 2008 by members of Tau Beta Pi with the goal of making STEM (science, technology, engineering, and math) programs more accessible to all K-12 students. We believe that no student should be denied a quality STEM education experience.'
        },
        {
            name: 'Rotaract',
            link: 'http://calrotaract.org/',
            blurb: 'Sponsored by the world\'s oldest service organization Rotary International, Rotaract is a service club for those interested in humanitarian service, networking, building goodwill, and promoting peace around the world.'
        },
        {
            name: 'Sage Mentorship Project',
            link: 'http://www.sagementors.org/',
            blurb: 'The Sage Mentorship Project is UC Berkeley\'s largest one-on-one mentorship organization, matching hundreds of committed UC Berkeley students to an elementary school-aged mentee each year.'
        },
        {
            name: 'Spring Foundation',
            link: 'https://www.facebook.com/foundationspring',
            blurb: 'Spring Foundation is a student-run nonprofit organization at Berkeley dedicated to fundraising on campus to finance the education and healthcare of underprivileged orphans in rural China. We also aim to nurture their psychological growth.'
        },
        {
            name: 'Suitcase Berkeley',
            link: 'http://www.suitcaseclinic.org/',
            blurb: 'The Suitcase Clinic is a student and volunteer run organization that promotes the health and overall wellbeing of homeless individuals through service provision, cooperative learning, and collective action among volunteers, professionals, and clients.'
        },
        {
            name: 'Teach in Prison (TiP)',
            link: 'http://teachinprison.berkeley.edu/Teach_in_Prison/Home.html',
            blurb: ' Teach in Prison is a 70 - 100 student ‘DeCal’ class which sends U.C. Berkeley student tutors to work with inmates at San Quentin Prison.  The primary tutoring groups work on phonics, proof-reading papers and grant proposals, counting and numbers, H.S. math, GED prep, and more.'
        }
    ];

}]);
