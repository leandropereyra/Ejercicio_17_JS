let markers, map;

function initMap() {
  const centro = {
    lat: 13.235901734340668,
    lng: -30.464806913963432,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: centro,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: -34.44721872921158,
        lng: -58.58593344922262,
      },
      map,
      title: "Buenos Aires",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 41.39329017093883,
        lng: 2.1506126656062996,
      },
      map,
      title: "Barcelona",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 39.81076233507749,
        lng: 15.787677545579834,
      },
      map,
      title: "Scalea, Italia",
    })
  );
}
