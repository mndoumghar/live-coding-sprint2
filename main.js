const data = [
  { id: 1, nom: "Sara", groupe: "Groupe A", present: false },
  { id: 2, nom: "Yassine", groupe: "Groupe A", present: false },
  { id: 3, nom: "Amine", groupe: "Groupe A", present: false },
  { id: 4, nom: "Meryem", groupe: "Groupe B", present: false },
  { id: 5, nom: "Mohamed", groupe: "Groupe B", present: false },
  { id: 6, nom: "omar", groupe: "Groupe A", present: false },
  { id: 7, nom: "Meryem", groupe: "Groupe B", present: false },
  { id: 8, nom: "ali", groupe: "Groupe c", present: false },

];

const liste = document.querySelector("#liste");
const selection = document.querySelector("#selection");



const render = (apprenant = data) => {
  liste.innerHTML = "";

  apprenant.forEach(element => {
    const card = document.createElement("div");
    card.className = "card";

    const nom = document.createElement("h2");
    nom.textContent = element.nom;

    const groupe = document.createElement("p");
    groupe.textContent = element.groupe;

    const appel = document.createElement("div");
    appel.className = "appel";

    const statut = document.createElement("span");
    statut.textContent = element.present ? "Présent" : "Absent";

    const bouton = document.createElement("button");
    bouton.type = "button";
    bouton.textContent = element.present ? "Absent" : "Présent";
    bouton.style.color = element.present ? "red" : "green";
    appel.append(statut, bouton);
    card.append(nom, groupe, appel);
    liste.append(card);

  });
};



const renderSelection = (apprenant) => {
  selection.innerHTML = "";

  apprenant.forEach(element => {
    const card = document.createElement("div");
    card.className = "card";
    const nom = document.createElement("h2");
    nom.textContent = element.nom;
    const groupe = document.createElement("p");
    groupe.textContent = element.groupe;
    const appel = document.createElement("div");
    appel.className = "appel";
    const statut = document.createElement("span");
    statut.textContent = "Présent";

    const bouton = document.createElement("button");
    bouton.type = "button";
    bouton.textContent = "X";
    bouton.style.color = "red";
    bouton.setAttribute("aria-label", `Retirer ${element.nom}`);
    appel.append(statut, bouton);
    card.append(nom, groupe, appel);
    selection.append(card);
  });
};




render();




