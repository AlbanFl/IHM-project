function delPark(park){
	if(confirm("Supprimer cette ligne?")){
        var item = document.getElementById(park);
        item.parentNode.removeChild(item);
	}
}

function addPark(nom, type, gps, places, mail, comptage){
	var parkName = document.getElementById(nom).value;
        var parkType = document.getElementsByName(type);
        for (var i = 0, length = parkType.length; i < length; i++)
        {
         if (parkType[i].checked)
         {
          parkType = parkType[i].value;
          break;
         }
        }

        var parkGPS = document.getElementById(gps).value;
        var parkPlace = document.getElementById(places).value;
        var parkMail = document.getElementById(mail).value;
        var parkCompt = document.getElementById(comptage).value;
        
        var park = document.createElement('tr');
        park.setAttribute('id', parkName);

        var parkTdNom = document.createElement('td');
        parkTdNom.setAttribute('id', 'name');
        parkTdNom.innerHTML += parkName;
        var parkTdType = document.createElement('td');
        parkTdType.setAttribute('id', 'type');
        parkTdType.innerHTML += parkType;
        var parkTdGPS = document.createElement('td');
        parkTdGPS.setAttribute('id', 'GPS');
        parkTdGPS.innerHTML += parkGPS;
        var parkTdPlace = document.createElement('td');
        parkTdPlace.setAttribute('id', 'place');
        parkTdPlace.innerHTML += parkPlace;
        var parkTdMail = document.createElement('td');
        parkTdMail.setAttribute('id', 'mail');
        parkTdMail.innerHTML += parkMail;
        var parkTdCompt = document.createElement('td');
        parkTdCompt.setAttribute('id', 'compt');
        parkTdCompt.innerHTML += parkCompt;
        var parkTdAction = document.createElement('td');
        var aModif = document.createElement('a');
        aModif.setAttribute('href', '#');
        aModif.setAttribute('class', 'modBtn');
        aModif.setAttribute('onclick', 'modParkingOpen("'+parkName+'")');
        aModif.innerHTML += 'Modifier ';
        var aSuppr = document.createElement('a');
        aSuppr.setAttribute('href', '#');
        aSuppr.setAttribute('onclick', 'delPark("'+parkName+'")');
        aSuppr.innerHTML += '[x]';

        parkTdAction.appendChild(aModif);
        parkTdAction.appendChild(aSuppr);

        park.appendChild(parkTdNom);
        park.appendChild(parkTdType);
        park.appendChild(parkTdGPS);
        park.appendChild(parkTdPlace);
        park.appendChild(parkTdMail);
        park.appendChild(parkTdCompt);
        park.appendChild(parkTdAction);

        document.getElementById('parkList').appendChild(park);
}