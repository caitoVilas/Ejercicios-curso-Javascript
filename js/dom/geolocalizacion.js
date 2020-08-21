const d = document,
      n = navigator;

export default function getGeoLocation(id){
    const $id = d.getElementById(id),
          options = {
              enableHighAccuracy: true,
              timeout: 5000,
              maximunAge: 0
          };
    const success = (position) => {
        let cords = position.coords;
        $id.innerHTML = `
        <p>Tu posicion actual es :</p>
        <ul>
        <li>Latitud   : <b>${cords.latitude}</b></li>
        <li>Longitud  : <b>${cords.longitude}</b></li>
        <li>Precicion : <b>${cords.accuracy}</b> metros</li>
        </ul>
        <a href='https://google.com/maps/@${cords.latitude},${cords.longitude},17.5z' target='_blank'
        rel= 'noopener'>Ver en Google Maps</a>`;
        console.log(position);
    };
    const error = (err) => {
        $id.innerHTML = `<p><mark>Error ${err.code} : ${err.message}</mark></p>`;
        console.log(err);
    };
    
    n.geolocation.getCurrentPosition(success,error,options);
}