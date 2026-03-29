(function() {
  var header_carousel, main, reservations, restaurant_carousel, webcam_ctrl, welcome, where_ctrl;

  welcome = function($scope) {};

  welcome.$inject = ['$scope'];

  main = function($scope, $location, $timeout, $route) {
    var getLocation, update_pics;
    getLocation = function() {
      var loc = $location.path();
      if (typeof _gaq !== "undefined") {
        _gaq.push(['_trackPageview', loc]);
      }
      return loc.substr(1) || 'welcome';
    };
    $scope.path = getLocation();
    $scope.$on('$routeChangeSuccess', function() {
      $scope.path = getLocation();
    });
    $scope.links = [
      {
        path: '/',
        name: 'Sākums'
      // }, {
      //   path: '/reservation',
      //   name: 'Terases restorāns'
      // }, {
      //   path: '/webcams',
      //   name: '<span class="em">Live</span>Video'
      }, {
        path: '/weather',
        name: 'Laikapstākļi'
      // }, {
      //   path: '/cable',
      //   name: 'Wake cable'
      }, {
        path: '/where',
        name: 'Kā atrast'
      }
    ];
    $scope.get_class = function(link) {
      if (link.path === $location.path()) {
        return 'active';
      } else {
        return '';
      }
    };
    $scope.pic_version = 1;
    update_pics = function() {
      $scope.pic_version++;
      $timeout(update_pics, 2000);
    };
    update_pics();
  };

  main.$inject = ['$scope', '$location', '$timeout', '$route'];

  header_carousel = function($scope) {
    $scope.slides = [];
  };

  header_carousel.$inject = ['$scope'];

  restaurant_carousel = function($scope) {
    $scope.slides = [
      {
        url: 'images/terase8.jpg'
      }, {
        url: 'images/terase1.jpg'
      }, {
        url: 'images/terase2.jpg'
      }, {
        url: 'images/terase3.jpg'
      }, {
        url: 'images/terase4.jpg'
      }, {
        url: 'images/terase5.jpg'
      }, {
        url: 'images/terase6.jpg'
      }, {
        url: 'images/terase7.jpg'
      }
    ];
  };

  restaurant_carousel.$inject = ['$scope'];

  welcome_carousel = function($scope) {
    $scope.slides = [ { url: 'images/welcome/1000306_636333503057961_950326147_n.jpg' },
      { url: 'images/welcome/1004095_636278233063488_1903596820_n.jpg' },
      { url: 'images/welcome/1004650_636089419749036_1552994325_n.jpg' },
      { url: 'images/welcome/1004673_636339299724048_413465985_n.jpg' },
      { url: 'images/welcome/1004885_636333046391340_1653669136_n.jpg' },
      { url: 'images/welcome/1005452_636333593057952_596965062_n.jpg' },
      { url: 'images/welcome/1005785_636333109724667_1618703920_n.jpg' },
      { url: 'images/welcome/44600_636333036391341_2047172001_n.jpg' },
      { url: 'images/welcome/534173_636339319724046_1574663168_n.jpg' },
      { url: 'images/welcome/558777_636333106391334_198956238_n.jpg' },
      { url: 'images/welcome/643961_636339093057402_718705002_n.jpg' },
      { url: 'images/welcome/66478_636344043056907_1513119590_n.jpg' },
      { url: 'images/welcome/943693_636343933056918_1399103394_n.jpg' },
      { url: 'images/welcome/946715_636339096390735_994476034_n.jpg' },
      { url: 'images/welcome/969098_636343989723579_677300520_n.jpg' },
      { url: 'images/welcome/971780_636333543057957_1183160716_n.jpg' },
      { url: 'images/welcome/996538_636260423065269_976643816_n.jpg' } ];
  };

  welcome_carousel.$inject = ['$scope'];

  webcam_ctrl = function($scope) {
    $scope.cameras = [
      {
        id: 'cam_1',
        name: 'Zālājs',
        url: 'http://osta.jaunciema-osta.lv:8090/streams/zalajs.m3u8',
        size: {
          width: 1280 / 2,
          height: 720 / 2
        }
      }, {
        id: 'cam_3',
        name: 'Ostas mols',
        url: 'http://osta.jaunciema-osta.lv:8090/streams/liicis.m3u8',
        size: {
          width: 1280 / 2,
          height: 720 / 2
        }
      // }, {
      //   id: 'cam_2',
      //   name: 'Terase',
      //   url: 'http://osta.jaunciema-osta.lv:8090/streams/terase_laivas.m3u8',
      //   size: {
      //     width: 640,
      //     height: 480
      //   }
      }
    ];
  };

  webcam_ctrl.$inject = ['$scope'];

  where_ctrl = function($scope) {
    $scope.sections = [
      {
        heading: 'Kur atrodas Jaunciema Osta?',
        src: '//www.youtube.com/embed/tAj_dTo1X40?rel=0',
        description: '<b>57&deg;02\'30\'\'N | 24&deg;10\'</b><br />Jaunciema gatve 135B, Jaunciems, Rīga, Latvija'
      }, {
        heading: 'Kā sasniegt Ostu, braucot no Vecmīlgrāvja puses?',
        src: '//www.youtube.com/embed/Kj8-YVc95Rs?rel=0'
      }, {
        heading: 'Kā atrast Jaunciema Ostu, braucot no Juglas puses?',
        src: '//www.youtube.com/embed/FRuSVZsYPZQ?rel=0'
      }, {
        heading: 'Kā atbraukt ar sabiedrisko transportu?',
        src: '//www.youtube.com/embed/JHZaYYgTBUM?rel=0',
        description: 'Atbraukt iespējams ar <a href="http://goo.gl/n6F5LL" target="_blank">11. autobusu</a>.<br />Izkāpt pieturā "4. šķērslīnija".'
      }
    ];
  };

  where_ctrl.$inject = ['$scope'];

  reservations = function($scope, $http, $dialog) {
    $scope.send = function() {
      if (!($scope.reservation != null) || !($scope.reservation.tel != null)) {
        $dialog.messageBox('Hmm', 'Lūdzu atstājiet savu telefona nr.').open();
      } else {
        $scope.reservation.real = true;
        $http.post(email_url, $scope.reservation).success(function() {
          $dialog.messageBox('Paldies', 'Jūsu pieteikums ir saņemts. Ar jums sazināsies, lai apstiprinātu pieteikumu').open();
        }).error(function() {
          $dialog.messageBox('Hmm', 'Pieteikumu nosūtīt neizdevās.').open();
        });
      }
    };
  };

  reservations.$inject = ['$scope', '$http', '$dialog'];

  angular.module('jaunciema_osta', ['ui.bootstrap']).config([
    '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $routeProvider.when('/', {
        templateUrl: 'ng_views/welcome.html'
      }).when('/reservation', {
        templateUrl: 'ng_views/reservation.html'
      }).when('/menu', {
        templateUrl: 'ng_views/menu.html'
      }).when('/weather', {
        templateUrl: 'ng_views/weather.html'
      }).when('/webcams', {
        templateUrl: 'ng_views/webcams.html'
      }).when('/cable', {
        templateUrl: 'ng_views/cable.html'
      }).when('/where', {
        templateUrl: 'ng_views/where.html'
      }).otherwise({
        redirectTo: '/reservation'
      });
      $locationProvider.hashPrefix('!');
    }
  ]).controller('header_carousel', header_carousel).controller('welcome_carousel', welcome_carousel).controller('restaurant_carousel', restaurant_carousel).controller('main', main).controller('welcome', welcome).controller('reservations', reservations).controller('webcams', webcam_ctrl).controller('where', where_ctrl).directive('ostaMap', function() {
    return function(scope, elm, attrs) {
      var custom_type, map, mapoptions, mapstyle, marker, markerimg, osta_position, styled_options, type_id;
      mapstyle = [
        {
          "featureType": "water",
          "stylers": [
            {
              "color": "#454545"
            }
          ]
        }, {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
            {
              "saturation": -100
            }, {
              "lightness": -56
            }
          ]
        }, {
          "featureType": "road",
          "stylers": [
            {
              "color": "#fba943"
            }
          ]
        }, {
          "featureType": "transit",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        }, {
          "featureType": "poi",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        }, {
          "featureType": "landscape.natural",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        }, {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [
            {
              "weight": 0.8
            }, {
              "lightness": -63
            }, {
              "visibility": "on"
            }
          ]
        }, {
          "featureType": "administrative",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        }
      ];
      type_id = 'custom';
      markerimg = new google.maps.MarkerImage('img/marker.png', new google.maps.Size(48, 48), new google.maps.Point(0, 0), new google.maps.Point(24, 48));
      osta_position = new google.maps.LatLng(57.041325, 24.16848);
      mapoptions = {
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.SATELLITE, type_id]
        },
        mapTypeId: type_id,
        zoom: 12,
        center: osta_position,
        scrollwheel: false
      };
      map = new google.maps.Map(elm.get(0), mapoptions);
      styled_options = {
        name: 'Roadmap'
      };
      custom_type = new google.maps.StyledMapType(mapstyle, styled_options);
      map.mapTypes.set(type_id, custom_type);
      marker = new google.maps.Marker({
        position: osta_position,
        draggable: false,
        map: map,
        icon: markerimg
      });
    };
  }).directive('cameraStream', function() {
    return function(scope, elm, attrs) {
      var camera = scope.$eval(attrs.cameraStream);
      elm.attr('id', camera.id);
      var video = document.createElement('video');
      video.setAttribute('controls', true);
      video.setAttribute('width', 640);
      video.setAttribute('height', 480);
      elm.append(video);
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = camera.url;
      } else {
        var hls = new Hls();
        hls.loadSource(camera.url);
        hls.attachMedia(video);
      }
    };
  }).directive('fbFeed', function($timeout) {
    return function(scope, elm, attrs) {
      $timeout(function (){
        FB.XFBML.parse(elm[0]);
      }, 700, false);
    }
  }).directive('weatherWidget', function() {
    return function(scope, elm, attrs) {
      var id = 'wgs_widget_598_1470665723905' + Date.now();
      elm.attr('id', id);
      WgsWidget({
        id_station: 3160,
        width: null,
        height: 700,
        hours: 6,
        wj: 'ms',
        gustiness: true,
        divid: id,
        type: 'wind'
      });
    }
  });

}).call(this);
