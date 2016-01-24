app.controller('sportsCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.buttonColor = {
        color: $rootScope.buttonColor
    };

    $scope.header = 'Recreational Sports/Activities';

    $scope.sports = [
        {
            name: 'Cal Dragon Boat',
            link: 'https://caldragonboat.wordpress.com/',
            description: 'Cal Dragon Boat is a student-run organization at UC Berkeley that competes as a recreational dragon boat team amongst other college and adult dragon boat teams.'
        },
        {
            name: 'Cal Hang-Gliding Club',
            link: 'http://www.bhgc.org/',
            description: 'A group to promote awareness of and safety in the sport of hang gliding.'
        },
        {
            name: 'Cal Hiking and Outdoor Society (CHAOS)',
            link: 'https://www.chaosberkeley.org/',
            description: 'The largest and oldest Outdoor Club on campus! Community members, undergrads, and grad students get together to enjoy any & all outdoor activities.'
        },
        {
            name: 'Cal Running Club (CRC)',
            link: 'http://crc.berkeley.edu/',
            description: 'We are a friendly group of runners who meet 6 days a week for running and fun. To join the Cal Running Club, all you have to do is show up! We meet at Kroeber Fountain, at the cross of Bancroft and College (across the street from Cafe Strada).'
        },
        {
            name: 'Cal Archery',
            link: 'http://archery.berkeley.edu/',
            description: 'California Archery is a student-run Cal Sport Club that provides an opportunity for the UC Berkeley community to experience archery as a recreational and competitive sport.'
        },
        {
            name: 'Cal Climbing',
            link: 'http://climbing.berkeley.edu/',
            description: 'We are largely a social club here to promote the sport of climbing at Berkeley. We climb both indoors and outdoors, and welcome beginners and experts alike.'
        },
        {
            name: 'College Ski and Snowboard Club (CSSC)',
            link: 'https://www.facebook.com/csscberkeley/',
            description: 'The College Ski and Snowboard Club, commonly known as the CSSC, provides Cal students with the best, cheapest, and funnest way to get to the snow.'
        },
        {
            name: 'Curling Club at Berkeley',
            link: 'https://www.facebook.com/CalCurling/',
            description: 'Our club\'s mission is to introduce people to the sport of curling and field a collegiate curling team to compete weekly at a recreational level. We frequently offer opportunities to learn about curling and get involved in the community.'
        },
        {
            name: 'Kendo Club (KC)',
            link: 'http://kendo.berkeley.edu/',
            description: 'To practice Kendo and the philosophy of Kendo. Through rigorous and proper training, the club strives to teach members discipline, integrity, and respect to cultivate both the mind and the body.'
        },
        {
            name: 'Legends of Berkeley (Berkeley Legends)',
            link: 'https://www.ocf.berkeley.edu/~legends/',
            description: 'The purpose of Legends of Berkeley is to unite the ever growing community of League of Legends enthusiasts on the Berkeley campus. It aims to bring together players of all skill levels and seeks to foster and promote friendships between them.'
        },
        {
            name: 'Logging Sports Team (LS)',
            link: 'https://nature.berkeley.edu/forestryclub/cal-logging-sports',
            description: 'Logging Sports is the only sustinable logging sports team on the west coast and teaches team members in old-time logging techniques, such as chopping and crosscut sawing, and networks team members with professionals in the forestry or related fields.'
        },
        {
            name: 'Quidditch League at Berkeley (QL)',
            link: 'http://quidditchleagueatberkeley.webs.com/',
            description: 'Our club competes in the fast-growing, full contact, and co-ed sport known as Quidditch. With regional, national, and international competition, players get the exclusive opportunity to travel, develop leadership skills, and compete all over the world.'
        },
        {
            name: 'Smash at Berkeley',
            link: 'http://smash.berkeley.edu/',
            description: 'The purpose of this club is to bring together and create a solidified Smash community on campus, expand our presence through crew battles and tournaments, and provide a welcoming environment for people to learn and play a game rich with history.'
        },
        {
            name: 'Tennis at Cal',
            link: 'https://www.facebook.com/tennisatcal/',
            description: 'Our purpose is to provide opportunities for UC Berkeley members to compete and socialize with students and faculty who have an interest in tennis at the Berkeley campus.'
        },
        {
            name: 'Triathlon Club at Berkeley',
            link: 'http://caltriathlon.com/',
            description: 'The purpose of the Triathlon Club at Berkeley is to bring the sport of triathlon to the student community at the University of California, Berkeley and its surrounding environs.'
        }
    ];

}]);
