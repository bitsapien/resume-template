// script.js

    // create the module and name it bitsapien
    var bitsapien = angular.module('bitsapien', ['ngRoute','ngAnimate']);


	// -------------------------------------------------- //
	// -------------------------------------------------- //
	// SIMULATING NETWORK LATENCY AND LOAD TIME. We haven't included the ngApp
	// directive since we're going to manually bootstrap the application. This is to
	// give the page a delay, which it wouldn't normally have with such a small app.
	setTimeout(
	function asyncBootstrap() {
	angular.bootstrap( document, [ "bitsapien" ] );
	},
	( 1 * 1000 )
	);
	// -------------------------------------------------- //
	// -------------------------------------------------- //



	 // -------------------------------------------------- //
	// -------------------------------------------------- //
	// This CSS class-based directive controls the pre-bootstrap loading screen. By
	// default, it is visible on the screen; but, once the application loads, we'll
	// fade it out and remove it from the DOM.
	// --
	// NOTE: Normally, I would probably just jQuery to fade-out the container; but,
	// I thought this would be a nice moment to learn a bit more about AngularJS
	// animation. As such, I'm using the ng-leave workflow to learn more about the
	// ngAnimate module.
	bitsapien.directive(
	"mAppLoading",
	function( $animate ) {
	// Return the directive configuration.
	return({
	link: link,
	restrict: "C"
	});
	// I bind the JavaScript events to the scope.
	function link( scope, element, attributes ) {
	// Due to the way AngularJS prevents animation during the bootstrap
	// of the application, we can't animate the top-level container; but,
	// since we added "ngAnimateChildren", we can animated the inner
	// container during this phase.
	// --
	// NOTE: Am using .eq(1) so that we don't animate the Style block.
	$animate.leave( element.children().eq( 1 ) ).then(
	function cleanupAfterAnimation() {
	// Remove the root directive element.
	element.remove();
	// Clear the closed-over variable references.
	scope = element = attributes = null;
	}
	);
	}
	}
	);






    // configure our routes
    bitsapien.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/main.html',
                controller  : 'mainController'
            })

            // route for the about-me page
            .when('/about-me', {
                templateUrl : 'pages/about-me.html',
                controller  : 'aboutMeController'
            })

            // route for the programmer page
            .when('/programmer', {
                templateUrl : 'pages/programmer.html',
                controller  : 'programmerController'
            })

            // route for the web-designer page
            .when('/web-designer', {
                templateUrl : 'pages/web-designer.html',
                controller  : 'webDesignerController'
            })

            // route for the open-source-evangelist page
            .when('/open-source-evangelist', {
                templateUrl : 'pages/open-source-evangelist.html',
                controller  : 'openSourceEvangelistController'
            })

            // route for the ideopraxist page
            .when('/ideopraxist', {
                templateUrl : 'pages/ideopraxist.html',
                controller  : 'ideopraxistController'
            })

            // route for the electrical-electonics-engineer page
            .when('/electrical-electronics-engineer', {
                templateUrl : 'pages/electrical-electronics-engineer.html',
                controller  : 'electricalElectronicsEngineerController'
            })


            // route for the mooc-love page
            .when('/mooc-love', {
                templateUrl : 'pages/mooc-love.html',
                controller  : 'moocLoveController'
            })
	    .otherwise('/main');

    });

    // create the controller and inject Angular's $scope
    bitsapien.controller('mainController', ['$scope',function($scope) {
        // create a message to display in our view
	$scope.link = '';

        $scope.message = 'Main Page';
	
    }]);

    bitsapien.controller('programmerController', function($scope) {
        $scope.message = 'Programmer page';
    });

    bitsapien.controller('aboutMeController', function($scope) {
        $scope.message = 'main esa kyun hoon?';
    });

    bitsapien.controller('webDesignerController', function($scope) {
        $scope.message = 'web design wala page';
    });

    bitsapien.controller('openSourceEvangelistController', function($scope) {
        $scope.message = 'rms wala page';
    });

    bitsapien.controller('ideopraxistController', function($scope) {
        $scope.message = 'stuch wala page';
    });

    bitsapien.controller('electricalElectronicsEngineerController', function($scope) {
        $scope.message = 'electricalwala page';
    });

    bitsapien.controller('moocLoveController', function($scope) {
        $scope.message = 'pyar hi gayil';
    });






