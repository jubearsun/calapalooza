app.controller('performCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.buttonColor = {
        color: $rootScope.buttonColor
    };

    $scope.header = 'Theater and Music Groups';

    $scope.subheader = 'From theater to a cappella, Berkeley has a wide diversity of performing arts groups to choose from.';

    $scope.orgs = [
        {
            name: 'Artists in Resonance (AiR)',
            link: 'http://www.artistsinresonance.com/',
            blurb: 'Artists in Resonance, commonly known as AiR, is Berkeley\'s premiere co-ed A Cappella group. Our repertoire includes self-arranged pieces, everything from alternative rock and hip-hop to traditional fight songs and Top 40 hits.'
        },
        {
            name: 'Berkeley Carillon Guild',
            link: 'http://music.berkeley.edu/carillon-guild/',
            blurb: 'The Berkeley Carillon Guild is a student organized and run guild of players of the Berkeley Carillon. The guild consists of present and former students, townspeople and the professional staff of the carillon.'
        },
        {
            name: 'Best Laid Plans (BLP)',
            link: 'https://www.facebook.com/PLEASELIKEUS/',
            blurb: 'Best Laid Plans is one of several groups at UC Berkeley specializing in the age-old art of longform improv comedy. Or, in other words, we make stuff up onstage before an audience, and sometimes it\'s funny too.'
        },
        {
            name: 'Cal Community Music',
            link: 'https://www.ocf.berkeley.edu/~ccm/index.html',
            blurb: 'We are a music service group that helps spread music throughout the community and connect musicians with other musicians to listen, enjoy, and play music of all kinds.'
        },
        {
            name: 'Cal Raijin Taiko',
            link: 'http://www.caltaiko.org/',
            blurb: 'Cal Raijin Taiko is a Japanese drumming team comprised of UC Berkeley students drive to perfect and share the art of taiko with the community.'
        },
        {
            name: 'Celli@Berkeley',
            link: 'http://celli.berkeley.edu/',
            blurb: 'Celli@Berkeley seeks to generate new works for the cello ensemble repertoire. As a student organization, our goal is to provide a creative space for individuals to discover their own musical style.'
        },
        {
            name: 'Chinese A Cappella at Berkeley (BCA)',
            link: 'https://www.facebook.com/calberkeley.chineseacappella',
            blurb: 'The purpose of this group is to promote Chinese culture on campus through a cappella art form.'
        },
        {
            name: 'DeCadence (DEC)',
            link: 'http://decadence.berkeley.edu/',
            blurb: 'We\'re a co-ed a cappella group at Cal, singing anything from rap, to indie rock to your top 40s hits! Check us out at noon on Wednesdays every week, right under Sather Gate!'
        },
        {
            name: 'Dil Se',
            link: 'http://ucberkeleydilse.com/',
            blurb: 'UC Berkeley\'s premier South Asian Acapella team.'
        },
        {
            name: 'Drawn to Scale (DtS)',
            link: 'http://drawntoscale.berkeley.edu/',
            blurb: 'We are a co-ed a cappella group that focuses on a diverse range of musical pieces and arrangements, performing at service and community events in and around UC Berkeley. We love to sing!'
        },
        {
            name: 'EGO (Cal\'s Traditional Korean Percussion Group)',
            link: 'http://www.berkeleyego.com/',
            blurb: 'EGO\'s mission is to share the joy and beauty of traditional Korean drumming, also known as PungMul. In doing so, we hope to spread awareness of traditional Korean culture in the Bay Area and beyond.'
        },
        {
            name: 'For Christ\'s Sake (FCS)',
            link: 'https://www.facebook.com/ForChristsSakeAcappella',
            blurb: 'For Christ\'s Sake is a Christian a Capella group that seeks to glorify God and share the gospel of Jesus Christ through song.'
        },
        {
            name: 'Jericho!',
            link: 'https://www.facebook.com/jericho.comedy/',
            blurb: 'Improvisational and sketch comedy troupe at UC Berkeley.'
        },
        {
            name: 'Mariachi Luz de Oro (MLO)',
            link: 'https://www.facebook.com/ucbmlo/',
            blurb: 'Mariachi Luz de Oro de Berkeley is a musical student-run group that performs traditional and modern mariachi music. We aspire to promote musical and cultural diversity by increasing exposure to the Mexican art form of mariachi.'
        },
        {
            name: 'TBD Comedy (TBD)',
            link: 'https://www.facebook.com/tbdcomedy/',
            blurb: 'TBD Comedy is an undergraduate comedy troupe at U.C. Berkeley. We perform longform and shortform improv -- check out one of our upcoming shows!'
        },
        {
            name: 'Theater for Charity (T4C)',
            link: 'http://www.theater4charity.org/',
            blurb: 'UC Berkeley\'s premiere student-written comedy theater group, where every penny goes to charity! Your home for foul-mouthed philanthropy!'
        },
        {
            name: 'Undergraduate Composers Club (UGCC)',
            link: 'http://music.berkeley.edu/performance-opportunities/undergraduate-composers-club/',
            blurb: 'This Undergraduate Composers Club exists to inspire a community of composers and performers on the UC Berkeley campus: a community built upon the sharing of compositions and above all the performance and demonstration of students’ works by their peers.'
        }
    ];

}]);
