/* code from Rosie resume project */
function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 13,
                center: {
                    lat: 59.334591,
                    lng: 18.063240
                }
        });

        var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        var locations = [
        { lat: 59.3538998, lng: 18.1055148 }, // myrorna kolargatan
        { lat: 59.3193874, lng: 18.0700677 }, // emmaus
        { lat: 59.3188953, lng: 18.0615576 }, // stadsmissionen
        { lat: 59.3191879, lng: 18.0620237 }, // röda körset
        { lat: 59.3174722, lng: 18.049938 }, // judit
        { lat: 59.3173322, lng: 18.0495676 }, // filippa k
        { lat: 59.3182002, lng: 18.0488125 }, // beyond retro zinken
        { lat: 59.3133187, lng: 18.0814983 }, // lisa larsson
        { lat: 59.3383229, lng: 18.0526542 }, // zak
        { lat: 59.3374381, lng: 18.0588704 } // myrorna kyrkogatan
    ];

    var markers = locations.map(function(location,i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers,)

    }

   