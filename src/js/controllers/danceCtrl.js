app.controller('danceCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.buttonColor = {
        color: $rootScope.buttonColor
    };

    $scope.header = 'Dance Teams';

    $scope.subheader = 'If you\'re into dance or a total beginner but want to get involved, Berkeley has a huge dance community covering many styles of dance and skill levels.';

    $scope.teams = [
        {
            name: 'Abba Modern',
            link: 'https://www.facebook.com/AbbaModern/',
            blurb: 'Abba Modern is a Christ-centered dance group that aims to spread Jesus’s love to the Berkeley community through the art of dance and testimony.'
        },
        {
            name: 'AFX Dance',
            link: 'https://www.facebook.com/AFXdance/',
            blurb: 'The purpose of [A]spirations, [F]amily, e[X]perience The purpose of AFX is to give those without a background in dance an opportunity to experience hip-hop dance.'
        },
        {
            name: 'Azaad Dance',
            link: 'https://www.facebook.com/ucbazaad',
            blurb: 'Azaad is a Hindi Film dance team is based on dedication, passion and energy, with the primary goal of creating productions that entertain and motivate audiences to connect with the Bollywood culture.'
        },
        {
            name: 'Ballet Folklorico Reflejos De Mexico',
            link: 'https://www.facebook.com/ReflejosdeMexico',
            blurb: 'Ballet Folklorico Reflejos de Mexico, abbreviated as “Reflejos”, is a Mexican folklorico dance group that promotes cultural diversity at UC Berkeley and in the greater San Francisco/Bay area.'
        },
        {
            name: 'Ballet Company at Berkeley',
            link: 'https://www.facebook.com/BalletCompanyatBerkeley/',
            blurb: 'Ballet Company at Berkeley will be UC Berkeley’s first ballet company, committed to excellence in both ballet and the enrichment of the arts community at UC Berkeley, as well as expanding the aesthetic horizons of both dancers and audiences.'
        },
        {
            name: 'Blues at Berkeley',
            link: 'http://groupspaces.com/BluesatBerkeley',
            blurb: 'Blues at Berkeley is a place for blues dancers and potential blues dancers to have a place to blues dance and socialize.'
        },
        {
            name: 'Cal Ballroom',
            link: 'https://www.facebook.com/Cal-Ballroom-101198156642681/',
            blurb: 'Our team welcomes everyone from beginners with no experience through gold syllabus or open level dancers. Competitive dances include international and American style waltz, tango, cha-cha, rumba.'
        },
        {
            name: 'C.R.E.A.T.E.',
            link: 'http://publicservice.berkeley.edu/create',
            blurb: 'CREATE is a brand-new residency internship program at Cal Corps Public Service Center that gives artists, dancers, actors, filmmakers, and others an opportunity to apply creative skills through public service.'
        },
        {
            name: 'Danceworx',
            link: 'http://dwx.berkeley.edu/',
            blurb: 'Danceworx is one of UC Berkeley’s oldest student-run performing arts organizations, specializing in Jazz, Hip Hop, Lyrical, and Tap.'
        },
        {
            name: 'Dwinelle Hall Breakers',
            link: 'https://www.facebook.com/DwinelleHallBreakers',
            blurb: 'Dwinelle Hall Breakers is a community comprised of dancers of varying hip-hop styles, coming together in the same practice space to share ideas, collaborate, develop character, and to progress in their respective artistic crafts.'
        },
        {
            name: 'Fei Tian Dancers',
            link: 'http://ftd.berkeley.edu/',
            blurb: 'UC Berkeley’s only Chinese dance performing group, Fei Tian Dancers (FTD), strives to cultivate an on-campus atmosphere that welcomes and appreciates the abundant diversity of the Berkeley community.'
        },
        {
            name: 'Identity X',
            link: 'https://www.facebook.com/idxdance/',
            blurb: 'Identity X is a UC Berkeley competitive dance team created in Fall 2013 by Victor Diniz and Shusaku Matsuda.'
        },
        {
            name: 'Korean Perforamnce Group',
            link: 'https://www.facebook.com/KPGcal',
            blurb: 'The “Korean Performance Group”, KPG, is a social K-pop dance/performance group founded by Andy Jongwon Kim and JM Lee. t is currently the only permanent dance group that represents K-Pop culture in UC Berkeley.'
        },
        {
            name: 'Lindy On Sproul',
            link: 'http://www.lindyonsproul.com/en-us/',
            blurb: 'Lindy on Sproul is a free outdoor DJ’ed swing event on Saturdays afternoons on the UC Berkeley Campus. No partner and no experience is necessary.  The skill level  of the dancers vary from beginners (<3 months) to intermediate-advanced (4+ years).'
        },
        {
            name: 'Main Stacks Dance Team',
            link: 'https://mainstacksdance.wordpress.com/',
            blurb: 'Main Stacks Dance Team aims to promote growth of dancers and choreographers in the Berkeley community through performances, workshops, and competitions.'
        },
        {
            name: 'Natya at Berkeley',
            link: 'https://www.facebook.com/natyaatberkeley/',
            blurb: 'Natya at Berkeley is the Bharatanatyam team at UC Berkeley. We aim to cultivate artistic talent and cultural awareness by performing locally and at nation-wide intercollegiate competitions.'
        },
        {
            name: 'Salsa Dance at Cal',
            link: 'https://www.facebook.com/SalsaAtCalBerkeley/',
            blurb: 'Salsa Dance at Cal, formerly the Social Ballroom Club, is a group of Cal students who want to spread their appreciation of Salsa and other ballroom/nightclub dances. We host a number of dance events, trips to local clubs, and FREE classes in Salsa and other styles.'
        },
        {
            name: 'Sorayya',
            link: 'https://www.facebook.com/SorayyaDance',
            blurb: 'Sorayya is a dance troupe dedicated to the collectivization of dance techniques found in the art forms of gypsy history. Although the main focus will be on Bellydance, the dance forms included will be folk tribal dances of South and Central Asia as well as the Middle East and Northern Africa.'
        },
        {
            name: 'The [M]ovement',
            link: 'https://www.facebook.com/ucb.movement/',
            blurb: 'The Movement family shares our passions with the entire Berkeley community through performances on Upper Sproul, Lower Sproul, at cultural diversity fairs, student events, and at our own showcases in Julia Morgan Theater and Zellerbach Playhouse.'
        },
        {
            name: 'Thrive Dance Company',
            link: 'https://www.facebook.com/Thrive-Dance-Company-156000557782325/',
            blurb: 'We are the only contemporary dance company at UC Berkeley.  Our mission is to not only provide the best in dance and performing arts education to our students, but to also guide them towards realizing their full potential and help them to become amazing, creative, and generous human beings.'
        },
        {
            name: 'Tru Element',
            link: 'https://www.facebook.com/truelementcal',
            blurb: 'TRUELEMENT is a troupe of hip hop dancers, committed to developing technique and precision in dancing, as well as creativity in choreography. Each semester, a routine or routines is choreographed and performed in community showcases.'
        },
        {
            name: 'Zahanat',
            link: 'https://www.facebook.com/ucbzahanat/',
            blurb: 'Zahanat was founded at University of California, Berkeley in the fall of 2009 as a competitive all-male dance team. We aim not only to win competitions, but more importantly, to be the best team we can both to each other and for the audience.'
        },
        {
            name: 'Ra-On (RO)',
            link: 'https://www.facebook.com/RaOn.Cal/',
            blurb: 'The Korean Rock Band sponsored by ASUC in UC Berkeley.'
        },
        {
            name: 'T.I.n.Y Chinese Drama and Entertainment Company (TINY)',
            link: 'https://www.facebook.com/tiny.berkeley/',
            blurb: 'Non-profit and non-political student organization. Produce Chinese dramas, short films and Chinese songs. Provide customized event-organizing service. Donate a large part of revenues to charity.'
        },
        {
            name: 'TBD Comedy (TBD)',
            link: 'https://www.facebook.com/tbdcomedy/',
            blurb: 'TBD Comedy is an undergraduate comedy troupe at U.C. Berkeley. We perform longform and shortform improv -- check out one of our upcoming shows!'
        }
    ];

}]);
