

const données = [
    { id: 0, num_ticket: "HD-001", titre: "Connexion Wi-Fi instable", description: "Le réseau se déconnecte régulièrement.", catégorie: "Réseau", priorité: "Haute" },
    { id: 1, num_ticket: "HD-002", titre: "Installation d’un logiciel", description: "Installer un logiciel sur le poste.", catégorie: "Logiciel", priorité: "Normale" },
    { id: 2, num_ticket: "HD-003", titre: "Clavier défectueux", description: "Certaines touches ne fonctionnent plus.", catégorie: "Matériel", priorité: "Basse" }
];
let modifier_ajouter;
let afficher_tab = false ;
let modification_ouvert = false;

let inc_ticket = 3;

const btn_carte = document.querySelector(".carte_tab .carte");
const btn_tableau= document.querySelector(".carte_tab .tab");
const liste_demandes = document.querySelector(".liste_demandes");

btn_carte.addEventListener("click" , ()=>{
    btn_carte.classList.add("focus_carte_tab");
    btn_tableau.classList.remove("focus_carte_tab");
    liste_demandes.classList.add("liste_demandes_grid");
    afficher_tab = false;
    afficher();

})
btn_tableau.addEventListener("click", () => { 

    btn_tableau.classList.add("focus_carte_tab");
    btn_carte.classList.remove("focus_carte_tab");
    liste_demandes.classList.remove("liste_demandes_grid");
    liste_demandes.classList.add("liste_demandes_allWidth");
    afficher_tab = true;
    afficher();
 });



function annulerModif() {

    if (!confirm("voullez vous annulez la modification !")) {
        return;
    }
    f_annuler_modif();
    modification_ouvert = false;


}

function afficher() {
    const liste_demandes = document.getElementById("liste_demandes");
    liste_demandes.innerHTML = "";

    if(afficher_tab){
        tableau(liste_demandes);
    }else{
        article(liste_demandes);
    }
    
    nbr_demande();
}


afficher();

function nbr_demande() {
    const nbr_demande = document.querySelector(".nbr_demande");
    nbr_demande.textContent = `${données.length} demandes`;
}

function supprimer(id) {
    if (modification_ouvert) {
        alert("la demande est en cours de la modification");
        return;
    }

    let reponse = confirm("etes-vous sure de supprimer cet element");
    if (reponse == false) {
        return false;
    }
    let trouvé;
    données.forEach((element, index) => {
        if (element.id == id) {
            trouvé = index;
        }
    });

    if (trouvé == null) {
        console.log(trouvé, " ", données[trouvé])
        console.log("element non trouvé");
        return;
    }

    données.splice(trouvé, 1);
    console.log("element supprimé");

    afficher();
}


function ajouter() {
    if (!validateForm()) {
        return
    }
    const demande = {
        id: inc_ticket++,
        num_ticket: `HD-${inc_ticket}`,
        titre: titre.value,
        description: description.value,
        catégorie: categorie.value,
        priorité: priorité.value
    }

    données.push(demande);
    afficher();
}

function validateForm() {

    let titre = document.getElementById("titre");
    let categorie = document.getElementById("categorie");
    let priorité = document.getElementById("priorité");
    let description = document.getElementById("description");

    if (titre.value == "" || categorie.value == "" || priorité.value == "" || description.value == "") {
        window.alert("veuillez remplis tous les champs");
        return false;
    } else {
        return true;
    }
}

