app.controller('nongreekCtrl', ['$scope', function($scope) {

    $scope.header = 'Professional Organizations';

    $scope.subheader = 'There are tons of professional organizations at Berkeley to choose from, based on your interests and/or major!  You can bet that you will be interested in at least one of these clubs.';

    $scope.orgs = [
        {
            name: '180 Degrees Consulting',
            link: 'http://180dc.org/branch/berkeley/',
            description: '180 Degrees provides socially conscious organizations around the world with high quality, affordable consulting services.'
        },
        {
            name: 'American Advertising Federation (imagiCal)',
            link: 'http://www.calaaf.com/',
            description: 'imagiCal is a fully student-run advertising agency and creative consultancy.'
        },
        {
            name: 'ASCEND',
            link: 'http://ascendberkeley.org/',
            description: 'Ascend is the premier business organization dedicated to enabling its members and the community to leverage the leadership and global business potential of its members.'
        },
        {
            name: 'Berkeley Business Society (BBS)',
            link: 'http://www.berkeleybusinesssociety.com/#home',
            description: 'Our primary goal is to use our extensive network to help members access a bank of internships, mentorships, and networking opportunities while gaining real-world experience and building their professional skills.'
        },
        {
            name: 'Berkeley Consulting (BC)',
            link: 'http://bc.berkeley.edu/',
            description: 'Berkeley Consulting (BC) is an student-run nonprofit management consulting organization that provides innovative solutions to core business problems faced by its clients.'
        },
        {
            name: 'The Berkeley Forum (TBF)',
            link: 'http://forum.berkeley.edu/',
            description: 'The Berkeley Forum is a non-partisan forum for the expression and debate of a wide range of ideas.'
        },
        {
            name: 'The Berkeley Group (TBG)',
            link: 'http://theberkeleygroup.org/',
            description: 'The Berkeley Group is a student organization at UC Berkeley that provides pro bono consulting services for non-profits and social enterprises in the Bay Area.'
        },
        {
            name: 'Berkeley Investment Group (BIG)',
            link: 'http://invest.berkeley.edu/',
            description: 'We seek to teach our members the skills needed to become a value investor through hands on portfolio management.'
        },
        {
            name: 'Business Careers in Entertainment Club (BCEC)',
            link: 'http://bcec.berkeley.edu/',
            description: 'Our mission is to provide internships, job opportunities, career information, and hands-on experience to undergraduate students interested in the business end of the entertainment industry.'
        },
        {
            name: 'Cal Actuarial League (CAL) ',
            link: 'http://actuary.berkeley.edu/',
            description: 'Cal Actuarial League provides resources to students aspiring to be actuaries, including company presentations, exam preparation DeCals, exam manuals for renting...'
        },
        {
            name: 'CalSol (CSOL)',
            link: 'http://calsol.berkeley.edu/index.php',
            description: 'CalSol, the UC Berkeley Solar Vehicle Team, is an ASUC sponsored student-run organization whose mission is to design, build, test, and race solar powered vehicles.'
        },
        {
            name: 'Capital Investments at Berkeley (CIB)',
            link: 'http://www.ciberkeley.com/',
            description: 'CIB is a student-run investment club on at the University of California, Berkeley dedicated to providing knowledge and experience in investment management to students and superior risk-adjusted returns to investors.'
        },
        {
            name: 'Chief Financial Officer Club at Berkeley (bCFO)',
            link: 'http://www.berkeleybcfo.com/',
            description: 'bCFO is a speaker-series and resource club designed to help students understand potential career paths in executive finance and to create long-term strategies to help students break into executive levels.'
        },
        {
            name: 'Consult Your Community (CYC)',
            link: 'http://consultyourcommunity.org/',
            description: 'A student-run nonprofit that mobilizes and trains undergraduates to provide pro bono consulting services to low-income and minority-owned small businesses in college communities across America.'
        },
        {
            name: 'Creative Marketing Group (CMG)',
            link: 'http://www.berkeleycmg.com/',
            description: 'A UC Berkeley student-run professional marketing advisory group that provides creative solutions to local businesses’ marketing needs.'
        },
        {
            name: 'Free Ventures',
            link: 'http://www.freeventures.org/',
            description: 'Free Ventures provides Cal students with resources to ameliorate the process of developing a startup.'
        },
        {
            name: 'Future Business Leaders of America (Phi Beta Lambda - PBL)',
            link: 'http://berkeleypbl.com/',
            description: 'PBL promotes the skills necessary for success in business leadership and the opportunity to experience the benefits of small club that some feel lacks at a large university.'
        },
        {
            name: 'Investment Banking Student Association of Berkeley (IBSA)',
            link: 'http://www.berkeleyinvestmentbanking.org/',
            description: 'The first investment banking organization at Berkeley to promote the industry and equip students with practical industry knowledge and skills.'
        },
        {
            name: 'Marketing Community at Berkeley',
            link: 'http://mcomm.berkeley.edu/',
            description: 'The purpose of Marketing Community at Berkeley is to introduce students to marketing on campus and provide resources to thrive in the marketing space in various industries.'
        },
        {
            name: 'Oratory at Berkeley',
            link: 'http://oratory.berkeley.edu/about',
            description: 'Oratory @ Berkeley aims to help students refine their public speaking and communication skills through weekly workshops led by accomplished students.'
        },
        {
            name: 'Partnership for Pre-Professional Pilipinos (P4)',
            link: 'https://calp4.wordpress.com/',
            description: 'A collaborative community that focuses on pre-professional development and prepares students to take advantage of networks, resources, and opportunities.'
        },
        {
            name: 'Pre-Dental Society (PDS)',
            link: 'http://pds.berkeley.edu/',
            description: 'We are dedicated to improving the oral health of the surrounding communities while providing professional development for our members through initiatives.'
        },
        {
            name: 'Pre-Health Society (PHS)',
            link: 'https://ucbprehealthsociety.wordpress.com/',
            description: 'We aim to assist our members in their health career interests by providing academic resources, information, and volunteer opportunities.'
        },
        {
            name: 'Pre-Law Coalition for Social Justice at Berkeley (PCSJ)',
            link: 'http://pcsjberkeley.org/',
            description: 'Our organization is currently the only pre-law professional organization at UC Berkeley that focuses particularly on the issue of social justice.'
        },
        {
            name: 'Pre-Nursing Society (PNS)',
            link: 'http://berkeleypns.weebly.com/',
            description: 'PNS hopes to raise student awareness and establish nursing as a rewarding occupation.'
        },
        {
            name: 'Pre-Pharmacy Informational, Learning and Leadership Society (PILLS)',
            link: 'https://www.ocf.berkeley.edu/~pills/',
            description: 'PILLS is dedicated to assisting students interested in the field of pharmacy.'
        },
        {
            name: 'Student Financial Advisory Committee (SFAC)',
            link: 'http://cubsonline.org/sfac/',
            description: 'SFAC serves as an Advisory Board to the Credit Union for Berkeley Students, Faculty, and Staff, branch of the Cooperative Center Federal Credit Union.'
        },
        {
            name: 'Venture Strategy Solutions at Berkeley (VSS)',
            link: 'http://www.berkeleyvss.com/#intro',
            description: 'Venture Strategy Solutions at Berkeley is a student-run strategy consulting group that serves start-ups and growth clients.'
        },
        {
            name: 'Virtual Reality at Berkeley (VR@B)',
            link: 'http://vr.berkeley.edu/#/',
            description: 'VR@B aims to increase public awareness of virtual reality, provide developer resources, and promote dialogue about the applications and implications of VR.'
        }
    ];
}]);
