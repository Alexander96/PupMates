app.controller('PlacesController', function($scope, MapService, PlacesService, identity, geolocation, notifier){

    geolocation.getLocation().then(function(data){
      $scope.addPlaceTrigger = false;
      $scope.addRouteTrigger = false;
      $scope.removePlaceTrigger = false;
      $scope.removeRouteTrigger = false;
      $scope.clickOnMapNewPlace = false;
      $scope.markers = [];
      $scope.markerAdded = false;
      $scope.displayCurUsPlTrigger = true;
      $scope.displayAllUsPlTrigger = false;
      $scope.user = identity.currentUser;
      console.log("----data-----");
      console.log(data);

      $scope.coords = {lat:data.coords.latitude, lng:data.coords.longitude};
      var loc = new google.maps.LatLng($scope.coords.lat, $scope.coords.lng);
        var mapOptions = {
        center: { lat: $scope.coords.lat || 39.7391536, lng: $scope.coords.lng || -104.9847034},
        //center: {lat: 47.3690239, lng: 8.5380326},
        zoom: 15
        };
        var map = MapService.initMap(document.getElementById('map-canvas'), mapOptions);
        var listenerHandle;
        $scope.addPlace = function(location, place) {
          $scope.addPlaceTrigger = true;
            listenerHandle = google.maps.event.addListener(map, 'click', function(event) {
                console.log("click on map");
                if(!$scope.clickOnMapNewPlace){
                  $scope.clickOnMapNewPlace = true;
                  google.maps.event.removeListener(listenerHandle);
                  $scope.markers.push(MapService.addPlace(map, event.latLng));
                  $scope.markerAdded = true;
                }
            }, false);

        }
        $scope.cancelAddPlace = function(){
          $scope.addPlaceTrigger = false;
          $scope.clickOnMapNewPlace = false;
          map.addListener('click', function(){}, false);
          MapService.removePlace($scope.markers[$scope.markers.length-1]);
          $scope.markers.pop();
        }
        $scope.savePlace = function(place){
          if($scope.markerAdded){
            place.creator = identity.currentUser._id;
            var marker = $scope.markers[$scope.markers.length-1];
            var lat = marker.getPosition().lat();
            var lng = marker.getPosition().lng();

            place.lat = lat.toString();
            place.lng = lng.toString();
            PlacesService.createPlace(place).then(function(success){
              if(success){
                MapService.setInfoMarker(map, marker, place);
                $scope.addPlaceTrigger = false;
                notifier.success("Place added!");
              }
            })
            $scope.markerAdded = false;
          }
          else{
            notifier.error("Please click on the map to add place");
          }
        }
        var polyline = new google.maps.Polyline({
          path: [
            new google.maps.LatLng(47.3690239, 8.5380326),
            new google.maps.LatLng(1.352083, 103.819836),
            new google.maps.LatLng(-33.867139, 151.207114)
          ],
          strokeColor: '#FF0000',
          strokeOpacity: 0.5,
          strokeWeight: 3,
          geodesic: true
        });

        polyline.setMap(map);

        $scope.showHidePlaceDir = function(field){
          var f = field + "Trigger";
          $scope[f] = !$scope[f];
        }
        PlacesService.getPlacesOfCurUser().then(function(places){
          if(places){
            console.log(places);
            $scope.user.places = places;

            var userMarkers = MapService.displayPlaces(map, places, true);
            MapService.openInfoMarkerArray(map, userMarkers, places);
            $scope.markers = $scope.markers.concat(userMarkers);
          }else{
            console.log("error when getting places");
          }
        });
        /*PlacesService.getPlaceExceptUser($scope.user._id).then(function(places){
          if(places){
            console.log(places);
            $scope.allUsersPlaces = places;

            var allUserMarkers = MapService.displayPlaces(map, places, true);
            MapService.openInfoMarkerArray(map, allUserMarkers, places);
            $scope.markers = $scope.markers.concat(allUserMarkers);
          }else{
            console.log("error when getting places");
          }
        })*/
        $scope.displayAllUsPl = function(){
          $scope.displayAllUsPlTrigger = true;
          $scope.displayCurUsPlTrigger = false;
          $('#btn-user-tab').removeClass("pl-btn-clicked").addClass('pl-btn-not-clicked');
          $('#btn-allusers-tab').removeClass('pl-btn-not-clicked').addClass("pl-btn-clicked");
        }
        $scope.displayCurUsPl = function(){
          $scope.displayAllUsPlTrigger = false;
          $scope.displayCurUsPlTrigger = true;
          $('#btn-user-tab').removeClass("pl-btn-not-clicked").addClass('pl-btn-clicked');
          $('#btn-allusers-tab').removeClass('pl-btn-clicked').addClass("pl-btn-not-clicked");
        }
    });
});