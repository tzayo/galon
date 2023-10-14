function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5, // Adjust the zoom level as needed
        center: { lat: 51.5074, lng: -0.1278 }, // Set the initial center of the map
    });

    // Define an array of locations (latitude and longitude) and city names
    const locations = [
        { lat: 51.509865, lng: -0.118092, name: 'London' },
        // Add more locations here
    ];

    // Create markers for each location
    for (const location of locations) {
        new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.name,
        });
    }
}