function recuperer_data(id) {

    modification_ouvert = true;

    document.querySelector(".ajouter_demande").textContent = "modifier";
    document.querySelector(".ajouter_demande").onclick = () => { modifier(id) };

    const annuler_modif = document.querySelector(".annuler_modif");
    annuler_modif.style.display = "block";


    let index_mod;
    données.forEach((element, index) => {
        if (element.id == id) {
            index_mod = index;
        }
    });
    if (index_mod == undefined) {
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

function f_annuler_modif() {

    let titre = document.getElementById("titre");
    let catégorie = document.getElementById("categorie");
    let priorité = document.getElementById("priorité");
    let description = document.getElementById("description");

    titre.value = "";
    catégorie.value = "";
    priorité.value = "";
    description.value = "";

    document.querySelector(".ajouter_demande").textContent = "＋  Ajouter la demande";
    document.querySelector(".ajouter_demande").onclick = () => { ajouter() };
    const annuler_modif = document.querySelector(".annuler_modif");
    annuler_modif.style.display = "none";
}

function modifier(id) {
    if (!validateForm()) {
        return;
    }

    let titre = document.getElementById("titre");
    let catégorie = document.getElementById("categorie");
    let priorité = document.getElementById("priorité");
    let description = document.getElementById("description");

    let index_mod;
    données.forEach((element, index) => {
        if (element.id == id) {
            index_mod = index;
        }
    });

    données[index_mod].titre = titre.value;
    données[index_mod].catégorie = catégorie.value;
    données[index_mod].priorité = priorité.value;
    données[index_mod].description = description.value;
    afficher();
    document.querySelector(".ajouter_demande").textContent = "＋  Ajouter la demande";
    document.querySelector(".ajouter_demande").onclick = () => { ajouter() };
    modification_ouvert = false;

    titre.value = "";
    catégorie.value = "";
    priorité.value = "";
    description.value = "";
}

function tableau(liste_demandes) {
    const tableau = document.createElement("table");
    const thead = document.createElement("thead");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");

    liste_demandes.append(tableau);
    tableau.append(thead);
    thead.append(td1);
    thead.append(td2);
    thead.append(td3);
    thead.append(td4);
    thead.append(td5);

    td1.textContent = "N° Ticket";
    td2.textContent = "titre de la demande";
    td3.textContent = "catégorie";
    td4.textContent = "priorité";
    td5.textContent = "actions";

    for (let i = 0; i < données.length; i++) {
        const tr = document.createElement("tr");
        const td6 = document.createElement("td");
        const td7 = document.createElement("td");
        const td8 = document.createElement("td");
        const td9 = document.createElement("td");
        const td10 = document.createElement("td");

        tableau.append(tr);
        tr.append(td6);
        tr.append(td7);
        tr.append(td8);
        tr.append(td9);
        tr.append(td10);

        td6.textContent = données[i].num_ticket;
        td8.textContent = données[i].catégorie;
        td9.textContent = données[i].priorité;


        const div_icon = document.createElement("div")
        div_icon.className = "div_icon";
        td7.append(div_icon);

        const ic = document.createElement("i");
        div_icon.append(ic);

        const titre_desc = document.createElement("div");
        titre_desc.className = "titre_desc";
        td7.append(titre_desc);

        const titre = document.createElement("h4");
        const desc = document.createElement("p");
        titre_desc.append(titre);
        titre_desc.append(desc);

        titre.textContent = données[i].titre;
        desc.textContent = données[i].description;

        const a_edit = document.createElement("a");
        a_edit.classList.add("edit");
        a_edit.textContent = "modifier";
        td10.append(a_edit);

        const a_delete = document.createElement("a");
        a_delete.classList.add("delete");
        a_delete.textContent = "supprimer";
        td10.append(a_delete);

        a_delete.addEventListener("click", () => { supprimer(données[i].id) });
        a_edit.addEventListener("click", () => { recuperer_data(données[i].id) });

    }

}

function article(liste_demandes) {
    for (let i  = 0 ; i < données.length ; i++ ) {
        
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
        switch (priorité) {
            case "Basse":
                p_priority_badge.classList.add("basse");
                break;
            case "Normale":
                p_priority_badge.classList.add("normale");
                break;
            case "Haute":
                p_priority_badge.classList.add("haute");
                break;
        }

        const catégorie = données[i].catégorie;
        switch (catégorie) {
            case "Logiciel":
                div_icon.classList.add("logiciel");
                ic.className = "fa-solid fa-keyboard";
                console.log(div_icon.innerHTML)
                break;
            case "Matériel":
                div_icon.classList.add("matériel");
                ic.className = "fa-solid fa-network-wired";
                break;
            case "Réseau":
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

        a_delete.addEventListener("click", () => { supprimer(données[i].id) });
        a_edit.addEventListener("click", () => { recuperer_data(données[i].id) });
    }
        
}