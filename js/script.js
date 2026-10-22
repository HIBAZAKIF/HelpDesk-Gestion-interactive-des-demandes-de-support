

const données = [
    {id : 0 , num_ticket : "HD-001" , titre : "Connexion Wi-Fi instable" , description : "Le réseau se déconnecte régulièrement." , catégorie : "Réseau" , priorité : "Haute"},
    {id : 1 , num_ticket : "HD-002" , titre : "Installation d’un logiciel" ,description : "Installer un logiciel sur le poste.", catégorie : "Logiciel" , priorité : "Normale"},
    {id : 2 , num_ticket : "HD-003" , titre : "Clavier défectueux" ,description : "Certaines touches ne fonctionnent plus.", catégorie : "Matériel" , priorité : "Basse"}
 ];
 let modifier_ajouter ;

 let inc_ticket = 3;

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

        const ic = document.createElement("i");
        div_icon.append(ic);
        div_icons_numtickets.append(div_icon);
       // div_icons_numtickets.appendChild("div_icon");

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

        const priorité = données[i].priorité;
        switch(priorité){
            case "Basse" : 
                p_priority_badge.classList.add("basse");
                break;
            case "Normale" : 
                p_priority_badge.classList.add("normale");
                break;
            case "Haute" : 
                p_priority_badge.classList.add("haute");
                break;
        }

        const catégorie = données[i].catégorie;
        switch(catégorie){
            case "Logiciel" : 
                div_icon.classList.add("logiciel");
                ic.className = "fa-solid fa-keyboard";
                console.log(div_icon.innerHTML)
                break;
            case "Matériel" : 
                div_icon.classList.add("matériel");
                ic.className = "fa-solid fa-network-wired";
                break;
            case "Réseau" : 
                div_icon.classList.add("réseau");
                ic.className = "fa-solid fa-wifi";
                break;
        }
        



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
        a_delete.addEventListener("click" , ()=>{ supprimer(données[i].id) });
        a_edit.addEventListener("click" , ()=>{ recuperer_data(données[i].id) });
        
    }

}


afficher();

function supprimer(id){
    let reponse = confirm("etes-vous sure de supprimer cet element");
    if(reponse == false){
        return false ;
    }
    let trouvé;
    données.forEach( (element,index) => {
        if(element.id == id){
            trouvé = index;
        }
    });

    if(trouvé == null){
        console.log(trouvé , " " , données[trouvé])
        console.log("element non trouvé");
        return;
    }

    données.splice(trouvé , 1);
    console.log("element supprimé");

    afficher();
}


function ajouter (){
    if(!validateForm()){
        return
    }
    const demande = {
        id : inc_ticket++,
        num_ticket : `HD-${inc_ticket}`,
        titre : titre.value ,
        description : description.value , 
        catégorie : categorie.value , 
        priorité : priorité.value
    }

    données.push(demande);
    afficher();
}

function validateForm(){

    let titre = document.getElementById("titre");
    let categorie = document.getElementById("categorie");
    let priorité = document.getElementById("priorité");
    let description = document.getElementById("description");

    if(titre.value == "" || categorie.value == "" || priorité.value == "" || description.value == "" ){
        window.alert("veuillez remplis tous les champs");
        return false;
    }else{
        return true;
    }
}


function recuperer_data (id){
    document.querySelector(".ajouter_demande").textContent="modifier";
    document.querySelector(".ajouter_demande").onclick = ()=>{modifier(id)};
    let index_mod ;
    données.forEach( (element,index) => {
        if(element.id == id){
            index_mod = index;
        }
    });
    if(index_mod == undefined){
        console.log("element non trouvé");
        return;
    }

    let titre = document.getElementById("titre");
    let catégorie = document.getElementById("categorie");
    let priorité = document.getElementById("priorité");
    let description = document.getElementById("description");

    titre.value = données[index_mod].titre;
    catégorie.value = données[index_mod].catégorie;
    priorité.value = données[index_mod].priorité;
    description.value = données[index_mod].description;
}

function modifier (id){
    if(!validateForm()){
        return ;
    }

    let titre = document.getElementById("titre");
    let catégorie = document.getElementById("categorie");
    let priorité = document.getElementById("priorité");
    let description = document.getElementById("description");

    let index_mod ;
    données.forEach( (element,index) => {
        if(element.id == id){
            index_mod = index;
        }
    });

    données[index_mod].titre = titre.value;
    données[index_mod].catégorie = catégorie.value;
    données[index_mod].priorité = priorité.value;
    données[index_mod].description = description.value;  
    afficher();
    document.querySelector(".ajouter_demande").textContent="＋  Ajouter la demande";
    document.querySelector(".ajouter_demande").onclick = ()=>{ajouter()};

    titre.value = "";
    catégorie = "";
    priorité = "";
    description = "";
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