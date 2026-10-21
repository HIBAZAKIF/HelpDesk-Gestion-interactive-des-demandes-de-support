const données = [
    {num_ticket : "HD-001" , titre : "Connexion Wi-Fi instable" , description : "Le réseau se déconnecte régulièrement." , catégorie : "Réseau" , priorité : "Haute"},
    {num_ticket : "HD-002" , titre : "Installation d’un logiciel" ,description : "Installer un logiciel sur le poste.", catégorie : "Logiciel" , priorité : "Normale"},
    {num_ticket : "HD-003" , titre : "Clavier défectueux" ,description : "Certaines touches ne fonctionnent plus.", catégorie : "Matériel" , priorité : "Basse"}
 ];

 let inc_ticket = 4;

function afficher(){
    const liste_demandes = document.getElementById("liste_demandes");
    liste_demandes.innerHTML="";

    for (let i = 0 ; i < données.length  ; i++){
       const article = document.createElement("article");
        liste_demandes.append(article);


        //1er div
        const div_icons_numtickets = document.createElement("div");
        div_icons_numtickets.classList.add("icons_NumTickets");
        article.append(div_icons_numtickets);

        //les elements du 1er div
        const div_icon = document.createElement("div");
        div_icon.classList.add("icon");
        div_icons_numtickets.append(div_icon);
        div_icon.textContent = "ppp";

        const p_numticket = document.createElement("p");
        p_numticket.classList.add("numticket");
        p_numticket.textContent = `${données[i].num_ticket}`;
        div_icons_numtickets.append(p_numticket);




        // //2em div
        const div_titre_desc = document.createElement("div");
        article.append(div_titre_desc);

        //les elements du deuxieme div
        const h3 = document.createElement("h3");
        div_titre_desc.append(h3);
        h3.textContent = `${données[i].titre}`;

        const p_desc = document.createElement("p");
        p_desc.textContent = `${données[i].description}`;       
        div_titre_desc.append(p_desc);


        // //3em div
        const div_badge = document.createElement("div");
        div_badge.classList.add("badges");
        article.append(div_badge);
        

        //les elements du troisieme div
        const p_categorie_badge = document.createElement("p");
        p_categorie_badge.classList.add("categorie_badge");
        p_categorie_badge.textContent = `${données[i].catégorie}`;
        div_badge.append(p_categorie_badge);


        const p_priority_badge = document.createElement("p");
        p_priority_badge.classList.add("priority_badge");
        p_priority_badge.textContent = `${données[i].priorité}`;

        
        div_badge.append(p_priority_badge);



        // //hr
        const hr = document.createElement("hr");
        article.append(hr);


        // //4em div
        const div_buttons = document.createElement("div");
        div_buttons.classList.add("buttons");
        article.append(div_buttons);

        // //les elements du quatrieme div

        const a_edit = document.createElement("a");
        a_edit.classList.add("edit");
        a_edit.textContent = "modifier";
        div_buttons.append(a_edit);

        const a_delete = document.createElement("a");
        a_delete.classList.add("delete");
        a_delete.textContent = "supprimer";    
        div_buttons.append(a_delete);
        // a_delete.setAttribute("onclick" , 'supprimer(${données[i].num_ticket} )');
        a_delete.addEventListener("click" , ()=>{ supprimer(données[i].num_ticket) });
        a_edit.addEventListener("click" , ()=>{ recuperer_data(données[i].num_ticket) });

    }

}


afficher();

function supprimer(p_num_ticket){
    let reponse = confirm("etes-vous sure de supprimer cet element");
    if(reponse == false){
        return false ;
    }
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



function validateForm(){

    let titre = document.getElementById("titre");
    let categorie = document.getElementById("categorie");
    let priorité = document.getElementById("priorité");
    let description = document.getElementById("description");

    if(titre.value == "" || categorie.value == "" || priorité.value == "" || description.value == "" ){
        window.alert("veuillez remplis tous les champs");
        return;
    }

    const demande = {
        num_ticket : `HD-${inc_ticket++}`,
        titre : titre.value ,
        description : description.value , 
        catégorie : categorie.value , 
        priorité : priorité.value
    }

    données.push(demande);
    afficher();


    titre.value = "";
    description.value = "";
    categorie.value = "";
    priorité = "";
    
}

function recuperer_data{

}



    //   const article = document.createElement("article");


    //     article.innerHTML = `
    //             <div class="icons_NumTickets">
    //                 <div class="icon">ppp</div>
    //                 <p class="numticket">${données[i].num_ticket}</p>
    //             </div>

    //             <div class="titre_desc">
    //                 <h3>${données[i].titre}</h3>
    //                 <p>${données[i].description}</p>
    //             </div>
    //             <div class="badges">
    //                  <p class="categorie_badge">${données[i].catégorie}</p>
    //                  <p class="priority_badge">${données[i].priorité}</p>
    //             </div>
    //             <hr>
    //             <div class="buttons">
    //                   <a class="edit">modifier</a>
    //                   <a class="delete" onclick="supprimer('${données[i].num_ticket}')" >supprimer</a>
    //             </div>
    //     `;
    //     liste_demandes.append(article);