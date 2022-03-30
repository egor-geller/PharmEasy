function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 53.900375703453136, lng: 27.557730463899244},
        zoom: 12,
        mapId: '599da0222cbc768b'
    });

    // title: Name
    // position: Lat, Lng
    // opt: Image url
    // opt: scaledSize width, height
    const markers = [
        [
            "Medical 1",
            53.900375703453136,
            27.557730463899244
        ]
    ];

    for (let i of markers) {
        const currMarker = i;

        const marker = new google.maps.Marker({
            position: {lat: currMarker[1], lng: currMarker[2]},
            map: map,
            title: currMarker[0],
            animation: google.maps.Animation.DROP
        });

        marker.addListener("click", toggleBounce)

        function toggleBounce() {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        }

        const infowindow = new google.maps.InfoWindow({
            content: currMarker[0],
        });

        marker.addListener("click", () => {
            infowindow.open({
                anchor: marker,
                map,
                shouldFocus: false,
            });
        });
    }
}