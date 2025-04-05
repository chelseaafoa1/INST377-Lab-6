function createMap(){
    var map = L.map('map').setView([37, -95], 3);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    long1 = getRandomInRange(-90, -100, 3)
    long2 = getRandomInRange(-90, -100, 3)
    long3 = getRandomInRange(-90, -100, 3)

    lat1 = getRandomInRange(30, 35, 3)
    lat2 = getRandomInRange(30, 35, 3)
    lat3 = getRandomInRange(30, 35, 3)
   
    L.marker([lat1, long1]).addTo(map);
    L.marker([lat2, long2]).addTo(map);
    L.marker([lat3, long3]).addTo(map);
  
    document.getElementById("marker1").innerHTML = `marker1; longitude; ${long1} latitude; ${lat1}`
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat1}&longitude=${long1}&localityLanguage=en`)
    .then((resp) => resp.json())
    .then((data) => {
    document.getElementById("marker1locality").innerHTML = "locality; " + (data.locality || "Unknown");
    });
  

document.getElementById("marker2").innerHTML = `marker2; longitude; ${long2} latitude; ${lat2}`
fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat2}&longitude=${long2}&localityLanguage=en`)
.then((resp) => resp.json())
.then((data) => {
document.getElementById("marker2locality").innerHTML = "locality; " +(data.locality || "Unknown");
});

document.getElementById("marker3").innerHTML = `marker3; longitude; ${long3} latitude; ${lat3}`
fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat3}&longitude=${long3}&localityLanguage=en`)
.then((resp) => resp.json())
.then((data) => {
document.getElementById("marker3locality").innerHTML = "locality; " + (data.locality || "Unknown");
});

}





function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
    }
    
    const randomNum = getRandomInRange(1, 10);    
    
window.onload=createMap;
