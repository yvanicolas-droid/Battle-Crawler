function rechercherCarte() {

const recherche = document.getElementById("searchInput").value.toLowerCase();

const resultat = document.getElementById("result");

if(recherche===""){
resultat.innerHTML="";
return;
}

const carte = cards.find(c =>
c.id.toLowerCase().includes(recherche) ||
c.nom.toLowerCase().includes(recherche)
);

if(carte){

resultat.innerHTML=`
<div class="card">

<h2>${carte.nom}</h2>

<p><strong>ID :</strong> ${carte.id}</p>

<p><strong>Catégorie :</strong> ${carte.categorie}</p>

<p><strong>Élément :</strong> ${carte.element}</p>

<p><strong>Météo :</strong> ${carte.meteo}</p>

<p><strong>Bonus :</strong> ${carte.bonus}</p>

<p><strong>Récompense :</strong> ${carte.recompense}</p>

</div>
`;

}else{

resultat.innerHTML="<p>Aucune carte trouvée.</p>";

}

}