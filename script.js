function searchCard(){

let code = document.getElementById("searchInput").value.toUpperCase();

let result = document.getElementById("result");

if(code==""){
    result.innerHTML="Veuillez entrer un code.";
    return;
}

result.innerHTML="Recherche de : <strong>"+code+"</strong><br>Cette fonctionnalité sera bientôt connectée à la base de données Battle Crawler.";
}