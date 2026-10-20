const données = [
    {num_ticket : "HD-001" , titre : "Connexion Wi-Fi instable" , description : "Le réseau se déconnecte régulièrement." , catégorie : "Réseau" , priorité : "Haute"},
    {num_ticket : "HD-002" , titre : "Installation d’un logiciel" ,description : "Installer un logiciel sur le poste.", catégorie : "Logiciel" , priorité : "Normale"},
    {num_ticket : "HD-003" , titre : "Clavier défectueux" ,description : "Certaines touches ne fonctionnent plus.", catégorie : "Matériel" , priorité : "Basse"}
 ];

function afficher(){
    const liste_demandes = document.getElementById("liste_demandes");
    liste_demandes.innerHTML="";

    for (let i = 0 ; i < données.length  ; i++){
        const article = document.createElement("article");


        article.innerHTML = `
                <div class="icons_NumTickets">
                    <div class="icon">ppp</div>
                        <p class="numticket">${données[i].num_ticket}</p>
                    </div>

                    <div>
                        <h3>${données[i].titre}</h3>
                        <p>${données[i].description}</p>
                    </div>
                    <div class="badges">
                        <p class="categorie_badge">${données[i].catégorie}</p>
                        <p class="priority_badge">${données[i].priorité}</p>
                        </div>
                        <hr>
                        <div class="buttons">
                            <a class="edit">modifier</a>
                            <a class="delete" onclick="supprimer('${données[i].num_ticket}')" >supprimer</a>
                    </div>
        `;
        liste_demandes.append(article);
        
    }

}
afficher();

function supprimer(p_num_ticket){

    let index_sup ;
    données.forEach( (element,index) => {
        if(element.num_ticket == p_num_ticket){
            index_sup = index;
        }
    });
    if(index_sup == undefined){
        console.log("element non trouvé");
        return;
    }
    données.splice(index_sup , 1);
    console.log("element supprimé");
    afficher();
}