function initMap() {
    // Set the initial center and zoom level of the map
    const initialCenter = {
        lat: 28.6139, // Default latitude
        lng: 77.2090, // Default longitude
    };

    // Parse the URL parameters to get latitude and longitude
    const urlParams = new URLSearchParams(window.location.search);
    const latParam = urlParams.get("lat");
    const lngParam = urlParams.get("lng");

    if (latParam && lngParam) {
        // If latitude and longitude parameters are provided in the URL, use them
        initialCenter.lat = parseFloat(latParam);
        initialCenter.lng = parseFloat(lngParam);
    }

    const map = new google.maps.Map(
        document.getElementById("map"), {
            zoom: 6, // Adjust the initial zoom level
            center: initialCenter,
        });

    // Create an array of markers with their respective addresses
    const markers = [{
        address: "Point A",
        lat: 28.6139,
        lng: 77.2090
    }, {
        address: "Point B",
        lat: 19.0760,
        lng: 72.8777
    }, {
        address: "Point C",
        lat: 12.9716,
        lng: 77.5946
    }];

    // Loop through the markers and add them to the map
    for (const markerData of markers) {
        const marker = new google.maps.Marker({
            position: {
                lat: markerData.lat,
                lng: markerData.lng
            },
            map: map,
            title: markerData.address,
        });
    }
}
