/* code from Rosie resume project */
function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 13,
                center: {
                    lat: 59.334591,
                    lng: 18.063240
                }
        })

        var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        var locations = [
        { lat: 59.3539749, lng: 18.1036816 },
        { lat: 59.3194085, lng: 18.0682444 },
        { lat: 59.3189195, lng: 18.0592735 },
        { lat: 59.3189727, lng: 18.0601436 },
        { lat: 59.3374381, lng: 18.0588704 },
        { lat: 59.3383229, lng: 18.0504655 },
        { lat: 59.3383229, lng: 18.0504655 }
    ];

    var markers = locations.map(function(location,i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers,)

    }

   