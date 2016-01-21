app.controller('greekCtrl', ['$scope', function($scope) {

    $scope.header = 'Professional Fraternities';

    $scope.frats = [
        {
            name: 'Alpha Chi Sigma',
            link: 'http://axs.berkeley.edu/rush/',
            focus: 'Chemistry'
        },
        {
            name: 'Alpha Epsilon Zeta',
            link: 'http://aez.berkeley.edu/mission/',
            focus: 'Multi-Discplinary'
        },
        {
            name: 'Alpha Kappa Psi',
            link: 'http://www.calakpsi.com/',
            focus: 'Business'
        },
        {
            name: 'Alpha Phi Omega',
            link: 'http://live.calaphio.com/rush/index.html',
            focus: 'Service'
        },
        {
            name: 'Delta Kappa Alpha',
            link: 'http://www.caldka.org/',
            focus: 'Cinematic Arts'
        },
        {
            name: 'Delta Phi Epsilon',
            link: 'http://dpe.berkeley.edu/',
            focus: 'Foreign Service'
        },
        {
            name: 'Delta Sigma Pi',
            link: 'http://www.dsp-rho.com/',
            focus: 'Business'
        },
        {
            name: 'Eta Omega Chi',
            link: 'http://www.calhox.org/',
            focus: 'Entrepreneurship'
        },
        {
            name: 'Kappa Alpha Pi',
            link: 'http://www.kapiucb.com/#!about/cjg9',
            focus: 'Pre-Law'
        },
        {
            name: 'Phi Alpha Delta',
            link: 'http://www.berkeleypad.org/',
            focus: 'Pre-Law'
        },
        {
            name: 'Phi Chi',
            link: 'http://phichi.berkeley.edu/AboutUs.htm',
            focus: 'Pre-Med'
        },
        {
            name: 'Pi Sigma Epsilon',
            link: 'http://berkeleypse.org/',
            focus: 'Sales, Marketing, Management'
        },
        {
            name: 'Sigma Eta Pi',
            link: 'http://www.ucberkeleysep.com/',
            focus: 'Entrepreneurship'
        },
        {
            name: 'Sigma Mu Delta',
            link: 'http://www.smdberkeley.com/',
            focus: 'Pre-Med'
        },
        {
            name: 'Theta Tau',
            link: 'http://www.calthetatau.com/',
            focus: 'Engineering'
        }
    ];
}]);
