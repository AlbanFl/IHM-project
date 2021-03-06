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
		
		var table, tr;
		table = document.getElementById("parkList");
		tr = table.getElementsByTagName("tr");
		
		var nb_park = tr.length;
		
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
        aModif.setAttribute('id', 'modif'+nb_park+'');
        aModif.setAttribute('onclick', 'modPark("'+nb_park+'")');
        aModif.innerHTML += 'Modifier ';
		var aSave = document.createElement('a');
        aSave.setAttribute('href', '#');
        aSave.setAttribute('id', 'save'+nb_park+'');
		aSave.setAttribute('style', 'display:none');
        aSave.setAttribute('onclick', 'savePark("'+nb_park+'")');
        aSave.innerHTML += 'Sauvegarder ';
        var aSuppr = document.createElement('a');
        aSuppr.setAttribute('href', '#');
		aSuppr.setAttribute('id', 'suppr');
        aSuppr.setAttribute('onclick', 'delPark("'+parkName+'")');
        aSuppr.innerHTML += '[x]';

        parkTdAction.appendChild(aModif);
		parkTdAction.appendChild(aSave);
        parkTdAction.appendChild(aSuppr);

        park.appendChild(parkTdNom);
        park.appendChild(parkTdType);
        park.appendChild(parkTdGPS);
        park.appendChild(parkTdPlace);
        park.appendChild(parkTdMail);
        park.appendChild(parkTdCompt);
        park.appendChild(parkTdAction);

        document.getElementById('parkList').appendChild(park);
		document.forms['formAdd'].reset();
}

function searchPark() {
  
  var input, filter, table, tr, td, i, j, compare, found;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("parkList");
  tr = table.getElementsByTagName("tr");
  
  for (i = 1; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td");
		found = false;
		if (td) {
			for (j = 0; j < td.length; j++) {
				compare = td[j];
				if (compare.innerHTML.toUpperCase().indexOf(filter) > -1) {
					found = true;
					break;
				}
			}
			if (found) {
			tr[i].style.display = "";
			} else {
			tr[i].style.display = "none";
			}
		}
	}
}

var nb = 1;

function modPark(nbr) {
	
		var table, tr, td, i, j;
		nb = nbr;
		document.getElementById("modif"+nb).style.display="none";
		document.getElementById("save"+nb).style.display ="inline";
		  
		table = document.getElementById("parkList");
		tr = table.getElementsByTagName("tr");
		td = tr[nb].getElementsByTagName("td");
		  
		var nom=td[0]
		var type=td[1]
		var coord=td[2]
		var nbplaces=td[3]
		var mail=td[4]
		var compt=td[5]

		var nom_data = nom.innerHTML;
		var type_data = type.innerHTML;
		var coord_data = coord.innerHTML;
		var nbplaces_data = nbplaces.innerHTML;
		var mail_data = mail.innerHTML;
		var compt_data = compt.innerHTML;
	
	if( !detectmob()) {
		nom.innerHTML="<input type='text'  class='form-control' required id='nom_text"+nb+"' value='"+nom_data+"'>";
		type.innerHTML="<input type='text'  class='form-control'  required id='type_text"+nb+"' value='"+type_data+"'>";
		coord.innerHTML="<input type='text'  class='form-control'  required id='coord_text"+nb+"' value='"+coord_data+"'>";
		nbplaces.innerHTML="<input type='number'  class='form-control' required id='nbplaces_text"+nb+"' value='"+nbplaces_data+"'>";
		mail.innerHTML="<input type='email'  class='form-control' required id='mail_text"+nb+"' value='"+mail_data+"' >";
		compt.innerHTML="<input type='text' class='form-control' required id='compt_text"+nb+"' value='"+compt_data+"'> ";
	}else {
		$("#modifModal").modal();
		document.getElementById('modifNom').value = nom_data;
		document.getElementById('modifGPS').value = coord_data; 
		document.getElementById('modifPlace').value = nbplaces_data; 
		document.getElementById('modifMail').value = mail_data; 
		document.getElementById('modifCompt').value = compt_data; 
/* 		getElementById('modifNom').innerHTML="<input type='text' id='modifNom' class = 'form-control' required value='"+nom_data+"'>";
		getElementById('modifType').innerHTML="<input type='radio' id='modifType1' name='modifType' value='Auto' required><label for='newType1'> Voiture</label><input type='radio' id='modifType2' name='modifType' value='Vélo'><label for='newType2'> Vélo</label><input type='radio' id='modifType3' name='modifType' value='Auto et vélo'><label for='newType3'> Voiture et vélo</label>";
		getElementById('modifNom').innerHTML="<input type='text' id='modifGPS' class = 'form-control' required value='"+coord_data+"'>";
		getElementById('modifNom').innerHTML="<input type='number' id='modifPlace' class = 'form-control' required value='"+nbplaces_data+"'>";
		getElementById('modifNom').innerHTML="<input type='email' id='modifMail' name='email_name' aria-describedby='email_help' class = 'form-control' required value='"+mail_data+"' >";
		getElementById('modifNom').innerHTML="<input type='text' id='modifCompt' class = 'form-control' required value='"+compt_data+"'> "; */
	}
}

function savePark(nb) {
  var table, tr, td, i, j;
  table = document.getElementById("parkList");
  tr = table.getElementsByTagName("tr");
  td = tr[nb].getElementsByTagName("td");
  
  if( !detectmob() ){
	  var nom_val=document.getElementById("nom_text"+nb).value;
	  var type_val=document.getElementById("type_text"+nb).value;
	  var coord_val=document.getElementById("coord_text"+nb).value;
	  var nbplaces_val=document.getElementById("nbplaces_text"+nb).value;
	  var mail_val=document.getElementById("mail_text"+nb).value;
	  var compt_val=document.getElementById("compt_text"+nb).value;
  } else{
	  var nom_val=document.getElementById('modifNom').value;
	  var type_val = document.getElementsByName('modifType');
      for (var i = 0, length = type_val.length; i < length; i++)
        {
         if (type_val[i].checked)
         {
          type_val = type_val[i].value;
          break;
         }
        }
	  var coord_val=document.getElementById('modifGPS').value;
	  var nbplaces_val=document.getElementById('modifPlace').value;
	  var mail_val=document.getElementById('modifMail').value;
	  var compt_val=document.getElementById('modifCompt').value;
  }
  
  document.getElementById(tr[nb].id).getElementsByTagName("td")[0].innerHTML=nom_val;
  document.getElementById(tr[nb].id).getElementsByTagName("td")[1].innerHTML=type_val;
  document.getElementById(tr[nb].id).getElementsByTagName("td")[2].innerHTML=coord_val;
  document.getElementById(tr[nb].id).getElementsByTagName("td")[3].innerHTML=nbplaces_val;
  document.getElementById(tr[nb].id).getElementsByTagName("td")[4].innerHTML=mail_val;
  document.getElementById(tr[nb].id).getElementsByTagName("td")[5].innerHTML=compt_val;
  
  document.getElementById("modif"+nb).style.display="inline";
  document.getElementById("save"+nb).style.display ="none";
  
  document.forms['formModif'].close();
  document.forms['formModif'].reset();
}

function detectmob() {
   if(window.innerWidth <= 1360 && window.innerHeight <= 768) {
     return true;
   } else {
     return false;
   }
}
