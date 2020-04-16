//code from freakyjolly.com & Rosie Resume 
       var map;
                var InforObj = [];
                var centerStockholm = {
                    lat: 59.334591,
                    lng: 18.063240
                };
                var markersOnMap = [{
                        placeName: "Myrorna (Hjorthagen) Kolargatan 2, 115 42 Stockholm",
                        LatLng: [{
                            lat: 59.3538998,
                            lng: 18.1055148 
                        }]
                    },
                    {
                        placeName: "Emmaus Peter Myndes Backe 8, 118 46 Stockholm",
                        LatLng: [{
                            lat: 59.3193874,
                            lng: 18.0700677 
                        }]
                    },
                    {
                        placeName: "Stadsmissionen Hornsgatan 58, 118 21 Stockholm",
                        LatLng: [{
                            lat: 59.3188953,
                            lng: 18.0615576 
                        }]
                    },
                     {
                        placeName: "Röda Körset Hornsgatan 54, 118 21 Stockholm",
                        LatLng: [{
                            lat: 59.3191879,
                            lng: 18.0620237
                        }]
                    },
                     {
                        placeName: "Judit Second Hand Hornsgatan 75, 118 49 Stockholm",
                        LatLng: [{
                            lat: 59.3174714,
                            lng: 18.052199 
                        }]
                    },
                     {
                        placeName: "Filippa K Second Hand Hornsgatan 75, 118 49 Stockholm",
                        LatLng: [{
                            lat: 59.3173322,
                            lng: 18.0495676
                        }]
                    },
                      {
                        placeName: "Beyond Retro (Zinken) Brännkyrkagatan 82, 118 23 Stockholm",
                        LatLng: [{
                            lat: 59.3182002,
                            lng: 18.0488125
                        }]
                    },
                     {
                        placeName: "Lisa Larsson Second Hand Bondegatan 48, 116 33 Stockholm",
                        LatLng: [{
                            lat: 59.3133187,
                            lng: 18.0814983 
                        }]
                    },
                      {
                        placeName: "Myrorna (Norrmalm) Adolf Fredriks Kyrkogatan 5, 111 37 Stockholm",
                        LatLng: [{
                            lat: 59.3374381,
                            lng: 18.0588704 
                        }]
                    },
                    {
                        placeName: "Zak Upplandsgatan 19A, 113 60 Stockholm",
                        LatLng: [{
                            lat: 59.3383229,
                            lng: 18.0526542
                        }]
                    }
                ];
        
                window.onload = function () {
                    initMap();
                };

                var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        
                function addMarker() {
                    for (var i = 0; i < markersOnMap.length; i++) {
                        var contentString = markersOnMap[i].placeName;
        
                        const marker = new google.maps.Marker({
                            position: markersOnMap[i].LatLng[0],
                            label: labels[i % labels.length],
                            map: map
                        });
        
                        const infowindow = new google.maps.InfoWindow({
                            content: contentString,
                            maxWidth: 110
                        });
        
                        marker.addListener('click', function () {
                            closeOtherInfo();
                            infowindow.open(marker.get('map'), marker);
                            InforObj[0] = infowindow;
                        });
                      
                    }
                }
        
                function closeOtherInfo() {
                    if (InforObj.length > 0) {
                        /* detach the info-window from the marker */
                        InforObj[0].set("marker", null);
                        /* and close it */
                        InforObj[0].close();
                        /* blank the array */
                        InforObj.length = 0;
                    }
                }
        
                function initMap() {
                    map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 12,
                        center: centerStockholm
                    });
                    addMarker();
                }